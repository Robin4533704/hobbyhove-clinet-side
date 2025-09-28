import React, { useState } from "react";
import { axiosInstance } from "../../AuthLayout/auth/useAxiosSecour"; // শুধু axios import করো

const UpdateProfile = () => {
  const [profilePic, setProfilePic] = useState("");
  const [loading, setLoading] = useState(false);

  // Image upload handler
  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`;

    try {
      setLoading(true);
      const res = await axiosInstance.post(url, formData); // ✅ এখন কাজ করবে
      if (res.data.success) setProfilePic(res.data.data.display_url);
    } catch (err) {
      console.error("Image upload error:", err);
      alert("Image upload failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!profilePic) return;

    try {
      setLoading(true);
      console.log("Profile saved with image:", profilePic);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to save profile!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto pt-10 p-4 md:pt-20 md:p-6 shadow-lg rounded-md bg-lime-400">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Update Profile</h1>

      <input
        type="file"
        onChange={handleImageUpload}
        accept="image/*"
        className="file-input file-input-bordered w-full mb-4"
      />

      {profilePic && (
        <div className="mb-4 flex justify-center">
          <img
            src={profilePic}
            alt="Profile Preview"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border"
          />
        </div>
      )}

      <button
        onClick={handleSave}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        disabled={loading || !profilePic}
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
};

export default UpdateProfile;
