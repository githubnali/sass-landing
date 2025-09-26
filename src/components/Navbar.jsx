import React from 'react'
import { setTheme, getTheme } from '../lib/theme'

export default function Navbar() {
  const [theme, setLocalTheme] = React.useState(getTheme())

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    setLocalTheme(newTheme)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 flex justify-between items-center px-6 py-3">
      <div className="text-lg font-bold">LOGO</div>
      <div className="flex items-center gap-4">
        <a href="#features" className="hover:underline">Features</a>
        <a href="#pricing" className="hover:underline">Pricing</a>
        <a href="#faq" className="hover:underline">FAQ</a>
        <button onClick={toggleTheme} className="px-3 py-1 border rounded">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}