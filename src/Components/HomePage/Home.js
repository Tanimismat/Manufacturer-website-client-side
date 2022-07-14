import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
	return (
		<div className="bg-base-200">
			<Header></Header>
			<Banner></Banner>
			<Tools></Tools>
			<BusinessSummary></BusinessSummary>
			<Reviews></Reviews>
			<Footer></Footer>
		</div>
	);
};

export default Home;
