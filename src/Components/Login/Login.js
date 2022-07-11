import React, { useState } from 'react';
import Header from '../Shared/Header';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useToken from '../Hooks/useToken';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [userInfo, setUserInfo] = useState();

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    
    const [token] = useToken(user || googleUser)
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    let signInError;
    if (error || googleError) {
        signInError = <p className=""><small>{ error?.message || googleError?.message }</small></p>
    }

    if (googleLoading || loading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        setUserInfo(data)
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    }
    console.log("user info",userInfo)

return (
    <div>
        <Header></Header>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    className="input input-bordered"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    name='email'
                                    autoComplete='off'
                                    {...register('email', {
                                        required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                        pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})/,
                                        message: 'Please provide a valid email' 
                                    }
                                })}
                                />
                            </div>
                            <div className='text-red-500'>
                                {errors.email?.type === 'required' && <p>{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p>{errors.email.message}</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    className="input input-bordered"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    name='password'
                                    {...register('password', {
                                    required: {
                                            value: true,
                                            message: "Password is required"
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                            message:'Password must be eight characters including one letter, one number and one special character'
                                        }
                                    })}
                                />
                                <label className="label">
                                    <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className=''>
                                {errors.password?.type === 'required' && <p>{errors.password.message}</p>}
                                {errors.password?.type === 'pattern' && <p>{errors.password.message}</p>}
                            </div>
                            {signInError}
                            <div className="form-control mt-2">
                                <button
                                    type="submit"
                                    className="btn btn-primary">Login</button>
                            </div>
                        </form>    
                        <p className=''>or Connect with Social Media</p>
                        <button
                            onClick={() => signInWithGoogle()}
                            type="submit"
                            className="btn btn-primary">Sign in with Google</button>
                        
                        <p>Don't have an account? <Link to="/register">Please Register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;