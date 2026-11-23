import { CLIENTS, MARKET_SOLUTION_CARDS, SECTORS } from '../data'
import { Link } from 'react-router-dom'
import { Icon } from '../icons'
import PageHero from '../components/PageHero'
import solutionImg from '../assets/equip.jpg'

export default function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Market Solutions"
        title="Scientific supply solutions for mission-critical environments."
        text="Our supply model is designed around the technical, documentation, and operational requirements of laboratories, manufacturers, research institutions, and higher education."
        backgroundImage={solutionImg}
      />

      <section className="section">
        <div className="wrap">
          <p className="section-kicker">Sectors We Serve</p>
          <h2 className="heading-lg">Market-specific solutions</h2>

          <div className="market-solution-grid">
            {MARKET_SOLUTION_CARDS.map((solution) => (
              <article className="market-solution-card" key={solution.title}>
                <div className="market-solution-icon"><Icon name={solution.icon} size={24} /></div>
                <h3>{solution.title}</h3>
                <p>{solution.desc}</p>
                <Link className="btn btn-teal" to="/contact#rfq">{solution.action}</Link>
              </article>
            ))}
          </div>

          <div className="sectors">
            {SECTORS.map((sector) => (
              <article className="sector-card" key={sector.title}>
                <Icon name={sector.icon} />
                <h3>{sector.title}</h3>
                <p>{sector.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <p className="section-kicker">Strategic Portfolio</p>
          <h2 className="heading-lg">Strategic client portfolio &amp; success highlights</h2>
          <p className="lede">
            An approved technical supply partner for prominent, high-capacity
            pharmaceutical manufacturing and healthcare production operations
            across East Africa.
          </p>

          <div className="clients">
            {CLIENTS.map((client) => (
              <article className="client" key={client.name}>
                <h4>
                  <Icon name="building" size={18} />
                  {client.name}
                </h4>
                <p>{client.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
