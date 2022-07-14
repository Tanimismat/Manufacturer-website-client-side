import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useTools from "../Hooks/useTools";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ToolDetail = () => {
	const [user] = useAuthState(auth);
	// console.log(user)
	const [singleTool, setSingleTool] = useState();
	const { id } = useParams();
	const [tools] = useTools();

	useEffect(() => {
		const found = tools.find((item) => item._id === id);
		found && setSingleTool(found);
	}, [tools, id]);
	return (
		<div>
			<div class="card lg:card-side bg-base-100 shadow-xl">
				<figure>
					<img src="https://placeimg.com/400/400/arch" alt="Album" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">New album is released!</h2>
					<p>Click the button to listen on Spotiwhy app.</p>
					<div class="card-actions justify-end">
						<button class="btn btn-primary">Listen</button>
					</div>
				</div>
			</div>
			<h5>Tool detail: {id}</h5>
			<p>{user?.displayName}</p>
			<p>{user?.email}</p>
			<img className="" src={singleTool?.img} alt="tool" />
			<h6>{singleTool?.name}</h6>
			<h5>$ {singleTool?.price}</h5>
			<p>{singleTool?.description}</p>
		</div>
	);
};

export default ToolDetail;
