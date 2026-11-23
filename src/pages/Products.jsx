
import { CATEGORIES, BRANDS } from '../data'
import { Icon } from '../icons'
import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import product3Img from '../assets/hero.jpg'
import shimadzuLogo from '../assets/brand 1.jpg'
import pallavLogo from '../assets/brand 2.jpg'
import scharlabLogo from '../assets/brand 3.jpg'
import machereyNagelLogo from '../assets/brand 4.jpg'
import biobaseLogo from '../assets/brand 5.jpg'
import qcilLogo from '../assets/brand 6.jpg'
import kpiLogo from '../assets/brand 7.jpg'
import merckLogo from '../assets/brand 8.jpg'
import electrolabLogo from '../assets/brand 9.jpg'
import lobaLogo from '../assets/brand 10.jpg'
import reageconLogo from '../assets/brand 11.jpg'

const brandLogos = [
  { name: 'Merck', image: merckLogo },
  { name: 'Reagecon', image: reageconLogo },
  { name: 'Pallav', image: pallavLogo },
  { name: 'Loba Chemie', image: lobaLogo },
  { name: 'ELECTROLAB', image: electrolabLogo },
  { name: 'KPI', image: kpiLogo },
  { name: 'BIOBASE', image: biobaseLogo },
  { name: 'Scharlab', image: scharlabLogo },
  { name: 'Shimadzu', image: shimadzuLogo },
  { name: 'Macherey-Nagel', image: machereyNagelLogo },
  { name: 'QCIL', image: qcilLogo },
]

const catalogueFiles = [
  {
    title: 'Riscella Product Catalogue',
    description:
      'Explore Riscella Enterprises Limited’s laboratory products, chemicals, consumables, equipment, and scientific portfolios.',
    file: 'Riscella Product Catalogue.pdf',
    type: 'Product Catalogue',
    format: 'Interactive PDF',
    size: '3.0 MB',
    version: 'v2026.4',
    action: 'Download Chemical & Laboratory Catalogue (PDF)',
    secondary: 'Request Pricing for this Line',
    note: 'All listed items are backed by lot-specific Certificates of Analysis (CoA) and Safety Data Sheets (SDS).',
  },
  {
    title: 'Riscella Company Profile',
    description:
      'Learn about Riscella Enterprises Limited, its business capabilities, product portfolios, and commitment to serving laboratories and industries.',
    file: 'Riscella Company Profile.pdf',
    type: 'Company Profile',
    format: 'Print-Ready Company Profile',
    size: '7.9 MB',
    version: 'v2026.2',
    action: 'Download Company Profile (PDF)',
    secondary: 'Request a Company Profile Quote',
    note: 'Review our capabilities, supply model, and institutional procurement support.',
  },
  {
    title: 'Industrial Safety & Protective Equipment',
    description:
      'Medical-grade gloves, splash protection, respirators, cleanroom apparel, eye protection, and safety equipment reviewed for EN/CE-compliant applications.',
    file: 'Riscella Product Catalogue.pdf',
    type: 'Safety Equipment Guide',
    format: 'Full Illustrated Guide',
    size: '3.0 MB',
    version: 'v2026.1',
    action: 'Download Safety Guide (PDF)',
    secondary: 'Request Wholesale Safety Pricing',
    note: 'EN/CE compliance ratings should be confirmed against the exact manufacturer part number.',
  },
]

export default function Products() {
  const cataloguePath = `${import.meta.env.BASE_URL}catalogues/`

  return (
    <>
      <PageHero
        eyebrow="Brands & Products"
        title="Core laboratory products and scientific portfolios."
        text="High-grade chemicals, analytical reagents, laboratory consumables, protective equipment, and specialized standards for research and industrial quality environments."
        backgroundImage={product3Img}
      />

      <section className="section paper products-section">
        <div className="wrap products-content">
          <p className="section-kicker">Product Categories</p>
          <h2 className="heading-lg">Core product categories</h2>

          <div className="categories-timeline">
            {CATEGORIES.map((cat, index) => (
              <div
                className={`category-timeline-item ${
                  index % 2 === 0 ? 'timeline-left' : 'timeline-right'
                }`}
                key={cat.name}
              >
                <div className="timeline-dot">
                  <span />
                </div>

                <div className="category-card">
                  <div className="category-card-header">
                    <div className="category-icon">
                      <Icon name={cat.icon} />
                    </div>
                    <h3>{cat.name}</h3>
                  </div>

                  <p className="category-range">
                    <strong>Range:</strong> {cat.range}
                  </p>

                  <p className="category-applications">
                    <strong>Applications:</strong> {cat.applications}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="note">
            <strong>Custom formulations:</strong> Custom reagent formulations
            can be prepared strictly according to your specific production
            line Standard Operating Procedures (SOPs).
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="section-kicker">Global Portfolios</p>
          <h2 className="heading-lg">Authorized brands &amp; global portfolios</h2>

          <div className="brand-logo-grid" aria-label="Authorized brand logos">
            {brandLogos.map((brand) => (
              <div className="brand-logo-card" key={brand.name}>
                <img src={brand.image} alt={`${brand.name} logo`} />
              </div>
            ))}
          </div>

          <div className="brand-cards">
            {BRANDS.map((brand) => (
              <article className="brand-card" key={brand.name}>
                <h3>
                  {brand.name} {brand.sub}
                </h3>
                <p>{brand.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue downloads */}
      <section
        className="section paper catalogue-downloads"
        id="catalogue-downloads"
      >
        <div className="wrap">
          <p className="section-kicker">Resources & Downloads</p>
          <h2 className="heading-lg">Explore our catalogues</h2>
          <p>
            Download our product catalogue and company profile to learn more
            about Riscella Enterprises Limited and its offerings.
          </p>

          <div className="catalogue-grid">
            {catalogueFiles.map((catalogue) => (
              <article className="catalogue-card" key={catalogue.title}>
                <div className="catalogue-icon">
                  <Icon name="file-text" />
                </div>

                <p className="catalogue-type">{catalogue.type}</p>
                <h3>{catalogue.title}</h3>
                <p>{catalogue.description}</p>
                <dl className="catalogue-meta">
                  <div><dt>Format</dt><dd>{catalogue.format}</dd></div>
                  <div><dt>File size</dt><dd>{catalogue.size}</dd></div>
                  <div><dt>Latest version</dt><dd>{catalogue.version}</dd></div>
                </dl>
                <p className="catalogue-note">{catalogue.note}</p>
                <div className="catalogue-actions">
                  <a
                    className="catalogue-download-link"
                    href={`${cataloguePath}${encodeURIComponent(catalogue.file)}`}
                    download={catalogue.file}
                    aria-label={`${catalogue.action}; ${catalogue.size}`}
                  >
                    <Icon name="download" />
                    {catalogue.action}
                  </a>
                  <Link className="catalogue-quote-link" to="/contact#rfq">
                    {catalogue.secondary}
                  </Link>
                </div>
              </article>
            ))}
          </div>

                    <div className="how-to-pdf">
            <h3>Three simple steps to secure your bulk quotation</h3>
            <ol>
              <li><strong>Open the PDF</strong> and find your SKU, CAS number or part number.</li>
              <li><strong>Compile your manifest:</strong> quantities, sizes and delivery frequency.</li>
              <li><strong>Paste or upload it</strong> in our RFQ form. We reply within 24 business hours.</li>
            </ol>
            <Link className="btn btn-teal" to="/contact#rfq">Go to the Request for Quote form</Link>
          </div>

          <p className="direct-import">
            <strong>Direct authorized importing:</strong> Riscella imports listed materials directly
            from authorized global manufacturers, so every catalogue item maps to authentic factory batches.
          </p>
        </div>
      </section>
    </>
  )
}
