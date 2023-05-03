/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSide = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res =>res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error.message))
    },[])
    return (
        <div className='border text-center mt-5'>
            <h2>Master Chefs of:</h2>
            {
                categories.map(category => <h3 key={category.id}><Link to={`/category/${category.id}`} className='text-decoration-none text-dark'>{category.chef_country}</Link></h3>)
            }

        </div>
    );
};

export default RightSide;