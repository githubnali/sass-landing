import React from "react";

const features = [
  { title: "Feature 1", lines: 3 },
  { title: "Feature 2", lines: 2 },
  { title: "Feature 3", lines: 2 },
  { title: "Feature 4", lines: 4 },
  { title: "Feature 5", lines: 6 },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12">
          Features / Benefits <span className="text-gray-400">(Why Choose Us)</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 border-neutral-800 rounded-xl p-6 shadow-md"
            >
              <h3 className="text-lg font-medium mb-4">{feature.title}</h3>
              <div className="space-y-2">
                {Array.from({ length: feature.lines }).map((_, i) => (
                  <div
                    key={i}
                    className="h-2 bg-neutral-700 rounded animate-pulse w-[90%]"
                    style={{ width: `${80 + (i % 2) * 10}%` }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
