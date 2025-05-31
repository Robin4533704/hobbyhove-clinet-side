import React from 'react';
import Header from "../Components/Header"
import { useLoaderData } from 'react-router';
import CarCart from '../Components/banner/CarCart';

const Home = () => {
    const addcars = useLoaderData();
    console.log(addcars);
    return (
        <div>
             <Header></Header>
              <h1 className='text-center p-8'>Our Propuler Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
               
                 {
                addcars.map(car => <CarCart car={car} key={car._id}></CarCart>)
             }
            </div>
        </div>
    );
};

export default Home;