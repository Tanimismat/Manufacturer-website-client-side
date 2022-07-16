import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import ToolDetail from "../ToolDetail/ToolDetail";
import OrderPlacement from "./OrderPlacement";

const Purchase = () => {
	return (
		<div className="bg-base-200">
			<Header></Header>
			<ToolDetail></ToolDetail>
			<OrderPlacement></OrderPlacement>
			<Footer></Footer>
		</div>
	);
};

export default Purchase;
