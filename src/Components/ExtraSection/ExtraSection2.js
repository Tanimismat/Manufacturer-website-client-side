import React from "react";
import { Link } from "react-router-dom";

const ExtraSection2 = () => {
	return (
		<div className="">
			<div className="navbar bg-red-600 fixed bottom-0 z-50">
				<p>Checkout our Mining Process & Lab Equipment Section</p>
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					Click Here to Enter
				</Link>
				<label
					htmlFor="my-modal-3"
					className="btn btn-sm btn-circle absolute right-2 top-2">
					✕
				</label>
			</div>
		</div>
	);
};

export default ExtraSection2;
