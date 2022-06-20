import React from 'react';
import { Link, useNavigate} from 'react-router-dom'

const Tool = ({ tool }) => {
    console.log(tool)
    const { _id, name, img, description, minOrder, availableQuantity, price } = tool || {}
    console.log(name)
    const navigate = useNavigate()

    const navigateToPurchaseDetail = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text">Minimum Order: {minOrder}</p>
                            <p className="card-text">Available Quantity: {availableQuantity}</p>
                            <p className="card-text">Price: ${price}</p>
                            <button onClick={() => navigateToPurchaseDetail(_id)}><Link to="/purchase">Place Order</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;