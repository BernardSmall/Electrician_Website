import { MapPin, MessageCircle } from 'lucide-react'
import { business, whatsappUrl } from '../data/business'

export default function ServiceAreas() {
  return (
    <section id="areas" className="section areas-section">
      <div className="container areas-grid">
        <div>
          <p className="eyebrow">SERVICE AREAS</p>
          <h2>Working locally, where you need us.</h2>
          <p className="muted">These locations are placeholders until the electrician confirms the exact coverage area.</p>
          <div className="area-list">{business.locations.map((location) => <div key={location}><MapPin size={18}/><span>{location}</span></div>)}</div>
          <p className="area-note">Not sure if we cover your area? Send us a WhatsApp and we'll let you know.</p>
          <a className="text-link" href={whatsappUrl()}><MessageCircle size={17}/> Ask on WhatsApp</a>
        </div>
        <div className="local-image-wrap">
          <img src={business.images.local} alt="Electrical meter and fuse box in Cape Town, South Africa"/>
          <span>Local electrical work</span>
        </div>
      </div>
    </section>
  )
}
