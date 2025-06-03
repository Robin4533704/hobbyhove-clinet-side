import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../Components/banner/Loading';
import Footer from '../Components/Footer';

import Navber from '../Components/Navber.jsx/Navber';


const MainLayOut = () => {
    const {state} = useNavigation()
    return (
        <div className='max-w-xl md:max-w-7xl mx-auto'>
            <Navber></Navber>
            {import.meta.env.VITE_name}
      <section> {state == "loading"? <Loading/> : <Outlet></Outlet> } </section>
        <Footer></Footer>
         </div>
    );
};

export default MainLayOut;