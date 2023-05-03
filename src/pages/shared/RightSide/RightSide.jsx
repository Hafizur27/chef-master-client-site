/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const RightSide = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res =>res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <p>Right side of my project</p>
        </div>
    );
};

export default RightSide;