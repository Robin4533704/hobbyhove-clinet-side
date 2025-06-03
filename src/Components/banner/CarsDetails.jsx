import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const CarDetails = () => {
  const { id } = useParams(); // route parameter
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`https://hobby-lamberghini-car-server.vercel.app/cars/${id}`)
      .then(res => res.json())
      .then(data => {
        setCar(data);
      });
  }, [id]);

  if (!car) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <span className="loading loading-spinner text-error w-12"></span>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 rounded-xl m-2 p-2 md:m-6 md:p-6">
      <h1 className="text-center text-2xl md:text-3xl text-blue-500 font-bold mb-6">
        Lamborghini Details
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-12">
        {/* Image container */}
        <div className="flex-shrink-0">
          <img
            src={car.photo}
            alt={car.name}
            className="w-full h-80 md:h-70 rounded object-cover"
          />
        </div>
        {/* Details container */}
        <div className="bg-blue-100 p-4 md:p-6 rounded-xl w-full max-w-md md:max-w-xl">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">{car.name}</h2>
          <p className="mb-2"><strong>Price:</strong> {car.price}</p>
          <p className="mb-2"><strong>Quantity:</strong> {car.quantity}</p>
          <p className="mb-2"><strong>Date:</strong> {car.date}</p>
          <p className="mb-4"><strong>Details:</strong> {car.details}</p>
          <Link to="/mygroup">
            <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded shadow transition duration-300">
              <MdOutlineKeyboardBackspace className="mr-2" /> Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;