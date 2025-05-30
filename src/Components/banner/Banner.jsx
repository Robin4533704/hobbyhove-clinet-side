import React from 'react';
import AllCar from './AllCar';

const Banner = () => {
  const bannerStyle = {
    minHeight: '100vh',
    backgroundImage:
      "url('https://images.unsplash.com/photo-1684329601543-6a3cceb509a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '600px',
  };

  return (
   <div>
     <div style={bannerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h3 className='text-2xl'>DEALER LOCATOR</h3>
        <h2 className='text-5xl font-bold text-yellow-300 p-4'> YOUR
TEMERARIO</h2>
        <p style={{ marginBottom: '1.25rem' }}>
         The vehicle is not yet offered for sale and is therefore not subject to Directive 1999/94/EC. The fuel consumption and emissions data is in the type approval stage
        </p>
        <button style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', cursor: 'pointer', background: 'blue'  }}>Get Started</button>
      </div>
    </div>
   
   </div>
  );
};

export default Banner;
