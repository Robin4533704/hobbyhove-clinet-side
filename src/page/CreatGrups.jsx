import React, { useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../AuthLayout/auth/AuthProvider";
import useAxios from "../AuthLayout/auth/useAxios";
import Loading from "../Components/banner/Loading";

const CreateGroup = () => {
  const { user } = useAuth(); 
  const { api } = useAxios(); 
  const [loading, setLoading] = React.useState(true);
  const [formData, setFormData] = useState({
    groupName: "",
    hobbyCategory: "",
    description: "",
    location: "",
    maxMembers: "",
    startDate: "",
    imageUrl: "",
    userName: user?.displayName || "",
    userEmail: user?.email || "",
    status: "ongoing",
  });

  const hobbyCategories = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/groups", formData);
      if (res.data.insertedId) {
        Swal.fire({
          title: "✅ Success!",
          text: "Group created successfully!",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
        setFormData({
          groupName: "",
          hobbyCategory: "",
          description: "",
          location: "",
          maxMembers: "",
          startDate: "",
          imageUrl: "",
          userName: user?.displayName || "",
          userEmail: user?.email || "",
          status: "ongoing",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "❌ Error!",
        text: "Failed to create group. Try again.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
      console.error(err);
    }
  };

  React.useEffect(() => {
      setTimeout(() => setLoading(false), 2000);
    }, []);
    if(loading) return <p> <Loading/> </p>

  return (
    <div className="max-w-3xl mx-auto pt-18  shadow-md rounded">
      <h2 className="text-2xl font-bold mb-2 mt-8 text-lime-400">Create a New Hobby Group</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Group Name */}
        <div>
          <label className="block mb-1 font-medium">Group Name</label>
          <input
            type="text"
            name="groupName"
            value={formData.groupName}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Hobby Category */}
        <div>
          <label className="block mb-1 font-medium">Hobby Category</label>
          <select
            name="hobbyCategory"
            value={formData.hobbyCategory}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select a category</option>
            {hobbyCategories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          ></textarea>
        </div>

        {/* Meeting Location */}
        <div>
          <label className="block mb-1 font-medium">Meeting Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Max Members */}
        <div>
          <label className="block mb-1 font-medium">Max Members</label>
          <input
            type="number"
            name="maxMembers"
            value={formData.maxMembers}
            onChange={handleChange}
            required
            min="1"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="block mb-1 font-medium">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full border  px-3 py-2 rounded"
          />
        </div>

        {/* User Name & Email */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">User Name</label>
            <input
              type="text"
              value={formData.userName}
              readOnly
              className="w-full border px-3 py-2 rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">User Email</label>
            <input
              type="email"
              value={formData.userEmail}
              readOnly
              className="w-full border px-3 py-2 rounded bg-gray-100"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
