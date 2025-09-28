import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../AuthLayout/SocialLogin';
import { useAuth } from '../AuthLayout/auth/AuthProvider';


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { signInUser } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: `Welcome back, ${result.user.email}!`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate('/');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message || 'Something went wrong!',
        });
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center mb-4">Login Now!</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'Enter a valid email address',
                },
              })}
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              autoComplete="username"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message:
                    'Password must be at least 6 characters long and contain at least one letter and one number',
                },
              })}
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="input input-bordered w-full pr-10"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between text-sm mt-2">
            <div className="flex items-center gap-2">
              <FaLock className="text-blue-500" />
              <Link to="/forgetpassword" className="link link-hover">
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn text-white font-semibold w-full transition duration-200 hover:shadow-lg hover:scale-105 bg-gradient-to-r from-lime-400 via-lime-500 to-green-500 hover:from-lime-500 hover:to-green-600"
          >
            Login
          </button>

          <p className="text-center mt-2">
            New to this website?{' '}
            <Link to="/auth/register" className="text-lime-600 font-semibold">
              Register
            </Link>
          </p>
        </form>

        <div className="mt-4">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
