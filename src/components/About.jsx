import { business } from '../data/business'

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-media"><img src={business.images.about} alt="Close-up of electrical work inside a switchboard"/></div>
        <div className="about-copy">
          <p className="eyebrow">ABOUT SHA'AN ELECTRICAL</p>
          <h2>A local electrical service for practical work and honest communication.</h2>
          <p>Sha'an Electrical is focused on straightforward electrical work for homes and small businesses. The aim is simple: clear communication, practical advice, and a quote before the job starts.</p>
          <p>This section can be expanded later with the owner’s story, qualifications, and local experience once those details are confirmed.</p>
          <div className="about-rule"><span>01</span><p>Send through the job details or a photo.</p></div>
          <div className="about-rule"><span>02</span><p>Get clear feedback and a quotation.</p></div>
          <div className="about-rule"><span>03</span><p>Arrange a time that works for the job.</p></div>
        </div>
      </div>
    </section>
  )
}
