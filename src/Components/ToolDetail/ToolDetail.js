import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useTools from "../Hooks/useTools";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ToolDetail = () => {
	const [user] = useAuthState(auth);
	const [singleTool, setSingleTool] = useState();
	const { id } = useParams();
	const [tools] = useTools();

	useEffect(() => {
		const found = tools.find((item) => item._id === id);
		found && setSingleTool(found);
	}, [tools, id]);
	return (
		<div>
			<div className="card lg:w-4/6 bg-base-100">
				<div className="card-body">
					<h2 className="text-xl">User Details:</h2>
					<p>{user?.email}</p>
					<p>{user?.displayName}</p>
				</div>
				<div className="card-body">
					<h2 className="text-xl">Tool Details:</h2>
					<h2 className="card-title">Name: {singleTool?.name}</h2>
					<p className="text-xs">{id}</p>
					<p>Price range: {singleTool?.price}</p>
					<p>{singleTool?.description}</p>
					<figure>
						<img src={singleTool?.img} alt="Tool" />
					</figure>
				</div>
			</div>
		</div>
	);
};

export default ToolDetail;

// const products = [
// 	{ name: "Watch", price: 10, color: "black" },
// 	{ name: "Watch", price: 10, color: "gray" },
// 	{ name: "Laptop", price: 15, color: "blue" },
// 	{ name: "Phone", price: 5, color: "gray" },
// ];

// const myProduct = products.filter((product) => product.name == "Watch");

// console.log(myProduct);
