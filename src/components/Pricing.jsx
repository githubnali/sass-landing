import React from "react";

const plans = [
  {
    name: "Basic",
    price: 19,
    features: [
      "5 Projects",
      "10 GB Storage",
      "Basic Support",
      "Community Access",
      "5 Projects",
      "10 GB Storage",
      "Basic Support",
      "Community Access"

    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: 49,
    features: [
      "50 Projects",
      "100 GB Storage",
      "Priority Support",
      "Advanced Analytics",
      "50 Projects",
      "100 GB Storage",
      "Priority Support",
      "Advanced Analytics"

    ],
    highlighted: true, // Highlight middle one
  },
  {
    name: "Pro",
    price: 99,
    features: [
      "Unlimited Projects",
      "1 TB Storage",
      "Dedicated Support",
      "Custom Integrations",
      "Unlimited Projects",
      "1 TB Storage",
      "Dedicated Support",
      "Custom Integrations"

    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Pricing & Plans
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Choose the plan that fits your needs. Upgrade anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl border-2 p-8 flex flex-col justify-between transition-transform duration-300 ${
              plan.highlighted
                ? "border-[#00FF84] bg-white dark:bg-gray-800 scale-105 shadow-xl"
                : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            }`}
          >
            {/* Plan Header */}
            <h3
              className={`text-2xl font-semibold mb-4 ${
                plan.highlighted
                  ? "text-[#00FF84]"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              {plan.name}
            </h3>
            <p className="text-4xl font-bold text-gray-900 dark:text-white">
              ${plan.price}
              <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
                /month
              </span>
            </p>

              {/* CTA Button */}
            <div className="my-8">
              <a
                href="#"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition ${
                  plan.highlighted
                    ? "bg-[#00FF84] text-black hover:bg-[#00FF84]"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                Get Started
              </a>
            </div>

            {/* Features */}
            <ul className="space-y-3 flex-1">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <span className="mr-2 text-[#00FF84]">✔</span> {feature}
                </li>
              ))}
            </ul>

          
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
