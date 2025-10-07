import React from "react";
import { motion } from "framer-motion";
import { Users, Building2, Workflow } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary animate-gradient bg-[length:200%_200%] opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 pb-0 text-center font-inter">
        {/* Trusted tagline */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center md:flex-row space-x-3 mb-0"
        >
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
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 100, opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-normal md:leading-snug text-gray-900 dark:text-white"
        >
          <span className="inline-flex items-center justify-center gap-3 font-poppins">
            Connect <Users className="w-8 h-8 text-[#00FF84]" />{" "}
            <span className="font-playfair italic text-gray-900 dark:text-gray-100">
              Contractors
            </span>
          </span>
          <br />
          <span className="inline-flex items-center justify-center gap-3 font-inter">
            & <Building2 className="w-8 h-8 text-[#00FF84]" />{" "}
            <span className="font-semibold">Vendors</span>
          </span>
          <br />
          <span className="inline-flex items-center justify-center gap-3 font-poppins">
            Seamlessly <Workflow className="w-8 h-8 text-[#00FF84]" />
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-800 dark:text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Get instant quotations, streamline projects, and grow your business
          with our all-in-one SaaS platform
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#get-started"
            className="bg-[#00FF84] px-6 py-3 bg-primary text-black font-semibold rounded-full shadow-lg hover:bg-primary/90 transition"
          >
            Get Started
          </a>
          <a
            href="#book-demo"
            className="px-6 py-3 border-2 border-secondary text-secondary dark:text-secondary rounded-full font-semibold hover:bg-secondary hover:text-white transition"
          >
            Book a Demo
          </a>
        </motion.div>

        {/* SaaS Cards (redesigned like attached image) */}
       <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative flex justify-center items-center mb-20 perspective-[1000px]" // added perspective
        >
          {/* Left Card */}
          <motion.div
            className="
              absolute w-72 md:w-96 h-72 md:h-80 rounded-2xl
              bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg
              shadow-2xl border border-gray-200 dark:border-gray-700
              transform -translate-x-[100px] md:-translate-x-[400px]
              scale-95 opacity-90 z-0
              transition-all duration-500 ease-out
              flex flex-col items-center justify-center p-4
              rotate-x-[15deg] rotate-y-[-10deg]  /* top-out, bottom-in + slight left twist */
            "
          >
            <img
              src="https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg"
              alt="SaaS Analytics Dashboard"
              className="w-full h-44 object-cover rounded-xl mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              SaaS Analytics Dashboard
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Track KPIs and performance metrics.
            </p>
        </motion.div>

  {/* Center Card */}
  <motion.div
    className="
      relative w-80 md:w-[28rem] h-80 md:h-88 rounded-2xl
      bg-white dark:bg-gray-900 backdrop-blur-lg shadow-2xl
      border-2 border-[#00FF84] z-10 transform scale-100
      transition-all duration-500 ease-out flex flex-col items-center justify-center p-4
    "
  >
    <img
      src="https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg"
      alt="Project Dashboard"
      className="w-full h-48 object-cover rounded-xl mb-3"
    />
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      Project Dashboard
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      Manage client projects effortlessly.
    </p>
  </motion.div>

  {/* Right Card */}
  <motion.div
    className="
      absolute w-72 md:w-96 h-72 md:h-80 rounded-2xl
      bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg
      shadow-2xl border border-gray-200 dark:border-gray-700
      transform translate-x-[100px] md:translate-x-[400px]
      scale-95 opacity-90 z-0
      transition-all duration-500 ease-out
      flex flex-col items-center justify-center p-4
      rotate-x-[15deg] rotate-y-[10deg]  /* mirrored twist */
    "
  >
    <img
      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
      alt="Finance Dashboard"
      className="w-full h-44 object-cover rounded-xl mb-3"
    />
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      Finance Dashboard
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      Analyze revenue & expenses at a glance.
    </p>
  </motion.div>
</motion.div>


        {/* YouTube Video (unchanged) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-12"
        >
          <div className="relative aspect-video max-w-3xl mx-auto rounded-xl border-2 border-[#00FF84] shadow-xl overflow-hidden bg-white/10 backdrop-blur-lg">
            <iframe
              className="w-full h-full"
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
