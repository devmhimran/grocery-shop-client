import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../firebase.init';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import axios from 'axios';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [user1] = useAuthState(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    let loginError;
    if (error) {
        loginError = error.message;
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        // navigate(from, { replace: true });
    }
    
    const handleLogin = async (e) => {
        e.preventDefault();
        // const userId = user1.uid;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        await signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('http://localhost:5000/login', {email});
        localStorage.setItem('access-token', data.accessToken);
        navigate(from, { replace: true });
        // console.log(data)
        console.log(user1)
    }
    return (
        <div className='login__main'>
            <div className="container">
                <div className="card login__form__card">
                    <div className="card-body">
                        <h2>Sign in</h2>
                        <form onSubmit={handleLogin}>
                            <div className="input__form">
                                <p className='py-2'>Enter Email</p>
                                <input type="email" name="email" placeholder='Enter Your Email' required/>
                            </div>
                            <div className="input__form">
                                <p className='py-2'>Enter Password</p>
                                <input type="password" name="password" placeholder='Enter Your Password' required/>
                                <small className='text-danger'>{loginError}</small>
                            </div>
                            <button className='login__btn mt-3'>Sign in</button>
                        </form>
                        <div className="register__link mt-4">
                            <span>New on Grocery?</span> <Link to='/registration'>Please Register</Link>
                        </div>
                        <div className="forget__password__link mt-2">
                            <span>Forget Password?</span> <Link to='/forgetpassword'>New one</Link>
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

export default Login;