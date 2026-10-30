# Riscella multi-page React migration

This package contains the multi-page structure for the existing Riscella Vite/React site.

## 1. Install
From your existing project root:

npm install react-router-dom

## 2. Copy these files
Copy the contents of this package's `src/App.jsx`, `src/components/`, and `src/pages/`
into the matching locations in your existing project.

Do NOT replace your existing:
- src/data.js
- src/icons.jsx
- src/assets/
- existing CSS files

The new pages intentionally continue using the existing data exports and CSS class names.

## 3. Routes
/
 /about
 /products
 /solutions
 /compliance
 /how-to-order
 /contact

## 4. Important
The old IntersectionObserver in App.jsx is no longer needed because each section is now a real route.

The existing data-driven arrays such as CATEGORIES, BRANDS, CLIENTS, REGULATORY,
ADVANTAGES, STEPS, VALUES and TARGET_SECTORS remain the source of the corresponding
content.

## 5. Development
npm run dev

## 6. Hosting and RFQ submissions
The built site is hosting-provider neutral. Any static host can serve the Vite
build, provided it supports SPA fallback to `index.html` for routes such as
`/products` and `/contact`.

The repository includes a `_redirects` file for hosts such as Netlify and a
GitHub Pages `404.html` fallback. Other static hosts should configure their
equivalent rewrite from the listed application routes to `index.html`.

The RFQ form works without a form vendor by opening the visitor's email client.
If the selected attachment should be uploaded automatically, set
`VITE_RFQ_ENDPOINT` to a serverless or form-processing endpoint before building:

```powershell
$env:VITE_RFQ_ENDPOINT = "https://your-form-endpoint.example/submit"
npm run build
```

The endpoint must accept a `POST` multipart form request. Do not put private
API keys in `VITE_` variables because Vite exposes them to the browser.
