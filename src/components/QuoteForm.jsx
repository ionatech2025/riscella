import { useState } from 'react'

const categories = [
  'Chemical Reagents & Media',
  'Laboratory Consumables (Plasticware/Glassware)',
  'Safety Gear / PPE & Cold-Chain Sensitive Products',
  'Heavy Lab Equipment & Hardware',
]

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  async function onSubmit(event) {
    event.preventDefault()
    setSubmitError('')

    try {
      const form = event.currentTarget
      const response = await fetch('/', {
        method: 'POST',
        body: new FormData(form),
      })

      if (!response.ok) {
        throw new Error(`RFQ submission failed with status ${response.status}`)
      }

      setSubmitted(true)
    } catch (error) {
      console.error('Unable to submit RFQ form.', error)
      setSubmitError('We could not submit your RFQ. Please email the technical desk or try again.')
    }
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <h3>RFQ received</h3>
        <p>
          Thank you. Your request has been assigned to a technical procurement
          specialist. A formal quotation and lead-time analysis will be
          generated within 24 business hours.
        </p>
      </div>
    )
  }

  return (
    <form
      className="form rfq-form"
      name="b2b-rfq"
      method="POST"
      data-netlify="true"
      encType="multipart/form-data"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="b2b-rfq" />

      <fieldset className="form-panel">
        <legend>Corporate &amp; vetting credentials</legend>
        <div className="form-two-column">
          <div className="field-group">
            <label htmlFor="rfq-name">Full name</label>
            <input id="rfq-name" name="name" type="text" placeholder="e.g. Sarah Jenkins" required />
          </div>
          <div className="field-group">
            <label htmlFor="rfq-email">Corporate email address</label>
            <input id="rfq-email" name="email" type="email" placeholder="name@institution.org" required />
            <small>Please use your institutional or company domain.</small>
          </div>
          <div className="field-group">
            <label htmlFor="rfq-company">Company / institution name</label>
            <input id="rfq-company" name="company" type="text" placeholder="e.g. Apex Diagnostic Laboratories Ltd" required />
          </div>
          <div className="field-group">
            <label htmlFor="rfq-sector">Industry / sector</label>
            <select id="rfq-sector" name="sector" required defaultValue="">
              <option value="" disabled>Select your sector</option>
              <option>Clinical &amp; Pathology Diagnostics</option>
              <option>Industrial Chemical / Advanced Manufacturing</option>
              <option>Pharmaceutical / Biotech Production</option>
              <option>Higher Education &amp; Academic Research</option>
              <option>Other / Government Agency</option>
            </select>
          </div>
        </div>
      </fieldset>

      <fieldset className="form-panel">
        <legend>Manifest &amp; requirements</legend>
        <div className="field-group">
          <span className="field-label">Inventory categories needed</span>
          <div className="checkbox-grid">
            {categories.map((category) => (
              <label className="checkbox-label" key={category}>
                <input type="checkbox" name="categories" value={category} />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="field-group">
          <label htmlFor="rfq-requirements">Itemized requirements &amp; SKUs</label>
          <textarea
            id="rfq-requirements"
            name="requirements"
            rows="5"
            placeholder="List part numbers, manufacturers, grades (e.g. Analytical, USP), and required quantities."
            required
          />
        </div>
        <div className="field-group">
          <label className="upload-field" htmlFor="rfq-attachment">
            <span className="upload-icon">+</span>
            <span><strong>Attach your procurement spreadsheet, RFQ, or BOM</strong><small>.pdf, .xlsx, .csv, .docx - maximum 10MB</small></span>
          </label>
          <input id="rfq-attachment" name="attachment" type="file" accept=".pdf,.xlsx,.csv,.docx" />
        </div>
      </fieldset>

      <fieldset className="form-panel">
        <legend>Logistics &amp; procurement framework</legend>
        <div className="form-two-column">
          <div className="field-group">
            <span className="field-label">Requested delivery timeline</span>
            <label className="radio-label"><input type="radio" name="timeline" value="Urgent / Critical" required /> Urgent / Critical</label>
            <label className="radio-label"><input type="radio" name="timeline" value="Standard Net 30 Days" /> Standard Net 30 days</label>
            <label className="radio-label"><input type="radio" name="timeline" value="Routine Stock" /> Routine stock / standing order</label>
          </div>
          <div className="field-group">
            <span className="field-label">Temperature / specialized handling</span>
            <label className="radio-label"><input type="radio" name="handling" value="Cold-chain required" required /> Yes, cold-chain mandatory</label>
            <label className="radio-label"><input type="radio" name="handling" value="Ambient storage" /> No, ambient storage is acceptable</label>
          </div>
          <div className="field-group">
            <label htmlFor="rfq-payment">Preferred payment / billing terms</label>
            <select id="rfq-payment" name="payment" required defaultValue="">
              <option value="" disabled>Select payment terms</option>
              <option>Corporate Purchase Order (PO) Processing</option>
              <option>Net 30 Days Invoicing</option>
              <option>Net 60 Days Invoicing</option>
              <option>Advance T/T / Cash Before Delivery</option>
            </select>
          </div>
        </div>
      </fieldset>

      <button className="btn btn-teal" type="submit">Submit Official RFQ</button>
      {submitError ? <p className="form-status form-error" role="alert">{submitError}</p> : null}
    </form>
  )
}
