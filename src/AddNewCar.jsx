import React, {   useContext,  useEffect,  useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Loading from './Components/banner/Loading';
import { AuthContext } from './firebase/AuthContext';

const AddNewCar = () => {
  const[loading, setLoading] = useState(false);
 const {user} = useContext(AuthContext)
 
useEffect(() => {
  if (user) {
    setLoading(false);
  }
}, [user]);
  const navigate = useNavigate(); // হোম পেজে রিডাইরেক্টের জন্য
  const handleAddCar = e => {
    e.preventDefault();
    const form = e.target;
    
    const formData = new FormData(form);
    const newCar = Object.fromEntries(formData.entries());
    // console.log(newCar);

    // ডাটাবেসে পাঠানো
    fetch('https://hobby-lamberghini-car-server.vercel.app/cars', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCar)
    })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        Swal.fire({
          title: "Car added successfully!",
          icon: "success",
          draggable: true
        });
         
        navigate('/');
      }
    });
  }

if (loading) {
  return <Loading />;
}

  return (
    <div className='p-8 bg-pink-50'>
      <div className='p-12 text-center space-x-4'>
        <h1 className='text-4xl text-blue-400 font-bold'>Add New Cars</h1>
        <p className='text-gray-400 p-6'>
          Mother happily drives her young son to school, symbolizing back to <br /> school preparations and family life. A nurturing moment captured during a typical morning routine.
        </p>
      </div>
      <form onSubmit={handleAddCar} className='rounded'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box border p-2">
            <label className="label">Car Name</label>
            <input type="text" name='name' className="input w-full" placeholder="My Cars name" />
          </fieldset>
          <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box border p-2">
            <label className="label">Quantity</label>
            <input type="text" name='quantity' className="input w-full" placeholder="My Cars Quantity" />
          </fieldset>
          <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box border p-2">
            <label className="label">Supplier</label>
            <input type="text" name='supplier' className="input w-full" placeholder="enter Cars supplier" />
          </fieldset>
          <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box border p-2">
            <label className="label">Price</label>
            <input type="text" name="price" defaultValue="$" className="input w-full" placeholder="$ Enter Cars price" />
          </fieldset>
          <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box border p-2">
            <label className="label">Date</label>
            <input type="date" name="date" className="input w-full" />
          </fieldset>
          <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box border p-2">
            <label className="label">Details</label>
            <input type="text" name='details' className="input w-full" placeholder="enter cars details" />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box my-6 border p-2">
          <label className="label">Photo</label>
          <input type="text" name='photo' className="input w-full" placeholder="photo URL" />
        </fieldset>
        <button type="submit" className="btn btn-block bg-amber-300">
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddNewCar;