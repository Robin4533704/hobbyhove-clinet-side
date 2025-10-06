import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div className="space-y-4">
          <Link to="/" className="relative font-bold  flex items-center text-lime-400">
             <img
               src="/Black_White_Bold_Simple_Initials_Name_Logo-removebg-preview (1).png"
               alt="logo"
               className="rounded-full w-16 h-16"
             />
            <p className="absulate -ml-3 text-3xl md:block  hidden lg:block">HobbyHove</p>
           </Link>
          <p className="text-gray-600 dark:text-gray-400">
            Connect with hobby enthusiasts, explore groups, and make new friends!
          </p>
          <div className="flex justify-center gap-6 mt-8">
      <a
        href="https://www.facebook.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors text-xl"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700 transition-colors text-xl"
      >
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600 transition-colors text-xl"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900 transition-colors text-xl"
      >
        <FaLinkedinIn />
      </a>
    </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lime-300 text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:text-green-500 dark:hover:text-lime-400">Home</Link>
            </li>
            <li>
              <Link to="/AllGroups" className="hover:text-green-500 dark:hover:text-lime-400">All Groups</Link>
            </li>
            <li>
              <Link to="/creategrupe" className="hover:text-green-500 dark:hover:text-lime-400">Create Group</Link>
            </li>
            <li>
              <Link to="/mygroups" className="hover:text-green-500 dark:hover:text-lime-400">My Groups</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2 text-lime-300">Contact</h3>
          <p>Email: <a href="mailto:info@hobbyhive.com" className="hover:text-green-500 dark:hover:text-lime-400">info@hobbyhive.com</a></p>
          <p>Phone: <a href="tel:+8801969453361" className="hover:text-green-500 dark:hover:text-lime-400">+880 123 456 789</a></p>
          <p>Address: Comilla, Bangladesh</p>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 mt-4 pt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} HobbyHive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
