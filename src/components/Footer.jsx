import { Link } from 'react-router-dom'
import riscellaLogo from '../assets/riscella-logo.webp'
import { CONTACT, PHONES } from '../data'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand-block">
          <img className="footer-logo" src={riscellaLogo} alt="Riscella Enterprises Limited logo" />
          <div>
            <div className="footer-brand">RISCELLA ENTERPRISES LIMITED</div>
            <p>
              Driven by excellence and customer satisfaction, Riscella is your trusted
              partner in laboratory solutions: analytical reagents, lab instruments,
              glassware, plasticware and safety equipment.
            </p>
          </div>
        </div>

        <nav className="footer-col" aria-label="Quick links">
          <h4>Quick links</h4>
          <Link to="/about">About us</Link>
          <Link to="/products">Our products</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/products#catalogue-downloads">Catalogue downloads</Link>
        </nav>

        <div className="footer-col">
          <h4>Quick contacts</h4>
          {PHONES.map((p) => (
            <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
          ))}
          <a href="https://wa.me/256705728194" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <span>{CONTACT.address}</span>
          <span>Working hours: Mon–Sat, 8:00AM–6:00PM (EAT)</span>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} Riscella Enterprises Limited. All Rights Reserved.</p>
      </div>
    </footer>
  )
}