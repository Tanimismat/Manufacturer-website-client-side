import React, { useState } from "react";
import Header from "../Shared/Header";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
	useCreateUserWithEmailAndPassword,
	useSignInWithGoogle,
	useUpdateProfile,
} from "react-firebase-hooks/auth";
import useToken from "../Hooks/useToken";
import { useRef } from "react";
import Footer from "../Shared/Footer";

const Register = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const [userInfo, setUserInfo] = useState();

	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

	const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

	const [token] = useToken(user || gUser);

	const nameRef = useRef("");
	const emailRef = useRef("");
	const passwordRef = useRef("");

	const location = useLocation();
	const navigate = useNavigate();

	let from = location.state?.from?.pathname || "/";

	let signInError;
	if (error || updatingError || gError) {
		signInError = (
			<p className="">
				<small>
					{error?.message || updatingError?.message || gError?.message}
				</small>
			</p>
		);
	}
	if (loading || updating || gLoading) {
		return <Loading></Loading>;
	}
	// if (user || gUser) {
	//     console.log( user || gUser)
	//     navigate(from, { replace: true })
	// }
	if (token) {
		navigate(from, { replace: true });
	}

	const onSubmit = async (data) => {
		await createUserWithEmailAndPassword(data.email, data.password);
		await updateProfile({ displayName: data.name });
		setUserInfo(data);
		const name = nameRef.current;
		const email = emailRef.current;
		const password = passwordRef.current;
		console.log(name, email, password);
	};
	console.log("user info", userInfo);
	return (
		<div>
			<Header></Header>
			<div className="hero py-12 bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<div className="card-body">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Name</span>
									</label>
									<input
										ref={nameRef}
										type="text"
										className="input input-bordered"
										id="floatingName"
										placeholder="Name"
										name="text"
										autoComplete="off"
									/>
								</div>

								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input
										ref={emailRef}
										type="email"
										className="input input-bordered"
										id="floatingInput"
										placeholder="name@example.com"
										name="email"
										autoComplete="off"
										{...register("email", {
											required: {
												value: true,
												message: "Email is required",
											},
											pattern: {
												value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})/,
												message: "Please provide a valid email",
											},
										})}
									/>
								</div>
								<div className="text-red-500">
									{errors.email?.type === "required" && (
										<p>{errors.email.message}</p>
									)}
									{errors.email?.type === "pattern" && (
										<p>{errors.email.message}</p>
									)}
								</div>

								<div className="form-control">
									<label className="label">
										<span className="label-text">Password</span>
									</label>
									<input
										ref={passwordRef}
										type="password"
										className="input input-bordered"
										id="floatingPassword"
										placeholder="Password"
										name="password"
										{...register("password", {
											required: {
												value: true,
												message: "Password is required",
											},
											pattern: {
												value:
													/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
												message:
													"Password must be eight characters including one letter, one number and one special character",
											},
										})}
									/>
									<label className="label">
										<Link to="#" className="label-text-alt link link-hover">
											Forgot password?
										</Link>
									</label>
								</div>
								<div className="">
									{errors.password?.type === "required" && (
										<p>{errors.password.message}</p>
									)}
									{errors.password?.type === "pattern" && (
										<p>{errors.password.message}</p>
									)}
								</div>
								{signInError}
								<div className="form-control mt-2">
									<button type="submit" className="btn btn-primary">
										Register
									</button>
								</div>
								<div className="form-control mt-2">
									<button
										onClick={() => signInWithGoogle()}
										type="submit"
										className="btn btn-primary">
										Google
									</button>
								</div>
							</form>
							<p>
								Already have an account?{" "}
								<Link to="/login" className="link link-primary">
									Please login
								</Link>{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Register;
