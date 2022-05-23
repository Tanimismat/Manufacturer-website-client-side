import React from 'react';

const tool = ({ tool }) => {
    console.log(tool)
    const { name, img, description, minOrder, availableQuantity, price } = tool;
    return (
        <div>
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">{description}</p>
                            <p class="card-text">Minimum Order: {minOrder}</p>
                            <p class="card-text">Available Quantity: {availableQuantity}</p>
                            <p class="card-text">Price: ${price}</p>
                            <button>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default tool;