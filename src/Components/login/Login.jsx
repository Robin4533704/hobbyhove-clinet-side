import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../firebase/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import Google from './Google';

const Login = () => { 
   const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
const { signin } = useContext(AuthContext);
// console.log(location);

  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
     console.log({email,password});

    signin(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Logged in user:", user);
        toast.success("Login successful!");
        
        navigate(location.state?.from?.pathname || "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        toast.error("Login failed: " + errorCode);
      });
  };

  return (
        <div className="m-18 card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-3xl font-bold text-center">Login now!</h1>
         {/* email */}
        <form onSubmit={handlelogin}>
           <fieldset className="fieldset">
           <label className="label">Email</label>
           <input type="email" required 
           name='email' className="input" placeholder="Email" />
           {/* password */}
           <label className="label">Password</label>
           <input type="password" required name='password' className="input" placeholder="Password" />
           <div><a className="link link-hover">Forgot password?</a></div>
            {error && <p className="text-red-500">{error}</p>}
           <button type='submit' className="btn btn-neutral mt-4">Login</button>
         </fieldset>
        </form>
        <ToastContainer></ToastContainer>
        <Google></Google>
         <p className='text-center'>Don't have an account? <Link to="/auth/sigin" className='text-blue-500 underline font-bold'>Register</Link> </p>
       </div>
     </div>
  );
};

export default Login;













