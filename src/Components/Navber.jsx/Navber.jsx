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
    <div className="navbar max-w-7xl mx-auto pt-4 text-lime-500 px-4  fixed rounded-xl w-full z-50 ">
      <div className="navbar-start">
  <Link to="/" className="font-bold text-xl flex items-center text-lime-300">
    <img
      src="/Name Logo (1).png"
      alt="logo"
      className="rounded-full w-16 h-16 mr-2"
    />
   <p className="text-3xl  hidden lg:block"> HobbyHove</p>
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

      {/* Right side */}
    
      <div className="navbar-end flex items-center gap-3 relative">
        <div className="navbar-end flex items-center gap-3 relative">
  <ThemeToggle/>

</div>

       
        {user ? (
          <>
            <Link to="/updateprofile">
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="Profile"
                className="h-12 w-12 rounded-full object-cover cursor-pointer"
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

      {/* Mobile Menu */}
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
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 p-2 shadow text-white rounded-box w-52"
        >
          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md ${
                    isActive
                      ? "bg-lime-600 text-white"
                      : "border text-lime-500 hover:text-black hover:bg-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <div className="flex items-center gap-3 mt-2">
            {user ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
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
