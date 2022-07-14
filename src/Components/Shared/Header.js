import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

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
			<li className="pl-5">
				<Link to="/purchase">Purchase</Link>
			</li>
			<li className="pl-5">
				<Link to="/blogs">Blogs</Link>
			</li>
			<li className="pl-5">
				{user ? (
					<button onClick={logout}>Log out</button>
				) : (
					<Link to="/login">Login</Link>
				)}
			</li>
			<li>{!user && <Link to="/register">Register</Link>}</li>
			<li>{user && <Link to="/dashboard">Dashboard</Link>}</li>
		</>
	);

	return (
		<>
			<div className="sticky top-0 z-50 p-6 navbar bg-base-100">
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
							tabIndex="1"
							className="menu menu-compact dropdown-content mt-3 p-5 shadow bg-base-100 rounded-box w-52">
							{menuItems}
						</ul>
					</div>
					<Link to="/" className="btn btn-ghost normal-case text-xl pl-24">
						Manufacturer Website
					</Link>
				</div>

				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal p-0">{menuItems}</ul>
				</div>
			</div>
		</>
	);
};

export default Header;
