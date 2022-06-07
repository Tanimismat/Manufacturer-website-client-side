import React, { useState } from 'react';
import Header from '../Shared/Header';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [userInfo, setUserInfo] = useState();

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
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
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
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        {...register('password', {
                         required: {
                                value: true,
                                message: "Password is required"
                            }
                    })}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className='text-danger'>
                    {errors.password?.type === 'required' && <p>{errors.password.message}</p>}
                </div>
                <button>Continue</button>
            </form>

            <p className="text-end">Forget Password?</p>
            <p>Don't have an account? Please Register</p>
            
            <p className='text-center'>or Connect with Social Media</p>
            <button className="w-100 mb-2">Sign in with Google</button>
            <button className="w-100">Sign in with Twitter</button>
        </div>
        
    </div>
    );
};

export default Login;