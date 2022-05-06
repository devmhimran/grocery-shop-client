import React from 'react';
import { Link } from 'react-router-dom';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import './ForgotPassword.css';
import auth from '../firebase.init';
import toast, { Toaster } from 'react-hot-toast';

const ForgotPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const handleReset = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        await sendPasswordResetEmail(email);
        toast('Please Check Your Email', {
            icon: '📧',
          });
          e.target.reset();
    }
    return (
        <div className='forgetPass__main'>
            <div className="container">
                <div className="card forgetPass__form__card">
                    <div className="card-body">
                        <h2>Reset Your Password?</h2>
                        <form onSubmit={handleReset}>
                            <div className="input__form">
                                <p className='py-2'>Enter Email</p>
                                <input type="email" name="email" placeholder='Enter Your Email' />
                            </div>
                            <button className='login__btn mt-3'>Reset</button>
                        </form>
                    </div>
                </div>
                <Toaster position="top-center"
                    reverseOrder={false} />
            </div>
        </div>
    );
};

export default ForgotPassword;