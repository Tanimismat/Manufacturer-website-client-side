import React, { useState } from 'react';
import Header from '../Shared/Header';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [userInfo, setUserInfo] = useState();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    let signInError;

    if (error || updatingError) {
        signInError = <p className="text-danger text-center"><small>{ error?.message}</small></p>
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        // console.log( user)
        navigate(from, { replace: true })
    }

    const onSubmit = async data => {
        setUserInfo(data)
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName : data.name})
        console.log('update done')
    }
    console.log("errors",errors)
    console.log("user info",userInfo)
    return (
        <div>
        <Header></Header>
        <div className="w-50 mx-auto">
            <div className="text-center">
                <h3>Please Register</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='needs-validation' >
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        // id="floatingInput"
                        placeholder="Name"
                        name='name'
                        autoComplete='off'
                        {...register('name', {
                            required: {
                                value: true,
                                message: "Name is required"
                            }
                        })}
                    />
                    <label htmlFor="floatingInput">Name</label>
                    </div>
                <div className='text-danger'>
                    {errors.name?.type === 'required' && <p>{errors.name.message}</p>}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        // id="floatingInput"
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
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className='text-danger'>
                    {errors.email?.type === 'required' && <p>{errors.email.message}</p>}
                    {errors.email?.type === 'pattern' && <p>{errors.email.message}</p>}
                </div>

                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control" id="floatingPassword"
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
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className='text-danger'>
                    {errors.password?.type === 'required' && <p>{errors.password.message}</p>}
                    {errors.password?.type === 'pattern' && <p>{errors.password.message}</p>}
                </div>
                { signInError }
                <button>Continue</button>
            </form>

            <p className="text-end">Forget Password?</p>
            <p>Already have an account? <Link to="/login">Please Login</Link> </p>
            
        </div>
        
    </div>
    );
};

export default Register;