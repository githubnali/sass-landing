// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react"; // Added Menu & X for mobile toggle
import { useModal } from "../context/ModalContext";
import { Link } from "react-scroll";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const {openModal} = useModal();

  // Apply theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    // Trigger animation on load
    setTimeout(() => setAnimate(true), 50);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollProps = {
    smooth: true,
    duration: 1200,
    offset: -100, // adjust if you have a sticky header
    className: "hover:text-gray-900 cursor-pointer",
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full flex justify-center px-6 py-8 pb-0
        bg-white/80 dark:bg-gray-900/80 backdrop-blur-md
        transition-transform duration-700 ease-out
        bg-gradient-to-b
        from-[rgba(0,255,132,0.04)]
        via-[rgba(0,255,132,0.02)]
        to-[rgba(0,255,132,0.04)]
        dark:from-transparent dark:to-transparent

        ${animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}
      `}
    >
      <nav className="w-full max-w-6xl flex items-center justify-between border-2 border-gray-300 dark:border-gray-700 rounded-full px-6 py-3 bg-white dark:bg-gray-900 font-inter">
        
        {/* Brand Logo */}
        <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
          SaaSBrand
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex space-x-8 text-gray-700 dark:text-gray-300 font-medium">
          <li><Link to="features" {...scrollProps}>Features</Link></li>
          <li><Link to="how-it-works" {...scrollProps}>How it Works</Link></li>
          <li><Link to="pricing" {...scrollProps}>Pricing</Link></li>
          <li><Link to="reviews" {...scrollProps}>Reviews</Link></li>
          <li><Link to="contact" {...scrollProps}>Contact</Link></li>
          <li><Link to="faqs" {...scrollProps}>FAQs</Link></li>
        </ul>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button> */}

          {/* Get Started Button */}
          <a
            onClick={openModal}
            className="hidden lg:inline px-4 py-2 bg-[#00FF84] text-black dark:text-gray-900 font-semibold rounded-md hover:bg-[#00E676] transition cursor-pointer"
          >
            Get Started
          </a>

          {/* Mobile Hamburger Menu */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md border border-gray-200 dark:border-gray-700 lg:hidden mt-3">
          <ul className="flex flex-col space-y-4 px-6 py-6 text-gray-700 dark:text-gray-300 font-medium">
            <li><Link to="features" {...scrollProps}>Features</Link></li>
            <li><Link to="how-it-works" {...scrollProps}>How it Works</Link></li>
            <li><Link to="pricing" {...scrollProps}>Pricing</Link></li>
            <li><Link to="reviews" {...scrollProps}>Reviews</Link></li>
            <li><Link to="contact" {...scrollProps}>Contact</Link></li>
            <li><Link to="faqs" {...scrollProps}>FAQs</Link></li>
            <li>
              <a
                className="block px-4 py-2 bg-[#00FF84] text-black dark:text-gray-900 font-semibold rounded-md hover:bg-[#00E676] transition"
                onClick={openModal}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
