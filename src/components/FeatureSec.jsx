import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Fast Performance",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Our app is lightning fast and optimized for all devices. Experience seamless performance even under heavy loads.",
    list: [
      "Optimized rendering for instant feedback",
      "Minimal load times for all actions",
      "Seamless performance under heavy loads"
    ]
  },
  {
    title: "Secure Data",
    image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "We protect your sensitive data with top-tier encryption, secure authentication, and compliance with industry standards.",
    list: [
      "End-to-end encryption",
      "Secure authentication",
      "Compliance with GDPR and HIPAA"
    ]
  },
  {
    title: "24/7 Support",
    image: "https://images.pexels.com/photos/3184463/pexels-photo-3184463.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Our support team is available around the clock via chat, email, and phone to ensure smooth operations.",
    list: [
      "Live chat, email, and phone support",
      "Assistance for technical and business issues",
      "Quick response time"
    ]
  },
  {
    title: "Customizable",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Tailor every feature, layout, and setting to match your business needs for a fully personalized experience.",
    list: [
      "Branding options",
      "Workflow adjustments",
      "Fully personalized user experience"
    ]
  },
  {
    title: "Analytics & Insights",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Gain deep insights into user behavior with detailed analytics dashboards to optimize strategy and growth.",
    list: [
      "Track user engagement in real-time",
      "Monitor conversion rates and trends",
      "Generate custom reports for key metrics",
      "Identify opportunities for growth and optimization",
      "Export data for offline analysis"
    ]
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900
      bg-gradient-to-b
      from-[rgba(0,255,132,0.04)]
      via-[rgba(0,255,132,0.02)]
      to-[rgba(0,255,132,0.04)]
      dark:from-transparent dark:to-transparent
      " 
    
      id="features">
        <div className="max-w-6xl mx-auto px-4 py-12" id="features">
        <h2 className="font-poppins text-3xl md:text-4xl font-extrabold text-center mb-12 dark:text-white">
            Why Choose Us
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column */}
            <div className="lg:w-3/10 flex flex-col gap-6 h-full">
            {features.slice(0,2).map((feature, index) => (
                <motion.div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md ${index === 0 ? 'flex-1' : 'flex-[2.3]'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                >
                <h3 className="font-semibold text-lg mb-4 dark:text-white">{feature.title}</h3>
                <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full object-cover rounded-md mb-4 h-32 md:h-40"
                />
                <p className="text-gray-600 dark:text-gray-300 mb-2">{feature.description}</p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                    {feature.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                    ))}
                </ul>
                </motion.div>
            ))}
            </div>

            {/* Right Column */}
            <div className="lg:w-7/10 flex flex-col gap-6">
            {/* Top row: 2 equal cards */}
            <div className="flex flex-col md:flex-row gap-6">
                {features.slice(2,4).map((feature, index) => (
                <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md flex-1"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-semibold text-lg mb-4 dark:text-white">{feature.title}</h3>
                    <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full object-cover rounded-md mb-4 h-40 md:h-48"
                    />
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{feature.description}</p>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                    {feature.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                    </ul>
                </motion.div>
                ))}
            </div>

            {/* Bottom row: 1 full-width card */}
            <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md flex flex-col gap-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                {/* Feature title full width */}
                <h3 className="font-semibold text-xl md:text-2xl mb-0 dark:text-white w-full">
                {features[4].title}
                </h3>

                {/* Image and content side by side */}
                <div className="flex flex-col md:flex-row items-stretch gap-6">
                {/* Left: Image */}
                <img
                    src={features[4].image}
                    alt={features[4].title}
                    className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-md flex-shrink-0"
                />

                {/* Right: Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-start">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {features[4].description}
                    </p>

                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                    {features[4].list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                    </ul>
                </div>
                </div>
            </motion.div>

            </div>
        </div>
        </div>

    </section>
  );
};

export default FeaturesSection;
