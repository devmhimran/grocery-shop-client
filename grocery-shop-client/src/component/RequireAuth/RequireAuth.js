import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';
import './RequireAuth.css';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>;
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    if (!user.emailVerified) {
        return <div className='container text-center emailVerifySection'>
            <div className="card w-50 mx-auto">
                <div className="card-body py-5">
                    <p>Your email is not verified</p>
                    <p>Please verify your email</p>
                    <button className='resendBtn' onClick={async () => {
                        await sendEmailVerification();
                        alert('Sent email');
                    }}>Resend</button>
                </div>
            </div>
        </div>;
    }
    return children;
    
};

export default RequireAuth;