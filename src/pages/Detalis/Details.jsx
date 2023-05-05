/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Details = () => {
    const [data, setData] = useState([])
   
    useEffect(()=>{
        fetch('https://chef-master-server-site-hafizur27.vercel.app/chefs')
        .then(res =>res.json())
        .then(data => setData(data))
        .catch(error => console.log(error.message))
    },[])
   
  console.log(data)
  
    return (
        <div>
            
           <p>this</p>
            
        </div>
    );
};

export default Details;