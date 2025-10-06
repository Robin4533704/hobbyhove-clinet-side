import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
  <button
  onClick={() => setDarkMode(!darkMode)}
  className="p-2 rounded-lg text-yellow-400 dark:text-blue-400 lg:bg-gray-100 lg:dark:bg-gray-800 lg:hover:bg-gray-200 lg:dark:hover:bg-gray-700 transition-colors"
>
  {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
</button>
  );
};

export default ThemeToggle;
