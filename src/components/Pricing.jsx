import React, { useState } from "react";
import { Check } from "lucide-react"; // Make sure lucide-react is installed

const plans = [
  {
    name: "Basic",
    price: 19,
    features: [
      "5 Projects",
      "10 GB Storage",
      "Basic Support",
      "Community Access",
      "Email Notifications",
      "Basic Analytics",
      "Customizable Dashboard",
      "Mobile Access",
      "Single User",
      "Limited Integrations"
    ],
  },
  {
    name: "Standard",
    price: 49,
    features: [
      "50 Projects",
      "100 GB Storage",
      "Priority Support",
      "Advanced Analytics",
      "Team Collaboration",
      "Custom Branding",
      "API Access",
      "Multiple Users",
      "Advanced Integrations",
      "Regular Backups"
    ],
  },
  {
    name: "Pro",
    price: 99,
    features: [
      "Unlimited Projects",
      "1 TB Storage",
      "Dedicated Support",
      "Custom Integrations",
      "Enterprise Analytics",
      "Role-based Access",
      "SLA Uptime Guarantee",
      "Priority Feature Requests",
      "Advanced Security",
      "Premium Reports"
    ],
  },
];

const PricingSection = () => {
  // Default active plan index is 1 (middle card)
  const [activePlan, setActivePlan] = useState(1);

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-100 dark:bg-gray-900" id="pricing">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Pricing & Plans
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Choose the plan that fits your needs. Upgrade anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => {
          const isActive = activePlan === index;
          return (
            <div
              key={index}
              onClick={() => setActivePlan(index)}
              className={`rounded-xl border-2 p-8 flex flex-col justify-between cursor-pointer transition-transform duration-300 ${
                isActive
                  ? "border-[#00FF84] bg-white dark:bg-gray-800 scale-110 shadow-xl"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              }`}
            >
              {/* Plan Header */}
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  isActive
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
                    isActive
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
                    <Check className="w-4 h-4 mr-2 text-[#00FF84]" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingSection;
