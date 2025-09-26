import React from 'react'

export default function Hero() {
  return (
    <section className="text-center py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-bold">Get Instant Vendor Quotations</h1>
      <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
        Connect contractors with trusted vendors and manage all your quotations in one dashboard.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Get Started</button>
        <button className="px-6 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">Book a Demo</button>
      </div>
    </section>
  )
}