import { Link } from 'react-router-dom'
import riscellaLogo from '../assets/riscella-logo.png'

export default function PageHero({ eyebrow, title, text,  backgroundImage, action = true }) {
  return (
    <section className="page-hero">
      <img
        className="page-hero-image"
        src={backgroundImage}
        alt=""
      />
      <div className="page-hero-overlay" />
      <div className="wrap page-hero-inner">
        <div className="page-hero-brand">
          <img className="page-hero-logo" src={riscellaLogo} alt="Riscella Enterprises Limited logo" />
        </div>
        {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {text ? <p>{text}</p> : null}

        {action ? (
          <div className="hero-actions">
            <Link className="btn btn-teal" to="/contact">
              Request a Quote
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  )
}
