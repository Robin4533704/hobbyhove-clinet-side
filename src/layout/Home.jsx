import React, { useEffect, useState } from 'react';
import Header from "../Components/Header"
import { useLoaderData } from 'react-router';
import CarCart from '../Components/banner/CarCart';
import AllCar from '../Components/banner/AllCar';

const Home = () => {
    const initialCars = useLoaderData();
  const [cars, setCars] = useState([])

   useEffect(() => {
    if (initialCars) {
      setCars(initialCars);
    }
  }, [initialCars]);

    return (
        <div>
             <Header></Header>
              <h1 className='text-center text-3xl text-pink-500 font-bold p-8'>Our Propuler Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
               
                  {cars.length === 0 ? (
        <p>Loading...</p>
      ) : (
        cars.map(car => (
          <CarCart key={car._id} car={car} cars={cars} setCars={setCars} />
        ))
      )}
            </div>
            <AllCar></AllCar>
        </div>
    );
};

export default Home;