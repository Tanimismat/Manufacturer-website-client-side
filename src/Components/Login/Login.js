import React from 'react';
import Header from '../Shared/Header';

const Login = () => {
return (
    <div>
        <Header></Header>
        <div className="w-25 mx-auto">
            <div className="text-center">
                <h3>Sign in</h3>
                <p>to continue access</p>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <p className="text-end">Forget Password?</p>
            <p>Don't have an account? Please Register</p>
            <button className="w-100">Continue</button>
            <p className='text-center'>or Connect with Social Media</p>
            <button className="w-100 mb-2">Sign in with Google</button>
            <button className="w-100">Sign in with Twitter</button>
        </div>
        
    </div>
    );
};

export default Login;