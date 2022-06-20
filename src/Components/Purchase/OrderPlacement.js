import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';


const OrderPlacement = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const min = 100;
    const max = 50000;

    const [value, setValue] = useState(0);
    
    const handleChange = (e) => {
        // e.preventDefault()
        const value = Math.max(min, Math.min(max, Number(e.target.value)));
        // Number() converts string into number type
        // Math.min() - taking two arguments, max and number which is given -- finds the lowest
        // Math.max() - taking two arguments, min and the lowest -- finds the largest
        // Formula: Math.max(a, Math.min(b, x))

        setValue(value);
    }
    console.log(value)

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
    const handleSubmit = (e) => {
        e.preventDefault()
        const address = addressRef.current.value
        const phone = phoneRef.current.value
        const quantity = quantityRef.current.value
        console.log(address, phone, quantity)

        const url = `http://localhost:5000/tools`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(address, phone, quantity)
        })
            .then(res => res.json())
            .then(result => {
            console.log(result)
        })
    }

    return (
        <div>
            <h4>place order</h4>
            <form onSubmit={handleSubmit}>
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