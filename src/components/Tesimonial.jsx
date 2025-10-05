import React from "react";

// Sample testimonials
const testimonials = [
  {
    name: "Alice Johnson",
    company: "TechCorp",
    rating: 5,
    feedback: "This platform has transformed the way we manage our operations!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Michael Smith",
    company: "InnoSoft",
    rating: 4,
    feedback: "Excellent service and easy to use. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Sophia Lee",
    company: "CloudNet",
    rating: 5,
    feedback: "The best SaaS tool we’ve ever used. Saves us hours every week.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "David Kim",
    company: "NextGen Labs",
    rating: 5,
    feedback: "Great features and fantastic support team. Totally worth it!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Olivia Brown",
    company: "BizFlow",
    rating: 4,
    feedback: "Simple, reliable, and scalable. A must-have for growing businesses.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "James Wilson",
    company: "StartX",
    rating: 5,
    feedback: "User-friendly and very efficient. We love using it every day.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Emma Davis",
    company: "FinTech Hub",
    rating: 5,
    feedback: "Outstanding experience, highly intuitive platform.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    name: "Daniel Martinez",
    company: "DataWorks",
    rating: 4,
    feedback: "Solid product with excellent updates and features.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    name: "Ava Taylor",
    company: "BrightSoft",
    rating: 5,
    feedback: "Exactly what our team needed to boost productivity.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    name: "Ethan Johnson",
    company: "FutureTech",
    rating: 5,
    feedback: "Fantastic SaaS tool that keeps getting better over time.",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

// ⭐ rating generator
const renderStars = (count) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < count ? "text-yellow-400" : "text-gray-400"}>
      ★
    </span>
  ));
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900
      bg-gradient-to-b
      from-[rgba(0,255,132,0.04)]
      via-[rgba(0,255,132,0.02)]
      to-[rgba(0,255,132,0.04)]
      dark:from-transparent dark:to-transparent" 
    id="reviews"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Hear from real users about their experience with our SaaS platform.
        </p>
      </div>

      {/* Scrolling Container */}
      <div className="overflow-hidden relative">
        <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused]">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[320px] bg-white dark:bg-gray-800 border border-[#00FF84] rounded-xl p-6 shadow-sm flex-shrink-0"
            >
              {/* Profile */}
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.company}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-3">{renderStars(t.rating)}</div>

              {/* Feedback */}
              <p className="text-gray-700 dark:text-gray-300">{t.feedback}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 40s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default TestimonialsSection;
