import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let loginError;
    if (error) {
        loginError = error.message;
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSocial = () => {
        signInWithGoogle();
    }
    return (

        <div>
            <div className="social__login d-flex justify-content-between">
                <button className='google__signin' onClick={handleSocial}><span><FcGoogle></FcGoogle></span> Google</button>
                <button className='facebook__signin'><span><ImFacebook2></ImFacebook2></span> Facebook</button>
            </div>
            <small className='text-danger'>{loginError}</small>
        </div>
    );
};

export default SocialLogin;