import React from 'react';
import Navber from '../Components/Navber.jsx/Navber';
import Login from '../Components/login/Login';
import Sigin from '../Components/login/Sigin';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const AuthLayout = () => {
    return (
        <div>
          <div className='max-w-7xl mx-auto'>
             <Navber></Navber>
          </div>
          <main className='w-11/12 mx-auto py-5'>
           
            <Outlet></Outlet>
            <Footer></Footer>
            </main> 
           
        </div>
    );
};

export default AuthLayout;