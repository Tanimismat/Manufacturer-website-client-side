import React from "react";
import Header from "../Shared/Header";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Shared/Footer";

const Dashboard = () => {
	return (
		<>
			<Header></Header>
			<div className="drawer drawer-mobile">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content ">
					<Outlet></Outlet>
				</div>

				<div className="drawer-side">
					<label htmlFor="my-drawer-2" className="drawer-overlay">
						open
					</label>
					<ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content z-0">
						<li>
							<Link to="/dashboard">My Orders</Link>
						</li>
						<li>
							<Link to="/dashboard/review">Add A Review</Link>
						</li>
						<li>
							<Link to="/dashboard/profile">My Profile</Link>
						</li>
					</ul>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
};

export default Dashboard;
