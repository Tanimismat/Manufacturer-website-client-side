import React, { useState } from 'react';
import Header from '../Shared/Header';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [userInfo, setUserInfo] = useState();

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if (googleUser) {
        console.log(googleUser)
    // return (
    //   <div>
    //     <p>Signed In User: {googleUser.displayName}</p>
    //   </div>
    //     );
    }

    const onSubmit = data => {
        setUserInfo(data)
        console.log(data)
    }
    console.log("errors",errors)
    console.log("user info",userInfo)

return (
    <div>
        <Header></Header>
        <div className="w-25 mx-auto">
            <div className="text-center">
                <h3>Sign in</h3>
                <p>to continue access</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='needs-validation' >
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name='email'
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
                <button>Continue</button>
            </form>

            <p className="text-end">Forget Password?</p>
            <p>Don't have an account? Please Register</p>
            
            <p className='text-center'>or Connect with Social Media</p>
            <button onClick={()=> signInWithGoogle()} className="w-100 mb-2">Sign in with Google</button>
            <button className="w-100">Sign in with Twitter</button>
        </div>
        
    </div>
    );
};

export default Login;