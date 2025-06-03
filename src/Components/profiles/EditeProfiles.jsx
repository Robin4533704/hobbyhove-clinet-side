import React, { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../firebase/AuthContext';
import icons from '../../assets/download.png'
import Google from '../login/Google';


const EditProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const [username, setUsername] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUserProfile({ displayName: username, photoURL: icons })
      .then(() => {
        console.log("✅ Profile update success");
        setUser({ ...user, displayName: username, photoURL });
        navigate('/myprifile');
      })
      .catch((error) => {
        console.error('Profile update failed:', error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>

        <div className="flex justify-center mb-4">
          <img
            src={photoURL || "https://via.placeholder.com/100"}
            alt="profiles"
            className="w-24 h-24 rounded-full border border-gray-300 object-cover"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="New username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input input-bordered w-full mb-3"
            required
          />
          <input
            type="text"
            placeholder="New photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered w-full mb-4"
            required
          />

          <div className="flex justify-center gap-4">
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => navigate('/profiles')}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
           
          </div>
          <div className='mt-2'>
             <Google></Google>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;