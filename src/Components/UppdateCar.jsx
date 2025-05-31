import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';;

import Swal from 'sweetalert2';
const UppdateCar = () => {
  const navigate = useNavigate();
  const {_id,name,price, quantity,date,photo,supplier,details} = useLoaderData();

  const handleUpdateCar = e =>{
    e.preventDefault();
    const form = e.target
    const formData = new FormData(form);
    const updateNewCar = Object.fromEntries(formData.entries())
    console.log(updateNewCar)
      
    // send updated cars to the db
   fetch(`http://localhost:3000/cars/${_id}`,{
  method: 'PUT',
  headers:{
    'content-type': "application/json"
  },
  body: JSON.stringify(updateNewCar)
})
.then(res => res.json())
.then(data => {
  if(data.modifiedCount){
   Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
 navigate('/');
  }
  else {
    Swal.fire({
      position: "top-end",
      icon: "info",
      title: "No changes were made",
      showConfirmButton: false,
      timer: 1500
    });
    
  }
})
  }
    return (
         <div className='p-6 bg-pink-50'>
       <div className='p-12 text-center space-x-4'>
                <h1 className='text-4xl text-blue-400 font-bold'>Update New Cars</h1>
            <p className='text-gray-400'>Mother happily drives her young son to school, symbolizing back to school preparations and family life. A nurturing moment captured during a typical morning routine.</p>
            </div>
             <form onSubmit={handleUpdateCar}  className='   rounded'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                  <fieldset className="fieldset bg-blue-200  border-blue-300 rounded-box  border p-2">
  <label className="label">Name</label>
  <input type="text" defaultValue={name} name='name' className="input w-full" placeholder="My cooffee name" />
  </fieldset>
                  <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Quantity</label>
  <input type="text" defaultValue={quantity} name='quantity' className="input w-full" placeholder="My chef name" />
  </fieldset>
                  <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Supplier</label>
  <input type="text"  defaultValue={supplier} name='supplier' className="input w-full" placeholder="enter foffee supplier" />
  </fieldset>
                 

  <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Price</label>
  <input type="text" defaultValue={price}   name="price" className="input w-full" placeholder="Enter coffess price" />
</fieldset>

<fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box border p-2">
  <label className="label">Date</label>
  <input type="date" defaultValue={date}  name="date" className="input w-full" />
</fieldset>

 <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Details</label>
  <input type="text" defaultValue={details}  name='details' className="input w-full" placeholder="enter coffee details" />
  </fieldset>
                 
            </div>
              <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box my-6   border p-2">
  <label className="label">Photo</label>
  <input type="text"defaultValue={photo}  name='photo' className="input w-full" placeholder="photo URL" />
  </fieldset>
  <button type="submit" className="btn btn-block bg-amber-300">
  Add Coffee
</button>


            </form>
      </div>
    );
};

export default UppdateCar;