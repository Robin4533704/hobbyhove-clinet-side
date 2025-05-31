import React from 'react';

const CarCart = ({car}) => {
 const {photo,name,date,price} = car;

    return (
        <div>
            
          <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={photo}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-xl ">name: {name}</h1>
      <p className="">Price: {price} </p>
      <h2 className="">Date: {date}</h2>
    </div>
  </div>
</div>
        </div>
    );
};

export default CarCart;