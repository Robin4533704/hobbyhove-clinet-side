import React from 'react';
import { FaStreetView } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { MdAutoDelete } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CarGroup = ({group, cars, setCars}) => {
   
    const {_id,photo,name,price,quantity,date} = group;
   const handelDelete = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://hobby-lamberghini-car-server.vercel.app/cars/${_id}`, {
        method: 'DELETE', // ✅ correct spelling
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount) { // ✅ correct field name
             
            Swal.fire({
              title: "Deleted!",
              text: "Your car has been deleted.",
              icon: "success"
            });
   const remainingCars = cars.filter(car => car._id !== _id)
   setCars(remainingCars);

          } else {
            Swal.fire({
              title: "Failed!",
              text: "No car was deleted. Maybe already removed?",
              icon: "error"
            });
          }
        })
        .catch(error => {
          console.error('Delete error:', error);
          Swal.fire({
            title: "Deleted!",
            text: "your cars has been deleted,",
            icon: "Success"
          });
        });
    }
  });
};

    return (
      <div className="bg-base-200 border rounded-xl p-4">
  <div className="flex flex-col lg:flex-row items-center justify-around gap-6">
    
    <img
      src={photo}
      className="lg:w-40 lg:h-40 w-full object-cover rounded-lg shadow-xl"
      alt={name}
    />

    <div className=" border-y-2 border-dotted p-2 border-indigo-500  flex flex-row lg:flex-row items-center justify-between gap-8 w-full">
      
      <div className="text-center lg:text-left">
        <h2 className="font-bold text-lg">{name}</h2>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <p>Date: {date}</p>
      </div>

      <div className="flex flex-col gap-2">
        <Link to={`/updatecare/${_id}`}><button className="btn join-item"><FiEdit className="text-yellow-400" /></button></Link>
        
        <Link to={`/carsdetails/${_id}`} className="btn join-item"><FaStreetView className="text-blue-400" /></Link>
        <button onClick={() => handelDelete(_id)} className="btn join-item">
          <MdAutoDelete className="text-red-500" />
        </button>
      </div>

    </div>
  </div>
</div>

       
    );
};

export default CarGroup;