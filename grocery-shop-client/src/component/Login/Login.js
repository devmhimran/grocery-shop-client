import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='login__main'>
            <div className="container">
                <div className="card login__form__card">
                    <div className="card-body">
                        <h2>Sign in</h2>
                        <form>
                            <div className="input__form">
                                <p className='py-2'>Enter Email</p>
                                <input type="email" name="email" placeholder='Enter Your Email' />
                            </div>
                            <div className="input__form">
                                <p className='py-2'>Enter Password</p>
                                <input type="password" name="password" placeholder='Enter Your Password' />
                            </div>
                            <button className='login__btn mt-3'>Sign in</button>
                        </form>
                        <div className="register__link mt-4">
                            <span>New on Grocery?</span> <Link to='/'>Please Register</Link>
                        </div>
                        <div className="forget__password__link mt-2">
                            <span>Forget Password?</span> <Link to='/'>New one</Link>
                        </div>
                        <div className="divider d-flex align-items-center justify-content-center mt-3">
                            <span></span>
                            <p className='mx-3'>or</p>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;