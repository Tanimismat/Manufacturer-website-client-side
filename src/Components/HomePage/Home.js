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

	const [bottomBar, setBottomBar] = useState(true);

	return (
		<div>
			<Header></Header>
			<Banner></Banner>
			{modal}
			{bottomBar && <ExtraSection2 setBottomBar={setBottomBar}></ExtraSection2>}
			<Tools></Tools>
			<ExtraSectionOne setModal={setModal}></ExtraSectionOne>
			<BusinessSummary></BusinessSummary>
			<Reviews></Reviews>
			<Footer></Footer>
		</div>
	);
};

export default Home;
