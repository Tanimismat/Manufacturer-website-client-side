import React, { useState } from 'react';
import { useEffect } from 'react';

const OrderPlacement = () => {

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const min = 100;
    const max = 50000;

    const [value, setValue] = useState(0);
    
    const handleChange = (e) => {
        // e.preventDefault()
        const value = Math.max(min, Math.min(max, Number(e.target.value)));
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
    },[value])

    return (
        <div>
            <h4>place order</h4>
            <form>
                <textarea className='form-control' id="exampleFormControlTextarea1" name="" cols="30" rows="10" placeholder='Address'></textarea>
                <input type="tel" name="phone" id="phone" placeholder='Phone Number' /> <br />
                <input 
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