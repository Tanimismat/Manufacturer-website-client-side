import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user (1).png";

const Reviews = () => {
	return (
		<div className="py-16">
			<div className="grid gap-16 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 px-16">
				{/* ---------------- review 1 --------------------- */}
				<div className="card bg-base-100 shadow-xl">
					<div className="card-body">
						<div className="card-title">
							<div className="flex items-center mb-4 space-x-4">
								<div className="avatar">
									<div className="w-24 rounded-full">
										<img src={user} alt="User" />
									</div>
								</div>
								<div className="space-y-1 font-medium">
									<p>
										Jese Leos{" "}
										<time
											dateTime="2014-08-16 19:00"
											className="block text-sm text-gray-500 dark:text-gray-400">
											Joined on August 2021
										</time>
									</p>
								</div>
							</div>
						</div>
						<div className="flex items-center mb-1">
							<svg
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<h3 className="ml-2 text-sm font-semibold text-gray-900">
								Thinking to buy another one!
							</h3>
						</div>
						<footer className="mb-5 text-sm">
							<p>
								Reviewed in the United Kingdom on{" "}
								<time datetime="2017-03-03 19:00">March 3, 2017</time>
							</p>
						</footer>
						<p className="mb-2 font-light">
							This is my third .... They are just fantastic value for money.
							This one arrived yesterday and the first thing I did was set the
							time...
						</p>
						<Link
							to="/"
							className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
							Read more
						</Link>
						<aside>
							<p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
								19 people found this helpful
							</p>
							<div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
								<Link
									to="#"
									className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
									Helpful
								</Link>
							</div>
						</aside>
					</div>
				</div>
				{/* --------------- review 2 ---------------- */}
				<div className="card bg-base-100 shadow-xl">
					<div className="card-body">
						<div className="card-title">
							<div className="flex items-center mb-4 space-x-4">
								<div className="avatar">
									<div className="w-24 rounded-full">
										<img src={user} alt="User" />
									</div>
								</div>
								<div className="space-y-1 font-medium">
									<p>
										Jese Leos{" "}
										<time
											dateTime="2014-08-16 19:00"
											className="block text-sm text-gray-500 dark:text-gray-400">
											Joined on August 2021
										</time>
									</p>
								</div>
							</div>
						</div>
						<div className="flex items-center mb-1">
							<svg
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<h3 className="ml-2 text-sm font-semibold text-gray-900">
								Thinking to buy another one!
							</h3>
						</div>
						<footer className="mb-5 text-sm">
							<p>
								Reviewed in the United Kingdom on{" "}
								<time datetime="2017-03-03 19:00">March 3, 2017</time>
							</p>
						</footer>
						<p className="mb-2 font-light">
							This is my third .... They are just fantastic value for money.
							This one arrived yesterday and the first thing I did was set the
							time...
						</p>
						<Link
							to="/"
							className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
							Read more
						</Link>
						<aside>
							<p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
								19 people found this helpful
							</p>
							<div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
								<Link
									to="#"
									className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
									Helpful
								</Link>
							</div>
						</aside>
					</div>
				</div>
				{/* -------------- review 3 --------------- */}
				<div className="card bg-base-100 shadow-xl">
					<div className="card-body">
						<div className="card-title">
							<div className="flex items-center mb-4 space-x-4">
								<div className="avatar">
									<div className="w-24 rounded-full">
										<img src={user} alt="User" />
									</div>
								</div>
								<div className="space-y-1 font-medium">
									<p>
										Jese Leos{" "}
										<time
											dateTime="2014-08-16 19:00"
											className="block text-sm text-gray-500 dark:text-gray-400">
											Joined on August 2021
										</time>
									</p>
								</div>
							</div>
						</div>
						<div className="flex items-center mb-1">
							<svg
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<h3 className="ml-2 text-sm font-semibold text-gray-900">
								Thinking to buy another one!
							</h3>
						</div>
						<footer className="mb-5 text-sm">
							<p>
								Reviewed in the United Kingdom on{" "}
								<time datetime="2017-03-03 19:00">March 3, 2017</time>
							</p>
						</footer>
						<p className="mb-2 font-light">
							This is my third .... They are just fantastic value for money.
							This one arrived yesterday and the first thing I did was set the
							time...
						</p>
						<Link
							to="/"
							className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
							Read more
						</Link>
						<aside>
							<p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
								19 people found this helpful
							</p>
							<div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
								<Link
									to="#"
									className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
									Helpful
								</Link>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
