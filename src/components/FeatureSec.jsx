import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Everything in One Dashboard",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "See appointments, patients updates and key stats—all in one clean view.",
  },
  {
    title: "All Records in One Place",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Store and access prescriptions, reports, and patient notes instantly.",
  },
  {
    title: "Easy Scheduling",
    image:
      "https://images.pexels.com/photos/3184463/pexels-photo-3184463.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Book, edit or cancel appointments in just a few clicks with a clear calendar view.",
  },
  {
    title: "Safe and Private",
    image:
      "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Your clinic’s data is encrypted and secure, following healthcare privacy standards.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-16" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
          Why Choose Us
        </h2>

        <p class="text-gray-600 mt-2 max-w-xl mx-auto text-center dark:text-white">Built to simplify your workflow and accelerate your growth with seamless efficiency.</p>

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* Card 1 - 70% */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex-1 basis-[70%] overflow-hidden"
          >
            <div className="p-6 flex items-center justify-center h-56
              bg-gradient-to-b
            from-[rgba(0,255,132,0.08)]
            via-[rgba(0,255,132,0.04)]
            to-[rgba(0,255,132,0.08)]
              dark:from-transparent dark:to-transparent">
              <img
                src={features[0].image}
                alt={features[0].title}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {features[0].title}
              </h3>
              <p className="text-gray-600 text-sm">{features[0].description}</p>
            </div>
          </motion.div>

          {/* Card 2 - 30% */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition flex-1 basis-[30%] overflow-hidden"
          >
            <div className="
              p-6 flex items-center justify-center h-56
              bg-gradient-to-b
            from-[rgba(0,255,132,0.08)]
            via-[rgba(0,255,132,0.04)]
            to-[rgba(0,255,132,0.08)]
              dark:from-transparent dark:to-transparent
              ">
              <img
                src={features[1].image}
                alt={features[1].title}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {features[1].title}
              </h3>
              <p className="text-gray-600 text-sm">{features[1].description}</p>
            </div>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Card 3 - 40% */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition flex-1 basis-[40%] overflow-hidden"
          >
            <div className="
              p-6 flex items-center justify-center h-56
              bg-gradient-to-b
            from-[rgba(0,255,132,0.08)]
            via-[rgba(0,255,132,0.04)]
            to-[rgba(0,255,132,0.08)]
              dark:from-transparent dark:to-transparent">
              <img
                src={features[2].image}
                alt={features[2].title}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {features[2].title}
              </h3>
              <p className="text-gray-600 text-sm">{features[2].description}</p>
            </div>
          </motion.div>

          {/* Card 4 - 60% */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition flex-1 basis-[60%] overflow-hidden"
          >
            <div className="p-6 flex items-center justify-center h-56
              bg-gradient-to-b
            from-[rgba(0,255,132,0.08)]
            via-[rgba(0,255,132,0.04)]
            to-[rgba(0,255,132,0.08)]
              dark:from-transparent dark:to-transparent">
              <img
                src={features[3].image}
                alt={features[3].title}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {features[3].title}
              </h3>
              <p className="text-gray-600 text-sm">{features[3].description}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
