import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import logo from "../../images/logo2.png";

const Header = () => {
	const [user] = useAuthState(auth);
	const logout = () => {
		signOut(auth);
		localStorage.removeItem("accessToken");
	};

	const menuItems = (
		<>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link className="w-28" to="/purchase">
					Purchase
				</Link>
			</li>
			<li>
				<Link to="/blogs">Blogs</Link>
			</li>
			<li>
				{user ? (
					<button className="w-24" onClick={logout}>
						Log out
					</button>
				) : (
					<Link to="/login">Login</Link>
				)}
			</li>
			<li>{user && <Link to="/dashboard">Dashboard</Link>}</li>
			<li>
				<Link className="w-32" to="/portfolio">
					My Portfolio
				</Link>
			</li>
		</>
	);

	return (
		<>
			<div className="sticky top-0 z-50 p-6 navbar bg-base-100 drop-shadow-md">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex="0" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex="0"
							className="menu menu-compact dropdown-content mt-3 p-5 shadow bg-base-100 rounded-box w-52">
							{menuItems}
						</ul>
					</div>
					<Link to="/" className="btn btn-ghost normal-case text-xl mx-10">
						<img
							className="mr-2"
							style={{ width: "65px", height: "65px" }}
							src={logo}
							alt=""
						/>
						TOOLLANCE
					</Link>
				</div>

				<div className="navbar-start hidden lg:flex">
					<ul className="menu menu-horizontal p-0">{menuItems}</ul>
				</div>
				{/* ---------- DashBoard---------- */}
				<div className="navbar-end">
					<label
						htmlFor="my-drawer-2"
						className="btn btn-primary drawer-button lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
				</div>
			</div>
		</>
	);
};

export default Header;
