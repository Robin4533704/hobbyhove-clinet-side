import React from "react";

import Swal from "sweetalert2";
import { useAuth } from "./auth/AuthProvider";
import { useNavigate } from "react-router";

const SocialLogin = () => {
  const { signInGoogleUser, signInGithubUser } = useAuth();
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {
      await signInGoogleUser();
      Swal.fire("Success", "Logged in with Google!", "success");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
     navigate("/")
  };

  const handleGithubSignIn = async () => {
    try {
      await signInGithubUser();
      Swal.fire("Success", "Logged in with GitHub!", "success");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
 <div className="mt-4 w-full max-w-md mx-auto px-4">
  <div className="text-center my-1 text-gray-500 text-sm">OR</div>

  {/* Google Button */}
  <button
    onClick={handleGoogleSignIn}
    className="w-full flex items-center gap-2 justify-center py-2 rounded-md border border-[#e5e5e5] 
      bg-gradient-to-r from-sky-300 via-sky-400 to-sky-500 
      hover:from-sky-400 hover:to-sky-600 transition duration-200 mb-2 text-black text-sm"
  >
    <svg aria-label="Google logo" width="20" height="20" viewBox="0 0 512 512">
      <g>
        <path d="M0 0H512V512H0z" fill="#fff" />
        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
        <path fill="#4285f4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
        <path fill="#fbbc02" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73" />
        <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
      </g>
    </svg>
    <span className="sm:inline">Sign in with Google</span>
  </button>

  {/* GitHub Button */}
  <button
    onClick={handleGithubSignIn}
    className="w-full flex items-center gap-2 justify-center px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition text-sm"
  >
    <svg
      height="20"
      width="20"
      viewBox="0 0 16 16"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.38
      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
      -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89
      -3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68
      0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15
      0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19
      0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
    <span className=" sm:inline ">Sign in with GitHub</span>
  </button>
</div>
  );
};

export default SocialLogin;
