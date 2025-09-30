import React from "react";

const howItWorksData = [
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=150&q=80",
    title: "Step 1: Sign Up",
    description: "Create your account quickly and start exploring the features.",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=150&q=80",
    title: "Step 2: Customize",
    description: "Set up your preferences and configure your dashboard easily.",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=150&q=80",
    title: "Step 3: Enjoy",
    description: "Use all the features to optimize your workflow efficiently.",
    link: "#"
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-white py-16 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Follow these simple steps to get started and make the most of our platform.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {howItWorksData.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow"
          >
            <img src={card.image} alt={card.title} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-300 mb-4">{card.description}</p>
            <a
              href={card.link}
              className="text-blue-400 hover:underline font-medium"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
