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
						<li className="ml-3">JS Frontend library -- React</li>
						<li className="ml-3">CSS framework -- Bootstrap</li>
						<li className="ml-3">Vanilla CSS</li>
						<p>Familiar with:</p>
						<li className="ml-3">JS runtime -- Node.js</li>
						<li className="ml-3">Database -- MongoDB</li>
						<li className="ml-3">CSS framework -- Tailwind CSS</li>
						<p>Links of three of my projects:</p>
						<li className="ml-3">
							<a
								className="hover:underline underline-offset-2 hover:text-primary"
								href="https://independent-service-prov-fd90d.web.app/">
								Your success mentor
							</a>
						</li>
						<li className="ml-3">
							<a
								className="hover:underline underline-offset-2 hover:text-primary"
								href="https://profound-genie-32ff25.netlify.app/">
								Laptop-analysis-website
							</a>
						</li>
						<li className="ml-3">
							<a
								className="hover:underline underline-offset-2 hover:text-primary"
								href="https://hungry-babbage-6ee332.netlify.app/">
								Phone arena
							</a>
						</li>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default MyPortfolio;
