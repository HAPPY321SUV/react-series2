import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data=useLoaderData()
    // const[data,setData]=useState([])
    // useEffect(()=>{
    //     fetch="http://api.github.com/users/HAPPY321SUV"
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     },[])
    // })
    return(
    
        <div className='text-center m-4 bg-gray-600 p-4 text-3xl text-white'>
            Github :{data.followers}
            <img src={data.avtar_url}alt='git photo' width={300} />
        </div>
    );
}

export default Github;

export const githubinfoLoader=async()=>{
    const response=await fetch('http://api.github.com/users/HAPPY321SUV')
    return response.json()
}