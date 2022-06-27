import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const OrderPlacement = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const min = 100;
    const max = 50000;

    const [value, setValue] = useState(0);

    const [user] = useAuthState(auth)
    
    const handleChange = (e) => {
        // e.preventDefault()
        const value = Math.max(min, Math.min(max, Number(e.target.value)));
        // Number() converts string into number type
        // Math.min() - taking two arguments, max and number which is given -- finds the lowest
        // Math.max() - taking two arguments, min and the lowest -- finds the largest
        // Formula: Math.max(a, Math.min(b, x))

        setValue(value);
    }

    useEffect(() => {
        if (value < min || value > max) {
            setIsButtonDisabled(true)
        }
        else {
            setIsButtonDisabled(false)
        }
    }, [value])
    
    const addressRef = useRef('')
    const phoneRef = useRef('')
    const quantityRef = useRef()

    const handleOrder = (e) => {
        e.preventDefault()
        const address = addressRef.current.value
        const phone = phoneRef.current.value
        const quantity = quantityRef.current.value
        
        const order = {
            orderId: user._id,
            user: user.displayName,
            address: address,
            phone: phone,
            quantity: quantity
        }

        fetch(`http://localhost:5000/orders`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
            console.log(result)
        })
    }

    return (
        <div>
            <h4>place order</h4>
            <form onSubmit={handleOrder}>
                <textarea
                    autoComplete='off'
                    ref={addressRef}
                    className='form-control' id="exampleFormControlTextarea1" name="address" cols="30" rows="10" placeholder='Address'></textarea>
                <input
                    autoComplete='off'
                    ref={phoneRef} type="tel" name="phone" id="phone" placeholder='Phone Number' /> <br />
                <input 
                    autoComplete='off'
                    ref={quantityRef}
                    type='number'
                    placeholder='Enter the quantity'
                    value={value}
                    onChange={handleChange}
                /> <br />
                <input disabled={isButtonDisabled} type="submit" value="Complete Purchase" /> <br />
            </form>
            
        </div>
    );
};

export default OrderPlacement;