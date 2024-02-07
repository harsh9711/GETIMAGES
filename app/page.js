"use client"
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const page = () => {
  const[Images,setImages]=useState([]);
  const getImages= async () =>{
    try{
    console.log("image lelo");
    const response=await axios.get("https://picsum.photos/v2/list");
     const data=response.data;
     setImages(data);
    }
    catch(error){
      console.log("Error coming");
    }
  };
  return (
    <div>
   <button onClick={getImages} className='bg bg-green-400 text-white font-bold px-5 py-3'>
    GET IMAGES
   </button>
   <div className="p-20">
    {Images.map((elem,i)=>{
return <img
key={i}
src={elem.download_url}
width={300}
height={300}
className="m-10"
/>
    })}
   </div>
    </div>
  );
};
export default page;
