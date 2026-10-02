import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Icon } from '../icons'
import riscellaLogo from '../assets/riscella-logo.png'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/compliance', label: 'Compliance' },
  { to: '/how-to-order', label: 'How to Order' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="brand" to="/" onClick={closeMenu}>
          <div className="brand-lockup">
            <img className="brand-logo" src={riscellaLogo} alt="Riscella Enterprises Limited logo" />
            <div className="brand-copy">
              <span className="brand-name">RISCELLA</span>
              <span className="brand-ltd">ENTERPRISES LTD</span>
              <span className="brand-tag">EXCEEDING IMAGINATIONS</span>
            </div>
          </div>
        </Link>

        <nav aria-label="Primary">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            <li>
              <Link className="btn btn-teal" to="/contact" onClick={closeMenu}>
                Request a Quote
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>

      <div className={open ? 'wrap mobile-menu open' : 'wrap mobile-menu'}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}

        <Link className="btn btn-teal" to="/contact" onClick={closeMenu}>
          Request a Quote
        </Link>
      </div>
    </header>
  )
}
