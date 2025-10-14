import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthLayout/auth/AuthProvider";
import ThemeToggle from "../../page/ThemeToggle";



const Navbar = () => {
  const { user,   logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/auth/login");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/AllGroups", label: "All Groups" },
    { to: "/creategrupe", label: "Create Group" },
    { to: "/mygroups", label: "My Groups" },
  ];

  return (
   <div className="navbar max-w-7xl mx-auto pt-4 text-lime-500 px-4 fixed rounded-xl w-full z-50 backdrop-blur-md bg-base-50">
      {/* Left side (logo) */}
      <div className="navbar-start">
        <Link to="/" className="relative font-bold flex items-center gap-2 text-lime-300">
          <img
            src="/Black_White_Bold_Simple_Initials_Name_Logo-removebg-preview (1).png"
            alt="logo"
            className="rounded-full w-12 h-12"
          />
          <p className="absulate mt-2 -ml-2 text-3xl">HobbyHove</p>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold gap-3">
          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md ${
                    isActive
                      ? "bg-lime-400 text-white"
                      : "border text-lime-400 hover:bg-white hover:text-black"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side (desktop) */}
      <div className="navbar-end flex items-center lg:gap-3 relative">
        {/* ✅ Desktop Theme Toggle */}
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>

        {user ? (
          <>
            <Link to="/updateprofile">
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="Profile"
                className="h-12 lg:block hidden w-12 rounded-full object-cover cursor-pointer"
              />
            </Link>
            <button
              onClick={handleLogout}
              className="btn btn-sm lg:block hidden bg-red-500 hover:bg-red-600 text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-sm px-6 font-semibold py-2 bg-lime-500 hover:bg-lime-600 text-white hidden lg:block"
          >
            Sign In
          </Link>
        )}
      </div>

      {/* ✅ Mobile Menu */}
      <div className="dropdown dropdown-end block lg:hidden ml-auto">
        <div tabIndex={0} className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        {/* Dropdown content */}
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-gray-900 text-white rounded-box w-52"
        >
          {/* ✅ Small theme toggle visible inside dropdown */}
          <li className="mb-2 flex justify-center">
            <ThemeToggle />
          </li>

          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md ${
                    isActive
                      ? "bg-lime-600 text-white"
                      : "border text-lime-400 hover:text-black hover:bg-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          <div className="flex flex-col items-center gap-2 mt-3">
            {user ? (
              <>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/auth/login"
                className="px-4 py-2 bg-lime-500 hover:bg-lime-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
              >
                Sign In
              </Link>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
