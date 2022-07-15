import React, { useState } from "react";
import ExtraSection2 from "../ExtraSection/ExtraSection2";
import ExtraSectionOne from "../ExtraSection/ExtraSectionOne";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
	const [modal, setModal] = useState(true);

	return (
		<div className="bg-base-200">
			<Header></Header>
			<Banner></Banner>

			{modal}
			<ExtraSectionOne setModal={setModal}></ExtraSectionOne>
			<ExtraSection2></ExtraSection2>
			<Tools></Tools>
			<BusinessSummary></BusinessSummary>
			<Reviews></Reviews>
			<Footer></Footer>
		</div>
	);
};

export default Home;
