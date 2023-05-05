/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from '../../Category/Category';

const LeftSide = () => {
    return (
        <div className='mt-5'>
            {/* <Outlet></Outlet> */}
            <Category></Category>
        </div>
    );
};

export default LeftSide;