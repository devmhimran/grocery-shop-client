import React from 'react';
import errorImg from '../../assets/img/404-not-found.gif'

const ErrorPage = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <img className='w-100' src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;