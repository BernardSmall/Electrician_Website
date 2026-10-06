const items = [
  ['Local electrical service', 'A practical local service for homes and small businesses.'],
  ['Clear communication', 'Straightforward updates and simple next steps.'],
  ['Straightforward quotations', 'A clear overview of the work before it starts.'],
  ['Residential and commercial work', 'Support for everyday electrical needs and smaller business spaces.'],
]

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container why-grid">
        <div className="why-title"><p className="eyebrow light">WHY SHA'AN</p><h2>Good electrical service should feel straightforward.</h2></div>
        <div className="why-list">{items.map(([t,d]) => <div className="why-item" key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
      </div>
    </section>
  )
}
