import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { axiosInstance } from "../AuthLayout/auth/useAxiosSecour"; // Axios instance
import { useAuth } from "../AuthLayout/auth/AuthProvider";
import SocialLogin from "../AuthLayout/SocialLogin";

const Register = () => {
  const {
    register: authRegister,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfiles } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Image Upload Handler
  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`;

    try {
      setLoading(true);
      const res = await axiosInstance.post(url, formData); // imgBB POST
      if (res.data.success) setProfilePic(res.data.data.display_url);
    } catch (err) {
      console.error("Image upload error:", err);
      Swal.fire({
        icon: "error",
        title: "Image upload failed",
        text: err.message || "Please try again",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setLoading(false);
    }
  };

  // Form Submit
  const onSubmit = async (data) => {
    if (!profilePic) {
      Swal.fire({
        icon: "warning",
        title: "Upload Profile Picture",
        text: "Please upload a profile picture first",
        confirmButtonColor: "#f59e0b",
      });
      return;
    }

    try {
      setLoading(true);

      // 1️⃣ Firebase Signup
      const result = await createUser(data.email, data.password);

      // 2️⃣ Update Firebase Profile
      await updateUserProfiles({
        displayName: data.name,
        photoURL: profilePic,
      });

      // 3️⃣ Save to MongoDB
      const userInfo = {
        email: data.email,
        role: "user",
        displayName: data.name,
        photoURL: profilePic,
        created_at: new Date().toISOString(),
        last_log_in: new Date().toISOString(),
      };

      await axiosInstance.post("/users", userInfo); // MongoDB POST

      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Your account has been created!",
        confirmButtonColor: "#22c55e",
      });

      navigate(from);
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: err.message || "Something went wrong!",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-md bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Create Account</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <input
          {...authRegister("name", { required: "Name required" })}
          placeholder="Name"
          className={`input input-bordered w-full ${
            errors.name ? "border-red-500" : ""
          }`}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        {/* Email */}
        <input
          {...authRegister("email", { required: "Email required" })}
          type="email"
          placeholder="Email"
          className={`input input-bordered w-full ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        {/* Password */}
        <div className="relative">
          <input
            {...authRegister("password", { required: "Password required", minLength: 6 })}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={`input input-bordered w-full pr-10 ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Image Upload */}
        <input
          type="file"
          onChange={handleImageUpload}
          accept="image/*"
          className="file-input file-input-bordered w-full"
        />

        {/* Image Preview */}
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
        <button
          type="submit"
          className="btn w-full bg-green-500 hover:bg-green-600 text-white font-bold"
          disabled={loading || !profilePic}
        >
          {loading ? "Registering..." : "Register Now"}
        </button>
      </form>

      <p className="mt-2">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-blue-500">
          Login
        </Link>
      </p>

      <SocialLogin />
    </div>
  );
};

export default Register;
