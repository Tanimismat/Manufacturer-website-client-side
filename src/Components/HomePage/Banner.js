import React from "react";
import banner2 from "../../images/banner-2.png";

const Banner = () => {
	return (
		<div className="my-10">
			<div class="hero bg-base-200 p-24">
				<div class="hero-content flex-col lg:flex-row-reverse">
					<img
						src={banner2}
						class="max-w-sm rounded-lg shadow-2xl"
						alt="Album"
					/>
					<div>
						<h1 class="text-5xl font-bold">Box Office News!</h1>
						<p class="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<button class="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;

// lg:card-side
