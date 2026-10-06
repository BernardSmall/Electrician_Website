import { ArrowUpRight, Phone } from 'lucide-react'
import { business, whatsappUrl } from '../data/business'

export default function QuoteCTA() {
  return (
    <section className="quote-section">
      <div className="container quote-inner">
        <div><p className="eyebrow light">GET A QUOTE</p><h2>Need an electrician?</h2><p>Tell us what you need and we'll get back to you.</p></div>
        <div className="button-row"><a className="btn btn-primary" href={whatsappUrl()}>Get a quote on WhatsApp <ArrowUpRight size={18}/></a><a className="btn btn-dark-outline" href={business.phoneHref || '#contact'}><Phone size={17}/> Call Sha'an Electrical</a></div>
      </div>
    </section>
  )
}
