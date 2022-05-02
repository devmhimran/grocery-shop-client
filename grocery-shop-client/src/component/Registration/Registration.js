import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';
import './Registration.css';

const Registration = () => {
    return (
        <div className='registration__main'>
            <div className="container">
                <div className="card registration__form__card">
                    <div className="card-body">
                        <h2>Sign up</h2>
                        <form>
                            <div className="input__form">
                                <p className='py-2'>Enter Name</p>
                                <input type="text" name="email" placeholder='Enter Your Name' />
                            </div>
                            <div className="input__form">
                                <p className='py-2'>Enter Number</p>
                                <input type="text" name="email" placeholder='Enter Your Number' />
                            </div>
                            <div className="input__form">
                                <p className='py-2'>Enter Email</p>
                                <input type="email" name="email" placeholder='Enter Your Email' />
                            </div>
                            <div className="input__form">
                                <p className='py-2'>Enter Password</p>
                                <input type="password" name="password" placeholder='Enter Your Password' />
                            </div>
                            <button className='login__btn mt-3'>Sign up</button>
                        </form>
                        <div className="login__link mt-4">
                            <span>Already Sign in?</span> <Link to='/login'>Please Login</Link>
                        </div>
                        <div className="divider d-flex align-items-center justify-content-center mt-3">
                            <span></span>
                            <p className='mx-3'>or</p>
                            <span></span>
                        </div>
                        <div className="social__login d-flex justify-content-between">
                            <button className='google__signin'><span><FcGoogle></FcGoogle></span> Google</button>
                            <button className='facebook__signin'><span><ImFacebook2></ImFacebook2></span> Facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;