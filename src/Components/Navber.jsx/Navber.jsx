import React, { useContext } from 'react';
import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FcBusinessman } from "react-icons/fc";
import image1 from '../../assets/lambergini.jpg';
import Dackmode from '../Dackmode';
import { AuthContext } from '../../firebase/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import icons from '../../assets/download.png' 
const Navber = () => {
  const { user, logOut } = useContext(AuthContext); // ✅ useContext শুদ্ধভাবে

  const handlelogout = () => {
    logOut()
      .then(() => {
       
        toast.success("You logged out successfully!");
      })
      .catch((error) => {
        toast.error("Something went wrong: ", error.message);
      });
  };

  const links = <>
    <Link to="/" className='px-4 py-2 text-green-600 rounded-2xl bg-white'>Home</Link>
    <Link to="/mygroup" className='px-4 py-2 text-green-600 rounded-2xl bg-white'>My Groups</Link>
    <Link to="/addnewcar" className='px-4 py-2 text-green-600 rounded-2xl bg-white'>Create Group</Link>
    <Link to="/myprifile" className='px-4 py-2 text-green-600 rounded-2xl bg-white'>My Profiles</Link>
  </>;

  return (
    <div className="navbar bg-green-700 text-white rounded shadow-sm">
      <ToastContainer />
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="flex items-center justify-center gap-2">
          <img className='rounded-full w-10 h-10' src={image1} alt="" />
          <span className='font-bold text-3xl text-blue-500 hidden lg:block'>Lambor</span>
          <span className='font-bold text-3xl text-yellow-400 hidden lg:block'>Gihini</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">{links}</ul>
      </div>
      <div className="navbar-end gap-2 pr-2">
        <div className='text-green-500 font-bold hidden lg:block'>{user && user.email}</div>
        
        <img className='w-12 h-12 rounded-full ' src={`${user ? user.photoURL : icons}`} alt="" />
        {
          user ? (
            <button onClick={handlelogout} className='font-bold px-4 py-2 bg-green-400 rounded text-white'>LogOut</button>
          ) : <>
           <Link to="/auth/login" className="font-bold px-4 py-2 bg-green-400 rounded text-white">Login</Link>
             <Link to='/auth/sigin' className="btn btn-outline btn-success">Sign Up</Link>
          </>
        }
        
        <Dackmode />
      </div>
    </div>
  );
};

export default Navber;
