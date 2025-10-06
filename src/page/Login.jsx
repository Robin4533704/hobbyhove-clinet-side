import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../AuthLayout/auth/AuthProvider";
import SocialLogin from "../AuthLayout/SocialLogin";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signInUser, passwordReset  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

 const onSubmit = (data) => {
  console.log("Email:", data.email, "Password:", data.password); // <--- check this
  if (!data.email || !data.password) {
    Swal.fire({ icon: 'error', title: 'Login Failed', text: 'Email or password missing' });
    return;
  }

  signInUser(data.email, data.password)
    .then(() => {
      Swal.fire({ icon: 'success', title: 'Login Successful', timer: 1500, showConfirmButton: false });
      navigate(from);
    })
    .catch((err) => {
      console.error("Firebase login error:", err.code, err.message); // Firebase error code দেখার জন্য
      Swal.fire({ icon: 'error', title: 'Login Failed', text: err.message });
    });
};

const handleResetPassword =  async () => {
  const { value: email } = await Swal.fire({
    title: "Reset Password",
    input: "email",
    inputLabel: "Enter your email",
    inputPlaceholder: "youremail@example.com",
    showCancelButton: true,
  });

  if (email) {
    console.log("Reset password for:", email); // Debug
    try {
      await passwordReset(email);
      Swal.fire("✅ Check your email", "Password reset link sent", "success");
    } catch (err) {
      console.error("Password reset error:", err);
      Swal.fire("❌ Error", err.message, "error");
    }
  }
};

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-md bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("email", { required: "Email required" })} type="email" placeholder="Email" className="input input-bordered w-full"/>
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <div className="relative">
          <input {...register("password", { required: "Password required" })} type={showPassword ? "text" : "password"} placeholder="Password" className="input input-bordered w-full pr-10"/>
          <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <Link onClick={handleResetPassword} className="link text-sm">Forgot Password?</Link>
        <button type="submit" className="btn w-full bg-green-500 text-white">Login</button>
      </form>

      <p className="mt-2 text-center">
        New user? <Link to="/auth/register" className="text-blue-500">Register</Link>
      </p>

      <SocialLogin />
    </div>
  );
};

export default Login;
