import React, { useState } from 'react';
import Header from "../Components/Header"
import { useLoaderData } from 'react-router';
import CarCart from '../Components/banner/CarCart';
import AllCar from '../Components/banner/AllCar';

const Home = () => {
    const initialCars = useLoaderData();
  const [cars, setCars] = useState(initialCars)
    return (
        <div>
             <Header></Header>
              <h1 className='text-center p-8'>Our Propuler Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
               
                 {
                cars.map(car => <CarCart car={car}
                    cars={cars}
                    setCars={setCars}
                    key={car._id}></CarCart>)
             }
            </div>
            <AllCar></AllCar>
        </div>
    );
};

export default Home;