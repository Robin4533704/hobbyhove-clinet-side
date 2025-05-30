import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import logo from '../assets/lambergini.jpg'; // ✅ Image should be imported

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <div className=" mb-4">
            <img
              src={logo} // ✅ Use the imported image like this
              alt="logo"
              className="w-40  h-40 mx-auto rounded-full"
            />
            <h2 className="text-4xl font-bold text-orange-400">
             AUTOMOBI <span className="text-blue-400">LAMBORGHINI</span>
            </h2>
          </div>
          <p className="mb-4">
            Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-4 text-2xl mb-4">
           <a href=" https://www.facebook.com"> <FaFacebookF className="text-blue-600 cursor-pointer" /></a>
           <a href=" https://www.twitter.com"> <FaTwitter className="text-sky-500 cursor-pointer" /></a>
            <a href=" https://www.instagram.com"><FaInstagram className="text-pink-600 cursor-pointer" /></a>
           <a href="https://www.linkedin.com"> <FaLinkedinIn className="text-blue-800 cursor-pointer" /></a>
          </div>
          <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaPhone /> +88 01969453361
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> robinhossen8428@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 370, Laksam, Cumilla, Chittagong
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Connect with Us
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border rounded focus:outline-none"
              rows={4}
            ></textarea>
            <button className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
