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
		<div className="hero pt-5 pb-20">
			<div className="card lg:w-4/6 bg-base-200">
				<div className="mb-5">
					<h2 className="text-xl">User Details:</h2>
					<p>{user?.email}</p>
					<p>{user?.displayName}</p>
				</div>
				<div className="mb-8">
					<h2 className="text-xl">Tool Details:</h2>
					<h2 className="card-title">{singleTool?.name}</h2>
					<p className="text-xs">{id}</p>
					<p>Price range: {singleTool?.price}</p>
					<p>{singleTool?.description}</p>
				</div>
				<figure>
					<img src={singleTool?.img} alt="Tool" />
				</figure>
			</div>
		</div>
	);
};

export default ToolDetail;
