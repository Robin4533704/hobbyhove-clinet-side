import React from 'react';

const UppdateCar = () => {
    return (
         <div className=' bg-pink-50'>
       
         <div className='p-12 text-center space-x-4'>
                <h1 className='text-4xl text-blue-400 font-bold'>Update New Cars</h1>
            <p className='text-gray-400'>Mother happily drives her young son to school, symbolizing back to school preparations and family life. A nurturing moment captured during a typical morning routine.</p>
            </div>
             <form  className='   rounded'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                  <fieldset className="fieldset bg-blue-200  border-blue-300 rounded-box  border p-2">
  <label className="label">Name</label>
  <input type="text" name='name' className="input w-full" placeholder="My cooffee name" />
  </fieldset>
                  <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Quantity</label>
  <input type="text" name='quantity' className="input w-full" placeholder="My chef name" />
  </fieldset>
                  <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Supplier</label>
  <input type="text" name='supplier' className="input w-full" placeholder="enter foffee supplier" />
  </fieldset>
                 

  <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Price</label>
  <input type="text" name="price" defaultValue="120" className="input w-full" placeholder="Enter coffess price" />
</fieldset>

<fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box border p-2">
  <label className="label">Date</label>
  <input type="date" name="date" className="input w-full" />
</fieldset>

 <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Details</label>
  <input type="text" name='details' className="input w-full" placeholder="enter coffee details" />
  </fieldset>
                 
            </div>
              <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box my-6   border p-2">
  <label className="label">Photo</label>
  <input type="text" name='photo' className="input w-full" placeholder="photo URL" />
  </fieldset>
  <button type="submit" className="btn btn-block bg-amber-300">
  Add Coffee
</button>


            </form>
      </div>
    );
};

export default UppdateCar;