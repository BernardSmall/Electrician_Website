import { Quote } from 'lucide-react'
import { business } from '../data/business'

export default function Reviews() {
  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <div className="section-head split-head"><div><p className="eyebrow">REVIEWS</p><h2>Real feedback belongs here.</h2></div><p>We won't invent customer testimonials. These demo slots are clearly marked until genuine reviews are provided.</p></div>
        <div className="demo-label">DEMO CONTENT — REPLACE BEFORE PUBLISHING</div>
        <div className="reviews-grid">
          {business.reviews.map((review, i) => <blockquote key={i}><Quote size={24}/><p>“{review.quote}”</p><footer><strong>{review.name}</strong><span>{review.source}</span></footer></blockquote>)}
        </div>
      </div>
    </section>
  )
}
