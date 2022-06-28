import React from 'react';
import { Link, useNavigate} from 'react-router-dom'

const Tool = ({ tool }) => {
    const { _id, name, img, description, minOrder, availableQuantity, price } = tool || {}
    const navigate = useNavigate()

    const navigateToPurchaseDetail = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div>
            <div className="" style={{ maxWidth: "540px" }}>
                <div className="">
                    <div className="">
                        <img src={img} className="" alt="..." />
                    </div>
                    <div className="">
                        <div className="">
                            <h5 className="">{name}</h5>
                            <p className="">{description}</p>
                            <p className="">Minimum Order: {minOrder}</p>
                            <p className="">Available Quantity: {availableQuantity}</p>
                            <p className="">Price: ${price}</p>
                            <button onClick={() => navigateToPurchaseDetail(_id)}><Link to="/purchase">Place Order</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;