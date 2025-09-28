import React from 'react';
import { Outlet } from 'react-router';
import Lottie from "lottie-react";
import animationData from "../assets/rglwYA0byY.json";
const AuthLayout = () => {
  return (
    <div className="p-12 bg-base-200 min-h-screen">
      
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className='flex-1'>
      <Lottie animationData={animationData} loop={true} />
   </div>
    <div className='flex-1'>
  <Outlet/>
    </div>
  </div>
</div>
  );
};

export default AuthLayout;