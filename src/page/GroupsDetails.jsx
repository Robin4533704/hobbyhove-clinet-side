import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../AuthLayout/auth/useAxios";
import { toast } from "react-toastify";
import Loading from "../Components/banner/Loading";

const GroupDetails = () => {
  const { id } = useParams(); // URL থেকে group id
  const { api } = useAxios();
  const [group, setGroup] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const res = await api.get(`/groups`);
        const foundGroup = res.data.find((g) => g._id === id);
        if (foundGroup) setGroup(foundGroup);
      } catch (err) {
        console.error("Failed to fetch group:", err);
      }
    };
    fetchGroup();
  }, [id, api]);

  const handleJoin = () => {
    navigate("/creategrupe")
    toast.success(`You joined "${group.groupName}" successfully!`);
  };

  if (!group) return <p> <Loading/></p>;

  return (

 <div>
     <div className="pt-24 pl-6 lg:pl-8">
        <button
          onClick={() => navigate(-1)} // আগের পেজে যাবে
          className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600"
        >
          Back
        </button>
      </div>
    <div className="max-w-3xl mx-auto  shadow-md rounded p-6">
      
        <h2 className="text-2xl text-center font-bold mb-4  text-lime-400">
          {group.groupName}
        </h2>
        <img
          src={group.imageUrl || "https://via.placeholder.com/600x300"}
          alt={group.groupName}
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <p className="text-gray-700 mb-2">
          <strong>Category:</strong> {group.hobbyCategory}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Description:</strong> {group.description}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Location:</strong> {group.location}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Max Members:</strong> {group.maxMembers}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Start Date:</strong> {group.startDate}
        </p>

        <button
          onClick={handleJoin}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Join Group
        </button>
      </div>
 </div>
 
  );
};

export default GroupDetails;
