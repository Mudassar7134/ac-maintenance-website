import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import CtaBand from './components/CtaBand'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

// ============================================================
// التطبيق الرئيسي — موقع صيانة المكيفات (عربي / RTL)
// ============================================================

export default function App() {
  return (
    <div className="relative min-h-screen font-body text-frost">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <WhyUs />
        <HowItWorks />
        <CtaBand />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
