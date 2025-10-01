import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import TrustedBy from '../components/TrustedBy'
import FeaturesSection from '../components/Features'
import HowItWorks from '../components/HowWorks'
import FAQSection from '../components/Faqs'
import CTASection from '../components/Cta'
import PricingSection from '../components/Pricing'
import TestimonialsSection from '../components/Tesimonial'
import Modal from '../components/Modal'

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/poppins/700.css";


function App() {
  return (
    <div className="font-Inter">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy/>
        <FeaturesSection/>
        <HowItWorks/>
        <PricingSection/>
        <TestimonialsSection/>
        <FAQSection/>
        <CTASection/>
      </main>
      <Modal />
      <Footer />
    </div>
  )
}

export default App