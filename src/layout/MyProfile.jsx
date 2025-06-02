import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../firebase/AuthContext';
import icons from '../assets/download.png'


const Profiles = () => {
  const { user, logOut } = useContext( AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logged out");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className=" max-w-md md:mt-16 md:mb-16 lg:mt-16 mx-auto bg-blue-100 shadow rounded-lg p-6 text-center">
      <h2 className="text-2xl font-bold p-6">My Profile</h2>

      <div className="pl-6 md:pl-10">
        <div className=" w-[320px] h-[220px] rounded-xl overflow-hidden border-2 border-gray-300">
        <img
  src={`${user ? user.photoURL : icons}`} 
  alt="Profile"
  className="w-full h-full object-cover"
/>
        </div>

        
      </div>

      <p className="font-semibold text-lg">Username:</p>
      <p className="mb-2">{user?.displayName || "Not set"}</p>

      <p className="font-semibold text-lg">Email:</p>
      <p className="mb-4">{user?.email}</p>

      <div className="flex justify-center gap-4">
        <Link to="/editprofile" className="btn bg-blue-600 text-white hover:bg-blue-700">Edit Profile</Link>
        <Link to="/auth/login"
          className="btn bg-red-500 text-white hover:bg-red-600"
          onClick={handleLogout}
        >
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default Profiles;