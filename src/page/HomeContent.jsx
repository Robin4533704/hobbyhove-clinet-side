import React from "react";

import { NavLink } from "react-router-dom";


const HomeContent = () => {
  return (
    <div className=" dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
    

      {/* Section: Why Join HobbyHive */}
      <section className=" dark:text-white dark:bg-gray-800 py-16 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Join HobbyHive?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-800 mb-6">
            Meet like-minded people, explore hobbies, and make new friends!
          </p>
          <NavLink
            to="/creategrupe"
            className="px-6 py-3 bg-lime-500 hover:bg-lime-600 dark:bg-lime-400 dark:hover:bg-lime-500 text-white dark:text-gray-900 font-semibold rounded-lg transition"
          >
            Join Now
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
