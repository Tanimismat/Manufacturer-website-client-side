import React from 'react';
import { Link } from 'react-router-dom'

const tool = ({ tool }) => {
    // console.log(tool)
    const { name, img, description, minOrder, availableQuantity, price } = tool;
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
                            <button><Link to="/purchase">Place Order</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default tool;