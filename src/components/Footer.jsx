import { Link } from 'react-router-dom'
import riscellaLogo from '../assets/riscella-logo.png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand-block">
          <img className="footer-logo" src={riscellaLogo} alt="Riscella Enterprises Limited logo" />
          <div>
            <div className="footer-brand">RISCELLA ENTERPRISES LTD</div>
            <p>Exceeding Imaginations — Kampala, Uganda</p>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/compliance">Compliance</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <p>© {new Date().getFullYear()} Riscella Enterprises Limited</p>
      </div>
    </footer>
  )
}
