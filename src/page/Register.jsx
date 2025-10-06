// Register.jsx (Updated)
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../AuthLayout/auth/AuthProvider";
import SocialLogin from "../AuthLayout/SocialLogin";
import axios from "axios";
import { axiosInstance } from "../AuthLayout/auth/useAxiosSecour";

const Register = () => {
  const { register: authRegister, handleSubmit, formState: { errors } } = useForm();
  const { createUser, updateUserProfiles, VerificationEmail } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

const imageKey = import.meta.env.VITE_IMAGE_UPLOAD_KEY;

const handleImageUpload = async (e) => {
  const image = e.target.files[0];
  if (!image) return;

  const formData = new FormData();
  formData.append("image", image); // File object directly

  try {
    setLoading(true);
    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${imageKey}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" } // Important
      }
    );
    setProfilePic(res.data.data.display_url);
  } catch (err) {
    console.error(err);
    Swal.fire("Error", "Image upload failed!", "error");
  } finally {
    setLoading(false);
  }
};

  const onSubmit = async (data) => {
    if (!profilePic) { Swal.fire({ icon: "warning", title: "Upload Profile Picture" }); return; }
    try {
      setLoading(true);
      const result = await createUser(data.email, data.password);
      await updateUserProfiles({ displayName: data.name, photoURL: profilePic });
      await VerificationEmail();

      await axiosInstance.post("/users", {
        email: data.email,
        displayName: data.name,
        photoURL: profilePic,
        role: "user",
        created_at: new Date().toISOString(),
        last_log_in: new Date().toISOString(),
      });

      Swal.fire({ icon: "info", title: "Verify Your Email", text: "Check your email for verification." });
      navigate(from);
    } catch (err) {
      Swal.fire({ icon: "error", title: "Registration Failed", text: err.message });
    } finally { setLoading(false); }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-md bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Create Account</h1>

     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

  {/* Name Input */}
  <input
    {...authRegister("name", { required: "Name required" })}
    placeholder="Full Name"
    className={`input input-bordered w-full rounded-lg transition-all duration-300 ${
      errors.name ? "border-red-500" : "border-gray-300 focus:border-lime-500 focus:ring focus:ring-lime-200"
    }`}
  />
  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}

  {/* Email Input */}
  <input
    {...authRegister("email", { required: "Email required" })}
    type="email"
    placeholder="Email Address"
    className={`input input-bordered w-full rounded-lg transition-all duration-300 ${
      errors.email ? "border-red-500" : "border-gray-300 focus:border-lime-500 focus:ring focus:ring-lime-200"
    }`}
  />
  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

  {/* Password Input */}
  <div className="relative">
    <input
      {...authRegister("password", { required: "Password required", minLength: 6 })}
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      className={`input input-bordered w-full pr-10 rounded-lg transition-all duration-300 ${
        errors.password ? "border-red-500" : "border-gray-300 focus:border-lime-500 focus:ring focus:ring-lime-200"
      }`}
    />
    <button
      type="button"
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>
  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

  {/* Profile Picture Upload */}
  <input
    type="file"
    onChange={handleImageUpload}
    accept="image/*"
    className="file-input file-input-bordered w-full rounded-lg"
  />

  {profilePic && (
    <div className="mt-4 flex justify-center">
      <img
        src={profilePic}
        alt="Profile Preview"
        className="w-24 h-24 rounded-full object-cover border"
      />
    </div>
  )}

  {/* Submit Button */}
{/* Submit Button */}
<button
  type="submit"
  disabled={loading || !profilePic}
  className={`w-full py-2 rounded-lg font-semibold text-white transition-all duration-300 
    ${
      loading || !profilePic
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 shadow-md hover:shadow-lg"
    }`}
>
  {loading ? "Registering..." : "Register Now"}
</button>


</form>


      <p className="mt-2">
        Already have an account? <Link to="/auth/login" className="text-blue-500">Login</Link>
      </p>

      <SocialLogin />
    </div>
  );
};

export default Register;
