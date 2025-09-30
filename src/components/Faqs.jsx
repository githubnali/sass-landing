import React, { useState } from "react";

// FAQ Data
const faqData = [
  {
    question: "What is your SaaS product about?",
    answer:
      "Our SaaS product helps modern businesses streamline operations, improve collaboration, and boost productivity efficiently."
  },
  {
    question: "How can I get started?",
    answer:
      "Sign up for a free trial, set up your account, and explore the features. No credit card required initially."
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, we provide 24/7 customer support via chat, email, and phone to help you at every step."
  }
];

// FAQ Item Component
const FAQItem = ({ faq, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;
  return (
    <div
      className={`border-2 border-gray-300 dark:border-gray-700 rounded-lg p-4 mb-4 cursor-pointer transition-all duration-300 ${
        isOpen ? "bg-gray-100 dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"
      }`}
      onClick={() => setOpenIndex(isOpen ? null : index)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">{faq.question}</h3>
        <span className="text-2xl font-bold">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <p className="mt-2 text-gray-700 dark:text-gray-300">{faq.answer}</p>}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Find answers to common questions about our SaaS product.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            index={index}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
