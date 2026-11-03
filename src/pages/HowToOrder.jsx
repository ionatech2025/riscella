import { Link } from 'react-router-dom'
import { PROCUREMENT_WORKFLOW, STEPS } from '../data'
import { Icon } from '../icons'
import PageHero from '../components/PageHero'
import equipmentImg from '../assets/protectives.jpg'

export default function HowToOrder() {
  return (
    <>
      <PageHero
        eyebrow="How to Order"
        title="A structured, transparent procurement process."
        text="Our four-step procurement framework makes product sourcing seamless, transparent, and audit-ready."
        backgroundImage={equipmentImg}
      />

      <section className="section paper">
        <div className="wrap">
          <div className="steps steps-large">
            {STEPS.map((step) => (
              <article className="step" key={step.n}>
                <div className="n">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>

          <div className="order-details">
            <div>
              <p className="section-kicker">Step 1</p>
              <h2>Request for Quotation (RFQ)</h2>
              <p>
                Submit your required item list, CAS numbers where applicable,
                preferred brand standards, and volume requirements to the
                technical desk.
              </p>
            </div>

            <Link className="btn btn-teal" to="/contact">
              Start an RFQ
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="section-kicker">Delivery</p>
          <h2 className="heading-lg">Compliance-verified delivery</h2>
          <div className="split">
            <p>
              After technical review, an itemized Proforma Invoice can state
              stock availability, lead times, and applicable pricing. Once the
              order is validated, the logistics team prepares the required
              technical compliance package.
            </p>
            <p>
              Orders are dispatched from Kampala facilities with specialized
              cold-chain storage for biologicals where required and TREMCARD
              packaging for hazardous chemicals where applicable, supporting
              direct delivery to the laboratory or store.
            </p>
          </div>
        </div>
      </section>

      <section className="section paper workflow-section">
        <div className="wrap">
          <p className="section-kicker">From submission to dockside delivery</p>
          <h2 className="heading-lg">The Riscella RFQ processing workflow</h2>
          <div className="workflow">
            {PROCUREMENT_WORKFLOW.map((step) => (
              <article className="workflow-step" key={step.phase}>
                <div className="workflow-marker"><Icon name={step.icon} /></div>
                <p className="workflow-phase">{step.phase}</p>
                <h3>{step.title}</h3>
                <p className="workflow-timeline">{step.timeline}</p>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
