import React from "react";
import { Link } from "react-router-dom";

const ExtraSection2 = ({ setBottomBar }) => {
	return (
		<div>
			<div id="bottom-bar" className="navbar bg-base-200 fixed bottom-0 z-50">
				<div className="flex justify-center">
					<p className="ml-5 font-light">
						Checkout our Mining Process & Lab Equipment Section.
					</p>
					<Link to="/login" className="btn btn-ghost normal-case text-xl ">
						Click Here to Enter
					</Link>
				</div>
				<label
					onClick={() => setBottomBar(false)}
					htmlFor="bottom-bar"
					className="btn btn-sm btn-circle absolute right-2 top-2">
					✕
				</label>
			</div>
		</div>
	);
};

export default ExtraSection2;
