import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        
        {/* Left Column (40%) */}
        <div className="md:w-2/5 flex flex-col space-y-8">
          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
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
              className="px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 focus:outline-none"
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
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Menu
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#privacy"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#cookies"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Social
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} SaaSBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
