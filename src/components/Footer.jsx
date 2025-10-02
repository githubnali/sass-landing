import React from "react";
import { Link } from "react-scroll";
import {FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter, FaEnvelope, FaPhone, FaGlobeAsia } from "react-icons/fa";


const Footer = () => {

  const scrollProps = {
    smooth: true,
    duration: 1200,
    offset: -100, // adjust if you have a sticky header
    className: "hover:text-[#00FF84] cursor-pointer",
  };


  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 px-6 md:px-8 border-t-2 border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        
        {/* Left Column (40%) */}
        <div className="md:w-2/5 flex flex-col space-y-8">
          {/* Logo */}
          <div>
            <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white">
              SaaSBrand
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              Simplify your workflow with our SaaS solutions.
            </p>
          </div>

          {/* Subscribe Form (stacked) */}
          <form className="flex flex-col space-y-3 max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-gray-700 border border-gray-300 dark:border-0 dark:text-gray-200 bg-white dark:bg-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-3 rounded-lg bg-[#00FF84] text-black font-semibold hover:bg-[#00FF84] transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right Column (60%) */}
        <div className="md:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Menu Section */}
          <div>
            <h3 className="font-poppins font-semibold text-gray-900 dark:text-white mb-3">
              Menu Links
            </h3>
            <ul className="space-y-2">
                      <li><Link to="features" {...scrollProps} className="hover:text-[#00FF84] cursor-pointer">Features</Link></li>
                      <li><Link to="how-it-works" {...scrollProps} className="hover:text-[#00FF84] cursor-pointer">How it Works</Link></li>
                      <li><Link to="pricing" {...scrollProps} className="hover:text-[#00FF84] cursor-pointer">Pricing</Link></li>
                      <li><Link to="reviews" {...scrollProps} className="hover:text-[#00FF84] cursor-pointer">Reviews</Link></li>
                      <li><Link to="faqs" {...scrollProps} className="hover:text-[#00FF84] cursor-pointer">FAQs</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-poppins font-semibold text-gray-900 dark:text-white mb-3">
              Legal
            </h3>
            <ul className="space-y-2">
              <li><a className="hover:text-[#00FF84] cursor-pointer">Privacy Policy</a></li>
              <li><a className="hover:text-[#00FF84] cursor-pointer">Terms of Service</a></li>
              <li><a className="hover:text-[#00FF84] cursor-pointer">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="font-poppins font-semibold text-gray-900 dark:text-white mb-3">
              Contac Us
            </h3>
            {/* Email */}
            <div className="flex items-center gap-3 mb-4">
              <FaEnvelope className="text-[#00FF84] text-xl" />
              <a href="mailto:sass@company.com" className="text-gray-800 dark:text-gray-200">
                sass@company.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mb-4">
              <FaPhone className="text-[#00FF84] text-xl" />
              <a href="tel:+910000000000" className="text-gray-800 dark:text-gray-200">
                +91 00000 00000
              </a>
            </div>

            {/* Office Address */}
            <div className="flex items-start gap-3 mb-4">
              <FaGlobeAsia className="text-[#00FF84] text-xl" />
              <span className="text-gray-800 dark:text-gray-200">
                Chennai Tamil Nadu, India
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-4 text-center text-sm text-gray-600 dark:text-gray-400 flex flex-col items-center justify-center gap-4">
      {/* Copyright */}
      <div>
        © {new Date().getFullYear()} SaaSBrand. All rights reserved.
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-4 mt-2 md:mt-0">
        <a
          href="https://facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00FF84] transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://linkedin.com/in/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00FF84] transition"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://twitter.com/yourpage" // X icon
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00FF84] transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00FF84] transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://youtube.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00FF84] transition"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
