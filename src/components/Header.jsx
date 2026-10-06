import { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { business, whatsappUrl } from '../data/business'

const links = [
  ['Home', '#home'], ['Services', '#services'], ['About', '#about'],
  ['Areas', '#areas'], ['Contact', '#contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#home" aria-label="Sha'an Electrical home">
          <span className="brand-mark">S</span>
          <span><strong>{business.shortName}</strong><small>Electrical</small></span>
        </a>
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-cta" href={whatsappUrl()}><MessageCircle size={17} /> WhatsApp</a>
        </nav>
        <button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
