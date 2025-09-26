import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-10 mt-10">
      <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      <form className="mt-4 flex justify-center gap-2">
        <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-md border dark:bg-gray-700 dark:border-gray-600" />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Subscribe</button>
      </form>
    </footer>
  )
}