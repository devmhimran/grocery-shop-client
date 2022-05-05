import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';

const SocialLogin = () => {
    return (
        <div className="social__login d-flex justify-content-between">
            <button className='google__signin'><span><FcGoogle></FcGoogle></span> Google</button>
            <button className='facebook__signin'><span><ImFacebook2></ImFacebook2></span> Facebook</button>
        </div>
    );
};

export default SocialLogin;