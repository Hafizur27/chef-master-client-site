/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Chef from '../Chef/Chef';

const Category = () => {
    const {id} = useParams()
    const [chefs, setChefs] = useState([])

    useEffect(()=>{
        fetch('https://chef-master-server-site-hafizur27.vercel.app/chefs')
        .then(res =>res.json())
        .then(data => setChefs(data))
        .catch(error => console.log(error.message))
    },[])
    return (
        <div className='row row-cols-1 row-cols-md-3 g-4 mb-3'>
            {
                chefs.map(chef => <Chef key={chef.id} chef={chef}>{chef.chef.name}</Chef>)
            }
        </div>
    );
};

export default Category;