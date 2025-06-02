import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import CarGroup from './CarGroup';
import AllCar from '../Components/banner/AllCar';
import Loading from '../Components/banner/Loading';

const MyGroup = () => {
  const carData = useLoaderData(); // ডেটা আসার জন্য
  
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (carData && Array.isArray(carData)) {
      setCars(carData);
      setLoading(false);
    }
  }, [carData]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <h1 className='text-center text-3xl text-pink-500 font-black p-8'>Our Propuler Products</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {cars.length === 0 ? (
           <Loading/>
          ) : (
        
            carData.map((group) => (
              <CarGroup
                key={group._id}
                cars={cars}
                setCars={setCars}
                group={group}
              />
            ))
          )}
        </div>
      </div>
      <AllCar />
    </div>
  );
};

export default MyGroup;