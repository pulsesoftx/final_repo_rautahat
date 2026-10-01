import Link from 'next/link';

export default function ProductsPage() {
  return (
    <main className="products-page">
      <header className="site-header products-header">
        <Link className="site-brand" href="/">
          <img className="site-brand-mark" src="/logo.svg" alt="Rautahat Panmasala logo" />
          <span>
            <strong>RAUTAHAT</strong>
            <small>PANMASALA UDHYOG</small>
          </span>
        </Link>
        <Link className="header-product-link" href="/">
          Back home <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section className="products-intro shell">
        <div className="products-intro-meta">
          <span className="section-label">The Rautahat collection</span>
        </div>
        <h1>Coming soon.</h1>
        <p>
          Please wait for updates. For inquiries, contact us at{' '}
          <a href="mailto:contact@rautahatpanmasalaudhyog.com.np">contact@rautahatpanmasalaudhyog.com.np</a>.
        </p>
      </section>

      <footer className="footer">
        <div className="footer-content shell">
          <div className="footer-brand">
            <img className="footer-seal" src="/logo.svg" alt="Rautahat Panmasala logo" />
            <div>
              <strong>RAUTAHAT PAN MASALA UDHYOG PVT.LTD</strong>
              <p>TRADITION. QUALITY. TRUST.</p>
            </div>
          </div>
          <div className="footer-links">
            <Link href="#top">Back to top</Link>
          </div>
          <p className="footer-copy">
            <span>&copy; 2026 Rautahat Panmasal Udhyog Pvt. Ltd. All rights reserved. (BB)</span>
            <span className="footer-credit">Created by Pulsesoftx Pvt. Ltd.</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
