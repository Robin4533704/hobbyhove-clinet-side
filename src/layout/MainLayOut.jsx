import React from 'react';
import { Outlet } from 'react-router';

import Footer from '../Components/Footer';
import AllCar from '../Components/banner/AllCar';
import Navber from '../Components/Navber.jsx/Navber';

const MainLayOut = () => {
    return (
        <div className='md:max-w-7xl mx-auto'>
            <Navber></Navber>
        <Outlet></Outlet> 
         <AllCar></AllCar>
        <Footer></Footer>
         </div>
    );
};

export default MainLayOut;