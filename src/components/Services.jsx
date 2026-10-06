import { business } from '../data/business'

const groups = [
  ['Residential', business.serviceGroups.residential],
  ['Repairs & Maintenance', business.serviceGroups.repairs],
  ['Commercial', business.serviceGroups.commercial],
]

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-head split-head">
          <div><p className="eyebrow">WHAT WE DO</p><h2>Practical electrical help for homes and small businesses.</h2></div>
          <p>These categories are kept intentionally simple and can be updated as the business's actual service list is confirmed.</p>
        </div>
        <div className="service-groups">
          {groups.map(([label, items]) => (
            <div className="service-group" key={label}>
              <h3>{label}</h3>
              <ul>
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
          <div className="service-support">
            <img src={business.images.local} alt="Typical electrical installation and maintenance work" />
          </div>
        </div>
      </div>
    </section>
  )
}
