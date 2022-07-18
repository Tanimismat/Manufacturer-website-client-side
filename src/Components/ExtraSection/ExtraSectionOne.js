import React from "react";
import { Link } from "react-router-dom";

const ExtraSectionOne = ({ setModal }) => {
	return (
		<div className="mt-10">
			<div className="flex justify-center">
				<label
					htmlFor="my-modal-6"
					className="btn btn-primary modal-button w-52 text-white">
					Click here to Get Offer
				</label>
			</div>

			<input type="checkbox" id="my-modal-6" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<label
						onClick={() => setModal(false)}
						htmlFor="my-modal-6"
						className="btn btn-sm btn-circle absolute right-2 top-2">
						✕
					</label>
					<h3 className="font-bold text-lg">
						Grab Your Exclusive 5% Off Your First Order*
					</h3>
					<p className="py-4">Yes! I want 5% OFF my FIRST Order!</p>
					<div>
						<input
							type="text"
							placeholder="Enter your name"
							className="input input-bordered w-full max-w-xs mb-4"
						/>
						<input
							type="email"
							placeholder="Enter your email"
							className="input input-bordered w-full max-w-xs"
						/>
					</div>
					<div className="modal-action grid justify-items-start">
						<label
							htmlFor="my-modal-6"
							className="btn grid justify-items-start">
							<Link to="/login">Continue</Link>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExtraSectionOne;
