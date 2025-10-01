import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary animate-gradient bg-[length:200%_200%] opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 pb-0 text-center font-inter">
        {/* Trust tagline */}
        <div className="flex items-center justify-center space-x-3 mb-0">
          <div className="flex -space-x-2">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="user1"
              className="w-8 h-8 rounded-full border-2 border-[#00FF84]"
            />
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="user2"
              className="w-8 h-8 rounded-full border-2 border-[#00FF84]"
            />
            <img
              src="https://randomuser.me/api/portraits/men/56.jpg"
              alt="user3"
              className="w-8 h-8 rounded-full border-2 border-[#00FF84]"
            />
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Trusted by 1,000+ contractors & vendors
          </p>
        </div>

        {/* Title with animation */}
        <motion.h1
          initial={{ y: -50, opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold mb-6 
              bg-gradient-to-r from-[#000000] to-[#00FF84] dark:from-[#FFFFFF] dark:to-[#00FF84] 
              bg-clip-text text-transparent drop-shadow-lg leading-normal md:leading-snug"
          >          
          Connect Contractors & Vendors Seamlessly
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-800 dark:text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Get instant quotations, streamline projects, and grow your business
          with our all-in-one SaaS platform.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          {/* Primary Button */}
          <a
            href="#get-started"
            className="bg-[#00FF84] px-6 py-3 bg-primary text-black font-semibold rounded-full shadow-lg hover:bg-primary/90 transition "
          >
            Get Started
          </a>
          {/* Secondary Button */}
          <a
            href="#book-demo"
            className="px-6 py-3 border-2 border-secondary text-secondary dark:text-secondary rounded-full font-semibold hover:bg-secondary hover:text-white transition"
          >
            Book a Demo
          </a>
        </motion.div>

        {/* YouTube video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-12"
        >
          <div className="relative aspect-video max-w-3xl mx-auto">
            <div className="absolute inset-0 rounded-xl border-2 border-[#00FF84] 
              bg-white/10 backdrop-blur-lg shadow-xl pointer-events-none z-10"></div>
            <iframe
              className="w-full h-full rounded-xl shadow-xl relative z-20"
              src="https://www.youtube.com/embed/ZK-rNEhJIDs"
              title="Demo Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
      </motion.div>

      </div>
    </section>
  );
};

export default Hero;
