/* eslint-disable no-unused-vars */
import React from 'react';
import { useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import errorImg from '../../../public/error.json'

const ErrorPage = () => {
    const { error, statusText, data } = useRouteError();
    console.log(error.message, statusText , data)
    
    console.log(useRouteError())
    return (
        <section className='w-25 mx-auto  text-center mt-5'>
           <div>
           <Lottie animationData={errorImg} loop={true} />
           </div>
            
            <h3 >{statusText}</h3>
            <p className='my-3'>{error.message}</p>
            <p >{data}</p>
      </section>
    );
};

export default ErrorPage;