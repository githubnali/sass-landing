import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <section className="p-8 text-center">
          <h2 className="text-2xl font-bold">Starter Template</h2>
          <p className="mt-2 text-gray-400">Begin building your landing page here.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App