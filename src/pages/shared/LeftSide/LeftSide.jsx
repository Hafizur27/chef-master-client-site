/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';

const LeftSide = () => {
    return (
        <div className='mt-5'>
            <p><Outlet></Outlet></p>
        </div>
    );
};

export default LeftSide;