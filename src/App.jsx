import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import ServiceAreas from './components/ServiceAreas'
import QuoteCTA from './components/QuoteCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <ServiceAreas />
        <QuoteCTA />
        <Contact />
      </main>
      <Footer />
      <a className="mobile-quote" href="#contact" aria-label="Jump to quote and contact section">WhatsApp for a quote</a>
    </>
  )
}
