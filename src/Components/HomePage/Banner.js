import React from "react";
import banner2 from "../../images/banner-2.png";

const Banner = () => {
	return (
		<div className="my-2">
			<div className="hero lg:p-16 md:p-36">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src={banner2}
						className="max-w-sm rounded-lg shadow-2xl"
						alt="Album"
					/>
					<div>
						<h1 className="text-4xl font-bold">
							The First Name in Build-to-Last
						</h1>
						<p className="py-6">
							Our manufacturing process is specially designed to deliver
							stronger, more precise, and longer lasting tools.
						</p>
						<button className="btn btn-primary text-white">Log in</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;

// lg:card-side
