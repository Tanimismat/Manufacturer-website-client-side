import React from "react";
import Header from "../Shared/Header";
import products from "../../images/products.png";
import filter from "../../images/filter.png";
import Footer from "../Shared/Footer";

const Blogs = () => {
	return (
		<div className="bg-base-200">
			<Header></Header>
			<div className="ml-24">
				<div className="p-8">
					<h6 className="font-semibold mb-2">
						1. How will you improve the performance of a react application?
					</h6>
					<p className="text-sm">The approaches are given below:</p>
					<li className="text-sm">Using the production build </li>
					<li className="text-sm">
						Profiling the components with the devtools
					</li>
					<li className="text-sm">
						Virtualizing long lists using react window
					</li>
					<li className="text-sm">
						Using fragment to avoid adding extra nodes to DOM
					</li>
					<li className="text-sm">
						Optimizing app loading time with code splitting
					</li>
				</div>
				{/* -------------------------------- */}
				<div className="p-8">
					<h5 className="font-semibold mb-2">
						2. What are the different ways to manage a state in a react
						application?
					</h5>
					<p className="text-sm">
						We can take different approach based on the kind of state to manage.
						Here are some states and the way of managing them are given below.
					</p>
					<p className="text-sm">
						Local state : state that manage data in a single component. For
						example, to show or hide modal. This kind of states can be managed
						using useState( ) and useReducer( ) hooks.
					</p>
					<p className="text-sm">
						Global state : state for managing data across multiple components.
						For example, authenticated user state. Global states are managed
						using useReducer( ), useContext( ) hooks and using libraries like
						Redux, Zustand, Jotai, Recoil etc.
					</p>
					<p className="text-sm">
						Server state : This states deals with data that comes from external
						server. Example : Loading state or error. The way of managing these
						states are using libraries like SWR and React Query.
					</p>
					<p className="text-sm">
						URL state : These states contain information like query parameter,
						pathname, location, history etc. useHistory( ), uesLocation( ),
						useParams( ) are used to manage these kind of states.
					</p>
				</div>
				{/* ---------------------------------- */}
				<div className="p-8">
					<h4 className="font-semibold mb-2">
						3. How does prototypical inheritance work?
					</h4>
					<p className="text-sm">
						Prototype is a private property which links one object to another.
						The word 'prototypical inheritance' is a feature of JS used to add
						methods and properties in object which means by this method an
						object can have another object's properties and methods to reuse.
						The prototypical inheritance is explained through the image below :
					</p>
					<img
						className="py-3"
						src="https://i.ibb.co/5KN3Y5Y/Screenshot-5.png"
						alt=""
					/>
				</div>
				{/* -------------------------------- */}
				<div className="p-8">
					<h4 className="font-semibold mb-2">
						4. What is unit test? Why should write unit test?
					</h4>
					<p className="text-sm">
						Unit test is testing procedure by which individual units of written
						code are tested to determine if they are fit for use or not.
					</p>
					<p className="text-sm">
						Here are the key reasons to perform unit test:
					</p>

					<li className="text-sm">Helps to fix bugs</li>
					<li className="text-sm">
						Enable the developers to make changes quickly
					</li>
					<li className="text-sm">Reduce costs</li>
					<li className="text-sm">Improve design and performance</li>
				</div>
				{/*-------------------------------------------- */}
				<div className="p-8">
					<h4 className="font-semibold mb-2">
						5. You have an array of products. Each product has a name, price,
						description, etc. How will you implement a search to find products
						by name?
					</h4>
					<p className="text-sm">
						We can find desired products by implementing filter method on an
						array of products. Suppose we have an array of products like this
					</p>
					<img className="py-3" src={products} alt="Blog" />
					<p className="text-sm">
						Then apply filter() to get all products with a name that is equal to
						"Watch"
					</p>
					<img className="py-3" src={filter} alt="Blog" />
					<p className="text-sm">
						Expected output will be an array of two objects having product name
						"Watch".
					</p>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Blogs;
