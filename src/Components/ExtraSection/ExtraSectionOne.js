import React from "react";
import { Link } from "react-router-dom";

const ExtraSectionOne = ({ setModal }) => {
	return (
		<div>
			<label htmlFor="my-modal-6" className="btn modal-button">
				open modal
			</label>

			<input type="checkbox" id="my-modal-6" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<label
						onClick={() => setModal(false)}
						for="my-modal-6"
						class="btn btn-sm btn-circle absolute right-2 top-2">
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
							class="input input-bordered w-full max-w-xs mb-4"
						/>
						<input
							type="email"
							placeholder="Enter your email"
							class="input input-bordered w-full max-w-xs"
						/>
					</div>
					<div className="modal-action grid justify-items-start">
						<label
							htmlFor="my-modal-6"
							className="btn grid justify-items-start">
							<Link to="/login">Let me in</Link>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExtraSectionOne;
