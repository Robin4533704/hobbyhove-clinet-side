import React, { useState, useEffect } from "react";
import { FiMoon } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";

const Dackmode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full text-xl text-yellow-500 dark:text-black bg-white dark:bg-gray-800 shadow transition"
    >
      {darkMode ? (
        <IoSunny className="text-yellow-400" />
      ) : (
        <FiMoon className="text-gray-900" />
      )}
    </button>
  );
};

export default Dackmode;
