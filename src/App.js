import { Route, Routes } from "react-router-dom";
import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/HomePage/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import RequireAuth from "./Components/Login/RequireAuth";
import Purchase from "./Components/Purchase/Purchase";
import NotFound from "./Components/Shared/NotFound";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyOrders from "./Components/Dashboard/MyOrders";
import AddReview from "./Components/Dashboard/AddReview";
import MyProfile from "./Components/Dashboard/MyProfile";
import MyPortfolio from "./Components/MyPortfolio/MyPortfolio";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/blogs" element={<Blogs />}></Route>
				<Route path="/purchase" element={<Purchase />}></Route>
				<Route
					path="/purchase/:id"
					element={
						<RequireAuth>
							<Purchase />
						</RequireAuth>
					}></Route>
				<Route
					path="/dashboard"
					element={
						<RequireAuth>
							<Dashboard />
						</RequireAuth>
					}>
					<Route index element={<MyOrders />}></Route>
					<Route path="review" element={<AddReview />}></Route>
					<Route path="profile" element={<MyProfile />}></Route>
				</Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/portfolio" element={<MyPortfolio />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</div>
	);
}

export default App;
