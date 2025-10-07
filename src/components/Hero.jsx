import React from "react";
import { motion } from "framer-motion";
import { Users, Building2, Workflow } from "lucide-react";

const companies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },

];

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden 
      bg-gradient-to-b
      from-[rgba(0,255,132,0.01)] 
      via-[rgba(0,255,132,0.12)_30%] 
    to-[rgba(0,255,132,0.30)_100%]"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary animate-gradient bg-[length:200%_200%] opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 pb-0 text-center font-inter">
        {/* Trusted tagline */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center md:flex-row space-x-3 mb-3"
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
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold mb-6 
                    text-neutral-dark dark:text-white text-center 
                    bg-clip-text text-transparent drop-shadow-lg 
                    md:leading-tight font-poppins"
        >
          Streamline
          <span className="inline-flex items-center gap-2 align-middle mx-2">
            <Users className="w-6 h-6 md:w-8 md:h-8 text-[#00FF84]" />
            <Workflow className="w-6 h-6 md:w-8 md:h-8 text-[#00FF84]" />
            <Building2 className="w-6 h-6 md:w-8 md:h-8 text-[#00FF84]" />
          </span>
          Collaboration
          Between Contractors & Vendors
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
            className="px-6 py-3 border-2 border-gray-500 text-secondary dark:text-secondary rounded-full font-semibold hover:bg-secondary transition"
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
              flex flex-col items-start justify-center p-4
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
            transition-all duration-500 ease-out flex flex-col items-start justify-center p-4
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
            flex flex-col items-start justify-center p-4
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
        {/* <motion.div
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
        </motion.div> */}

        <div className="py-12 pt-0 dark:bg-gray-900">
           <h2 className="text-center text-lg font-medium text-gray-600 dark:text-gray-300 mb-10 font-poppins">
            Trusted by leading companies
          </h2>

          {/* Scrolling logos */}
          <div className="overflow-hidden relative w-full">
            <div className="flex animate-scroll space-x-12 w-max">
              {companies.concat(companies).map((company, index) => (
                <img
                  key={index}
                  src={company.logo}
                  alt={company.name}
                  className="h-10 w-auto transition"
                />
              ))}
            </div>
          </div>   
        </div>
        </div>
    </section>
  );
};

export default Hero;
