import React from "react";
import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

const BusinessSummary = () => {
	return (
		<div>
			<h4 className="text-2xl text-center mt-16">
				MILLIONS OF BUSINESS TRUST US
			</h4>
			<h6 className="text-center mb-10">TRY TO UNDERSTAND USERS EXPECTATION</h6>
			<div className="flex flex-wrap">
				<div className="pl-36 grid justify-items-center ">
					<FiIcons.FiFlag size={70} />
					<p className="text-center font-bold text-3xl">70</p>
					<p className="text-2xl">Countries</p>
				</div>
				<div className="pl-36 grid justify-items-center ">
					<BsIcons.BsPeople size={70} />
					<p className="text-center font-bold text-3xl">250+</p>
					<p className="text-2xl">Happy Clients</p>
				</div>
				<div className="pl-36 grid justify-items-center ">
					<BsIcons.BsTools size={70} />
					<p className="text-center font-bold text-3xl">40+</p>
					<p className="text-2xl">Tools</p>
				</div>
				<div className="pl-36 grid justify-items-center ">
					<MdIcons.MdOutlineReviews size={70} />
					<p className="text-center font-bold text-3xl">30K+</p>
					<p className="text-2xl">Reviews</p>
				</div>
			</div>
		</div>
	);
};

export default BusinessSummary;
