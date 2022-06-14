import React from 'react';

const OrderPlacement = () => {
    return (
        <div>
            <h4>place order</h4>
            <textarea className='form-control' id="exampleFormControlTextarea1" name="" cols="30" rows="10" placeholder='Address'></textarea>
            <input type="tel" name="phone" id="phone" placeholder='Phone Number'/>
            <input type="submit" value="Complete Purchase" />
        </div>
    );
};

export default OrderPlacement;