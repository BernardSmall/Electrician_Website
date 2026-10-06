import { business, whatsappUrl } from '../data/business'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="brand footer-brand"><span className="brand-mark">S</span><span><strong>{business.shortName}</strong><small>Electrical</small></span></div>
        <div className="footer-links"><a href="#services">Services</a><a href="#about">About</a><a href="#areas">Areas</a><a href="#contact">Contact</a></div>
        <div className="footer-contact"><a href={whatsappUrl()}>WhatsApp</a><span>{business.phoneDisplay}</span><span>{business.primaryArea}</span></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Sha'an Electrical</span><span>Local electrical services</span></div>
    </footer>
  )
}
