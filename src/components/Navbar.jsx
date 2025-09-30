import React from 'react'
import { setTheme, getTheme } from '../lib/theme'

// export default function Navbar() {
//   const [theme, setLocalTheme] = React.useState(getTheme())

//   const toggleTheme = () => {
//     const newTheme = theme === 'dark' ? 'light' : 'dark'
//     setTheme(newTheme)
//     setLocalTheme(newTheme)
//   }

//   return (
//     <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 flex justify-between items-center px-6 py-3">
//       <div className="text-lg font-bold">LOGO</div>
//       <div className="flex items-center gap-4">
//         <a href="#features" className="hover:underline">Features</a>
//         <a href="#pricing" className="hover:underline">Pricing</a>
//         <a href="#faq" className="hover:underline">FAQ</a>
//         <button onClick={toggleTheme} className="px-3 py-1 border rounded">
//           {theme === 'dark' ? '☀️' : '🌙'}
//         </button>
//       </div>
//     </nav>
//   )
// }


// src/components/Navbar.jsx
import { useState } from "react";
import { Moon, Sun } from "lucide-react"; // icons for dark/light toggle

const Navbar = () => {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
      <header className="sticky top-0 z-50 w-full flex justify-center px-6 py-4 bg-white/80 dark:bg-gray-900/80">      
      <nav className="w-full max-w-6xl flex items-center justify-between border border-gray-300 dark:border-gray-700 rounded-full px-6 py-3 bg-white dark:bg-gray-900 shadow-sm">
        
        {/* Brand Logo */}
        <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
          SaaSBrand
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300 font-medium">
          <li><a href="#features" className="hover:text-indigo-500">Features</a></li>
          <li><a href="#how-it-works" className="hover:text-indigo-500">How it Works</a></li>
          <li><a href="#reviews" className="hover:text-indigo-500">Reviews</a></li>
          <li><a href="#faqs" className="hover:text-indigo-500">FAQs</a></li>
        </ul>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Get Started Button */}
          <a
            href="#get-started"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
