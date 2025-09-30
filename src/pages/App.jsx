import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import TrustedBy from '../components/TrustedBy'
import FeaturesSection from '../components/Features'
import HowItWorks from '../components/HowWorks'
import FAQSection from '../components/Faqs'
import CTASection from '../components/Cta'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy/>
        <FeaturesSection/>
        <HowItWorks/>
        <FAQSection/>
        <CTASection/>
      </main>
      <Footer />
    </div>
  )
}

export default App