import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4">
      <h1 className="text-6xl md:text-8xl font-extrabold text-pink-500 mb-6 animate-pulse">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-lime-500 hover:bg-lime-600 dark:bg-lime-400 dark:hover:bg-lime-500 text-white font-semibold rounded-lg transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
