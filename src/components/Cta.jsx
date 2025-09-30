import React from "react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-900 text-white rounded-lg mx-4 md:mx-8 my-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Start Your Free Trial Today!
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Experience the power of our SaaS solution and take your business to the next level.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-blue-600 dark:text-blue-800 font-semibold px-6 py-3 rounded-lg text-lg hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CTASection;
