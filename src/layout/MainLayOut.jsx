import React from 'react';
import { Outlet } from 'react-router';

import Footer from '../Components/Footer';

import Navber from '../Components/Navber.jsx/Navber';

const MainLayOut = () => {
    return (
        <div className='md:max-w-7xl mx-auto'>
            <Navber></Navber>
        <Outlet></Outlet> 
        <Footer></Footer>
         </div>
    );
};

export default MainLayOut;