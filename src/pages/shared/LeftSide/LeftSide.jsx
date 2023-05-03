/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';

const LeftSide = () => {
    return (
        <div className='mt-5'>
            <Outlet></Outlet>
        </div>
    );
};

export default LeftSide;