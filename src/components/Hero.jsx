import React from 'react'

const Hero = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16 pb-0 text-center">
      {/* Trust tagline */}
      <div className="flex items-center justify-center space-x-3 mb-6">
        {/* Profile icons */}
        <div className="flex -space-x-2">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user1"
            className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900"
          />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user2"
            className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900"
          />
          <img
            src="https://randomuser.me/api/portraits/men/56.jpg"
            alt="user3"
            className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900"
          />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Trusted by 1,000+ contractors & vendors
        </p>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
        Connect Contractors & Vendors Seamlessly
      </h1>

      {/* Paragraph */}
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
        Get instant quotations, streamline projects, and grow your business with our all-in-one SaaS platform.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <a
          href="#get-started"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Get Started
        </a>
        <a
          href="#book-demo"
          className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition"
        >
          Book a Demo
        </a>
      </div>

      {/* YouTube video */}
      <div className="mb-12">
        <div className="relative aspect-video max-w-3xl mx-auto">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/ZK-rNEhJIDs"
            title="Demo Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>     
    </section>
  );
};

export default Hero;
