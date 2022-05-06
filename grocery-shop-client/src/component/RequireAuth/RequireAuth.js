import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>;
    }
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    if(user.emailVerfied){
        return <div className='container'>
            <h3 className='text-danger'>Your email is not verified</h3>
            <h2>Please verify your email</h2>
            <button className='btn btn-outline-danger'>Send email again</button>
        </div>;
    }
    return children;
};

export default RequireAuth;