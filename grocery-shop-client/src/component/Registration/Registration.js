import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Registration.css';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Registration = () => {
    const [errorMsg, setError] = useState('');
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
    let loginError;

    if(error){
        loginError  = error.message;
    }
    console.log(user);  


    const handleRegistration = async(e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const phoneNumber = e.target.number.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        // console.log(number);
        if(password !== confirmPassword){
            const errorMsg = 'Password not matched';
            setError(errorMsg);
        }
        await createUserWithEmailAndPassword( email, password);
        await updateProfile({ displayName:name, phoneNumber});
        await sendEmailVerification();
        // console.log(name);
    }
    return (
        <div className='registration__main'>
            <div className="container">
                <div className="card registration__form__card">
                    <div className="card-body">
                        <h2>Sign up</h2>
                        <form onSubmit={handleRegistration}>
                            <div className="input__form">
                                <p className='py-2'>Enter Name</p>
                                <input type="text" name="name" placeholder='Enter Your Name' required/>
                            </div>
                            <div className="input__form">
                                <p className='py-2'>Enter Number</p>
                                <input type="text" name="number" placeholder='Enter Your Number' required/>
                            </div>
                            <div className="input__form">
                                <p className='py-2'>Enter Email</p>
                                <input type="email" name="email" placeholder='Enter Your Email' required/>
                            </div>
                            <div className="input__form">
                                <p className='py-2'>Enter Password</p>
                                <input type="password" name="password" placeholder='Enter Your Password' required/>
                            </div>
                            <div className="input__form">
                                <p className='py-2'>Confirm Password</p>
                                <input type="password" name="confirmPassword" placeholder='Enter Your Password' required/>
                                <small className='text-danger'>{errorMsg}</small>
                                <small className='text-danger'>{loginError}</small>
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
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;