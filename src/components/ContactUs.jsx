import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "+91",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-8 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 w-full">
          <div className="max-w-lg">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Email, call, or complete the form to learn how we can solve your
              problem.
            </p>

            <div className="text-gray-700 dark:text-gray-300 space-y-2 mb-8">
              <p>
                <a
                  href="mailto:info@snappy.io"
                  className="text-blue-600 hover:underline"
                >
                  sass@info.io
                </a>
              </p>
              <p>321-221-231</p>
              <a
                href="#"
                className="underline text-blue-600 font-medium"
              >
                Customer Support
              </a>
            </div>

            {/* Support Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700 dark:text-gray-300 mb-10">
              <div>
                <h4 className="font-semibold mb-1">Customer Support</h4>
                <p>
                  Our support team is available around the clock to address any
                  concerns or queries.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Feedback & Suggestions</h4>
                <p>
                  We value your feedback and continuously work to improve our
                  services.
                </p>
              </div>
            </div>
              <div>
                <h4 className="font-semibold mb-1">Media Inquiries</h4>
                <p>
                  For media or press questions, contact us at
                  media@snappyapp.com.
                </p>
              </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-1/2 w-full flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md"
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              Get in Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              You can reach us anytime.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="border rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="border rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-md p-3 w-full mb-4 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600"
            />

            <div className="flex gap-2 mb-4">
              <select
                name="phoneCode"
                value={formData.phoneCode}
                onChange={handleChange}
                className="border rounded-md p-3 w-24 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600"
              >
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
                <option>+62</option>
              </select>
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <textarea
              name="message"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
              className="border rounded-md p-3 w-full h-28 mb-6 focus:ring-2 focus:ring-blue-500 outline-none resize-none dark:bg-gray-700 dark:border-gray-600"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#00FF84] text-black font-semibold py-2 rounded-lg transition"
            >
              Submit
            </button>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
              By contacting us, you agree to our{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
