import React from 'react';
import { Link } from 'react-router';
import image1 from '../../assets/Screenshot 2025-05-23 232159.png'
const Navber = () => {
    const links = <>
    <Link className='ml-2  px-2  hover:bg-blue-300 hover:text-white rounded hover:rounded text-green-700'>Home</Link>
    <Link className='ml-2  px-2  hover:bg-amber-300 hover:text-white rounded hover:rounded text-blue-700'>My Groups</Link>
    <Link className='ml-2  px-2  hover:bg-amber-300 hover:text-white rounded hover:rounded text-blue-700'>Create Group</Link>
    <Link className='ml-2  px-2  hover:bg-amber-300 hover:text-white rounded hover:rounded text-blue-700'>My Profiles</Link>
    </>
    return (
        <div className="navbar bg-base-300 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className=" flex items-center"><img className='rounded-full w-10 h-10' src={image1} alt="" /><span className='text-green-500 font-bold text-xl'>Hobby</span><span className='text-blue-300 font-bold text-xl'>Nest</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
    );
};

export default Navber;