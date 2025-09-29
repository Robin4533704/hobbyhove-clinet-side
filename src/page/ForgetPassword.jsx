import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAuth } from "../AuthLayout/auth/AuthProvider";
import { useNavigate } from "react-router";

const ForgetPassword = () => {
  const { passwordReset } = useAuth();
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await passwordReset(data.email);
      Swal.fire({
        icon: "success",
        title: "Email Sent",
        text: "Password reset email has been sent to your inbox!",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: err.message || "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
    navigate('/auth/login')
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-md bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Reset Password</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="Enter your email"
          className={`input input-bordered w-full ${errors.email ? "border-red-500" : ""}`}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <button
          type="submit"
          className="btn w-full bg-green-500 hover:bg-green-600 text-white"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Email"}
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
