import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section 
    className="
    relative py-16 px-6 md:px-12 overflow-hidden
     bg-gradient-to-b
     from-[rgba(0,255,132,0.04)]
     via-[rgba(0,255,132,0.02)]
     to-[rgba(0,255,132,0.04)]
     dark:from-transparent dark:to-transparent
   ">

      {/* Top gradient border (left to right) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00FF84] via-[#00FF84]/50 to-transparent opacity-80" />
      {/* Bottom gradient border (right to left) */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-l from-[#00FF84] via-[#00FF84]/50 to-transparent opacity-80" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-full">
            Trusted by 1000+ Clients
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-snug font-poppins">
            Lorem ipsum dolor, sit amet consectetur
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ducimus.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-[#00FF84] text-dark hover:opacity-90 transition">
              Start free trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-6 py-3 rounded-lg font-semibold border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              See How It Works
            </button>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Doctor Illustration"
            className="w-64 md:w-80 lg:w-96 h-auto object-contain rounded-lg"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
