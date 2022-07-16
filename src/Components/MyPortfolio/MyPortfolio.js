import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const MyPortfolio = () => {
	return (
		<div className="bg-base-200 ">
			<Header></Header>
			<div className="hero mt-14 mb-96">
				<div class=" card w-3/5 bg-base-100 shadow-xl">
					<div class="card-body">
						<h2 className="text-center text-xl font-semibold">My Portfolio</h2>
						<p>Name: Tanim Ismat</p>
						<p>Email address: tanim.ismat@gmail.com</p>
						<p>
							Educational Background: Graduated from Department of Materials
							Science & Engineering, University of Rajshahi
						</p>
						<p>Technologies I know as a web developer: </p>
						<li>Frontend library -- React</li>
						<li>CSS framework -- Bootstrap</li>
						<li>Vanilla CSS</li>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default MyPortfolio;
