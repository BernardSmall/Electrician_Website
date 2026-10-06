import { Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { business, whatsappUrl } from '../data/business'

const detail = (Icon, label, value, href) => (
  <div className="contact-row"><Icon size={20}/><div><span>{label}</span>{href ? <a href={href}>{value}</a> : <strong>{value}</strong>}</div></div>
)

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div><p className="eyebrow">CONTACT</p><h2>Tell us about the job.</h2><p className="muted">For the quickest quote, send a short description, your area and a photo of the work if possible.</p></div>
        <div className="contact-details">
          {detail(Phone, 'Phone', business.phoneDisplay, business.phoneHref || null)}
          {detail(MessageCircle, 'WhatsApp', business.phoneDisplay || 'Send a message', whatsappUrl())}
          {detail(Mail, 'Email', business.email, business.email.includes('Add ') ? null : `mailto:${business.email}`)}
          {detail(MapPin, 'Primary area', business.primaryArea)}
          {detail(Clock3, 'Operating hours', business.hours)}
          <p className="placeholder-note">Send us a photo and a short description of the work you need.</p>
        </div>
      </div>
    </section>
  )
}
