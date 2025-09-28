import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-green-600 dark:text-lime-400">HobbyHive</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Connect with hobby enthusiasts, explore groups, and make new friends!
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-green-500 dark:hover:text-lime-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 dark:hover:text-blue-300"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 dark:hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700 dark:hover:text-blue-500"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
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
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p>Email: <a href="mailto:info@hobbyhive.com" className="hover:text-green-500 dark:hover:text-lime-400">info@hobbyhive.com</a></p>
          <p>Phone: <a href="tel:+880123456789" className="hover:text-green-500 dark:hover:text-lime-400">+880 123 456 789</a></p>
          <p>Address: 123 Hobby St, Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 mt-4 pt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} HobbyHive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
