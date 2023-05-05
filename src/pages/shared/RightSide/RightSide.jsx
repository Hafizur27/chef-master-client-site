/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSide = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://chef-master-server-site-hafizur27.vercel.app/categories')
        .then(res =>res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error.message))
    },[])
    return (
        <div className='text-center mt-5 shadow p-3'>
            <h2 className='text-warning'>Master Chefs Available:</h2>
            {
                categories.map(category => <h3 key={category.id}>{category.chef_country}</h3>)
            }

        </div>
    );
};

export default RightSide;