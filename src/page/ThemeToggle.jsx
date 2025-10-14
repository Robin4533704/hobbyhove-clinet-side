import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Local storage থেকে theme পড়া
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Theme apply করা
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
    <>
      {/* ✅ বড় স্ক্রিনে শুধু আইকন */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="hidden lg:flex items-center gap-2 p-2 rounded-lg transition-colors 
                   text-yellow-400 dark:text-blue-400 
                   bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
      </button>

      {/* ✅ ছোট স্ক্রিনে: Icon → Text → Toggle */}
      <div className="flex items-center gap-2 lg:hidden 
             bg-gray-700 dark:bg-white 
             p-2 rounded-lg shadow-md transition-colors duration-300">
        {/* Icon */}
        <div className="text-yellow-400 dark:text-blue-400">
          {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
        </div>

        {/* Text */}
        <span className="text-sm font-semibold Light:text-gray-700 dark:text-gray-200">
          {darkMode ? "Dark" : "Light"}
        </span>

        {/* Toggle switch */}
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className="toggle theme-controller ml-auto"
        />
      </div>
    </>
  );
};

export default ThemeToggle;
