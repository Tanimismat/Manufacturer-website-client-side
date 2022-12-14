import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
	const { _id, name, img, description, minOrder, availableQuantity, price } =
		tool || {};
	const navigate = useNavigate();

	const navigateToPurchaseDetail = (id) => {
		navigate(`/purchase/${id}`);
	};
	return (
		<div className="card glass w-96 m-7">
			<figure>
				<img src={img} alt="Tools" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				<p>{description}</p>
				<p className="">Minimum Order: {minOrder}</p>
				<p className="">Available Quantity: {availableQuantity}</p>
				<p className="">Price: {price}</p>
				<div className="card-actions justify-center">
					<button
						onClick={() => navigateToPurchaseDetail(_id)}
						className="btn btn-primary text-white">
						<Link to="/purchase">Place Order</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Tool;
