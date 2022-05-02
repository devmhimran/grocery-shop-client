import React from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
    return (
        <div className='forgetPass__main'>
            <div className="container">
                <div className="card forgetPass__form__card">
                    <div className="card-body">
                        <h2>Reset Your Password?</h2>
                        <form>
                            <div className="input__form">
                                <p className='py-2'>Enter Email</p>
                                <input type="email" name="email" placeholder='Enter Your Email' />
                            </div>
                            <button className='login__btn mt-3'>Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;