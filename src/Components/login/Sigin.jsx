import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { AuthContext } from '../../firebase/AuthContext';
import Google from './Google';

const Sigin = () => {
  const {  createUser, setUser,  updateUserProfile } = useContext(AuthContext);
 const location = useLocation();
  const navigate = useNavigate();
 const [nameError, setNameError] = useState()
const [photoError, setPhotoError] = useState('');
  const handlesigin = (e) => {
   
    e.preventDefault()
    const form = e.target;
    console.log(e.target)
    const name = form.name.value;
    // name justify
    if(name.length < 5){
      setNameError("Name should be more then 5 character")
      return;
    }
    else(
      setNameError(``)
    )
    const photo= form.photo.value;
    const email = form.email.value;
    const password= form.password.value;
    console.log({name, photo, email, password}); 
    
  // ছবি URL যাচাই
  if (!photo || photo.length === 0) {
    setPhotoError("Photo URL is required");
    return;
  } else if (photo.length > 5000) {
    toast.error("Photo URL too long. Use a smaller image URL.");
    return;
  } else {
    setPhotoError('');
  }

   createUser(email, password)
   .then((result) => {
    const user =result.user;
   
     updateUserProfile({display: name, photoURL: photo})
     .then(()=>{
 setUser({...user, display: name, photoURL: photo});
     }).catch((error) => {
  console.log(error)
  setUser(user)
});
     Swal.fire({
  title: "Your sigin succecfull!",
  icon: "success",
  draggable: true
});
      navigate(location.state?.from?.pathname || "/");
  
   })
    .catch((error) => {
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
   console.log(error); 
  });

  };

  return (
    <div className="card bg-base-100 m-18 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl text-center font-bold">Register your Account!</h1>
        <form onSubmit={handlesigin}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" name="name" required className="input" placeholder="Your name" />

            {nameError && <p className='text-xs text-error'>{nameError}</p>}
            <label className="label">Photo URL</label>
            <input type="text" name="photo" required className="input" placeholder="Photo URL" />
             {photoError && <P className='text-red-500'>{photoError}</P>}
            <label className="label">Email</label>
            <input type="email" name="email" required className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name="password" required className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
           <button type="submit" className="btn w-full btn-neutral mt-4">Sign Up</button>
          </fieldset>
        </form>
      <Google></Google>
        <p className='text-center'>
          Already have an account? <Link to="/auth/login" className="text-blue-500 font-bold underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Sigin;
