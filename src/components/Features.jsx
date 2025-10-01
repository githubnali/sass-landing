// import React from "react";

// const features = [
//   { title: "Feature 1", lines: 3 },
//   { title: "Feature 2", lines: 2 },
//   { title: "Feature 3", lines: 2 },
//   { title: "Feature 4", lines: 4 },
//   { title: "Feature 5", lines: 6 },
// ];

// const FeaturesSection = () => {
//   return (
//     <section className="dark:bg-gray-900 text-white py-16">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-6">
//           Our Value Proposition
//         </h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 dark:bg-gray-900 border-neutral-800 rounded-xl p-6 shadow-md"
//             >
//               <h3 className="text-lg font-medium mb-4">{feature.title}</h3>
//               <div className="space-y-2">
//                 {Array.from({ length: feature.lines }).map((_, i) => (
//                   <div
//                     key={i}
//                     className="h-2 bg-neutral-700 rounded animate-pulse w-[90%]"
//                     style={{ width: `${80 + (i % 2) * 10}%` }}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

// import React from "react";

// const features = [
//   {
//     title: "Fast Performance",
//     description:
//       "Our app is lightning fast and optimized for all devices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     title: "Secure Data",
//     description:
//       "We ensure your data is safe with industry-standard encryption and protocols.",
//   },
//   {
//     title: "24/7 Support",
//     description: "Get help anytime with our round-the-clock support team.",
//   },
//   {
//     title: "Customizable",
//     description:
//       "Easily tailor features and layouts to fit your unique business needs. More details about customization.",
//   },
//   {
//     title: "Analytics",
//     description:
//       "Track user behavior and generate insights to grow your business.",
//   },
// ];

// const FeaturesSection = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <h2 className="text-3xl font-extrabold text-center mb-10">
//         Why Choose Us
//       </h2>
//       {/* Masonry container using CSS columns */}
//       <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="break-inside-avoid bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-md hover:shadow-xl transition-shadow duration-300"
//           >
//             <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//             <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturesSection;



import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Fast Performance",
    description:
      "Our app is lightning fast and optimized for all devices. Experience seamless performance even under heavy loads, ensuring your users never face delays. With advanced caching and optimized rendering, every action feels instantaneous.",
  },
  {
    title: "Secure Data",
    description:
      "We protect your sensitive data with top-tier encryption, secure authentication, and compliance with industry standards like GDPR and HIPAA. Our security protocols ensure your business and users remain safe from potential threats and breaches.",
  },
  {
    title: "24/7 Support",
    description:
      "Our support team is available around the clock to assist you with any issues, queries, or custom requests. We provide live chat, email, and phone support to ensure your operations run smoothly without interruptions.",
  },
  {
    title: "Customizable",
    description:
      "Easily tailor every feature, layout, and setting to match your business needs. From branding options to workflow adjustments, our platform adapts to your requirements, providing a fully personalized experience for your users.",
  },
  {
    title: "Analytics & Insights",
    description:
      "Gain deep insights into user behavior with detailed analytics dashboards. Track engagement, conversions, and trends to make informed decisions and optimize your strategy for maximum growth and impact.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-center mb-10">
        Why Choose Us
      </h2>

      {/* Masonry container */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="break-inside-avoid bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
