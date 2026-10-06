import { ArrowUpRight, Phone } from 'lucide-react'
import { business, whatsappUrl } from '../data/business'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">LOCAL ELECTRICAL SERVICES</p>
          <h1>Local electrical services for homes and businesses.</h1>
          <p className="hero-intro">Residential and commercial electrical work, local service, and clear communication. Send a quick WhatsApp message and we’ll let you know the next step.</p>
          <div className="button-row">
            <a className="btn btn-primary" href={whatsappUrl()}>WhatsApp for a Quote <ArrowUpRight size={18}/></a>
            <a className="btn btn-secondary" href={business.phoneHref || '#contact'}><Phone size={17}/> Call Us</a>
          </div>
          <div className="trust-line" aria-label="Service types"><span>Residential</span><i></i><span>Commercial</span><i></i><span>Repairs</span><i></i><span>Installations</span></div>
        </div>
        <div className="hero-media">
          <img src={business.images.hero} alt="Electrician working carefully on an electrical distribution board" />
          <div className="hero-note"><span>Need electrical work?</span><strong>Send a photo on WhatsApp.</strong></div>
        </div>
      </div>
    </section>
  )
}
