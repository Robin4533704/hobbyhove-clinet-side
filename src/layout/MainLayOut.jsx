import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Navber from '../Components/Navber.jsx/Navber'
import LottieDemo from '../page/LottieDemo';
import Loading from '../Components/banner/Loading';
const MainLayOut = () => {
     const [loading, setLoading] = React.useState(true);

       React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if(loading) return <div> <Loading/> </div>
    return (
       <div className='max-w-7xl mx-auto'>
          <Navber/>
      <Outlet />
      <LottieDemo />
      <Footer />
       </div>
    );
};

export default MainLayOut;