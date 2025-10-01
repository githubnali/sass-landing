import React from "react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-[#00CC84] to-[#009966] text-white rounded-xl md: my-16 shadow-lg max-w-5xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-Inter">
          Start Your Free Trial Today!
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Experience the power of our SaaS solution and elevate your business effortlessly.
        </p>
        <a
          href="#"
          className="inline-block bg-[#00CC84] text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-[#009966] transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CTASection;
