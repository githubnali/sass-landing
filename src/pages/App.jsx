import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import FeaturesSection from '../components/FeatureSec'
import HowItWorks from '../components/HowWorks'
import FAQSection from '../components/Faqs'
import CTASection from '../components/Cta'
import PricingSection from '../components/Pricing'
import TestimonialsSection from '../components/Tesimonial'
import Modal from '../components/Modal'
import ScrollToTopButton from '../components/ScrollTop'
import ComplianceSection from '../components/Compliance'


import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/poppins/700.css";


function App() {
  useEffect (() => {
    window.history.replaceState(null, "", window.location.pathname);
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="font-Inter">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection/>
        <HowItWorks/>
        <ComplianceSection/>
        <PricingSection/>
        <TestimonialsSection/>
        <FAQSection/>
        <CTASection/>
      </main>
      <Modal />
      <Footer />
      <ScrollToTopButton/>
    </div>
  )
}

export default App