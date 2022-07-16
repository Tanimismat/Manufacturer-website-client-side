import React from "react";
import Header from "../Shared/Header";
import products from "../../images/products.png";
import filter from "../../images/filter.png";

const Blogs = () => {
	return (
		<div>
			<Header></Header>
			<div>
				<h6>How will you improve the performance of a react application?</h6>
				<li>Using the production build </li>
				<p>Profiling the components with the devtools</p>
				<p>Virtualizing long lists using react window</p>
				<p>Using fragment to avoid adding extra nodes to DOM</p>
				<p>Optimizing app loading time with code splitting</p>
			</div>
			<div>
				<h5>
					What are the different ways to manage a state in a react application?
				</h5>
				<p>
					We can take different approach based on the kind of state to manage.
					Here are some states and the way of managing them are given below.
				</p>
				<p>
					Local state : state that manage data in a single component. For
					example, to show or hide modal. This kind of states can be managed
					using useState( ) and useReducer( ) hooks.
				</p>
				<p>
					Global state : state for managing data across multiple components. For
					example, authenticated user state. Global states are managed using
					useReducer( ), useContext( ) hooks and using libraries like Redux,
					Zustand, Jotai, Recoil etc.
				</p>
				<p>
					Server state : This states deals with data that comes from external
					server. Example : Loading state or error. The way of managing these
					states are using libraries like SWR and React Query.
				</p>
				<p>
					URL state : These states contain information like query parameter,
					pathname, location, history etc. useHistory( ), uesLocation( ),
					useParams( ) are used to manage these kind of states.
				</p>
			</div>
			<div>
				<h4>How does prototypical inheritance work?</h4>
				<p>
					Prototype is a private property which links one object to another. The
					word 'prototypical inheritance' is a feature of JS used to add methods
					and properties in object which means by this method an object can have
					another object's properties and methods to reuse. The prototypical
					inheritance is explained through the image below :
				</p>
				<img src="https://i.ibb.co/5KN3Y5Y/Screenshot-5.png" alt="" />
			</div>
			<div>
				<h4>What is unit test? Why should write unit test?</h4>
				<p>
					Unit test is testing procedure by which individual units of written
					code are tested to determine if they are fit for use.
				</p>
				<p>Here are the key reasons to perform unit test:</p>
				<ul>
					<li>Helps to fix bugs</li>
					<li>Enable the developers to make changes quickly</li>
					<li>Reduce costs</li>
					<li>Improve design and performance</li>
				</ul>
			</div>
			<div>
				<h4>
					You have an array of products. Each product has a name, price,
					description, etc. How will you implement a search to find products by
					name?
				</h4>
				<p>
					We can find desired products by implementing filter method on an array
					of products. Suppose we have an array of products like this
				</p>
				<img src={products} alt="Blog" />
				<p>
					Then apply filter() to get all products with a name that is equal to
					"Watch"
				</p>
				<img src={filter} alt="Blog" />
				<p>
					Expected output will be an array of two objects having product name
					"Watch".
				</p>
			</div>
		</div>
	);
};

export default Blogs;
