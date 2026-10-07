import Link from 'next/link';

export default function ProductsPage() {
  return (
    <main className="products-page">
      <header className="site-header products-header">
        <div className="products-utility" aria-label="Brand highlights">
          <span><i aria-hidden="true">✦</i> Premium Pan Masala</span>
          <span><i aria-hidden="true">◇</i> Trusted Quality</span>
          <span><i aria-hidden="true">❧</i> Since 1985</span>
        </div>
        <div className="products-nav">
          <Link className="site-brand" href="/">
            <img className="site-brand-mark" src="/logo.svg" alt="Rautahat Panmasala logo" />
            <span>
              <strong>RAUTAHAT</strong>
              <small>PANMASALA UDHYOG</small>
            </span>
          </Link>
          <nav className="products-nav-links" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/#about">About Us</Link>
            <Link className="is-current" href="/products">Products</Link>
            <Link href="/#features">Quality</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <Link className="header-product-link" href="/">
            Back home <span aria-hidden="true">→</span>
          </Link>
        </div>
      </header>

      <section className="products-intro shell">
        <span className="section-label">Our premium products</span>
        <h1>Traditional Taste, Modern Excellence</h1>
        <p>
          Experience the authentic flavors of Rautahat Pan Masala, crafted with the finest ingredients
          for a rich and refreshing taste.
        </p>
        <div className="products-intro-rule" aria-hidden="true"><span>❧</span></div>
      </section>

      <section className="products-showcase shell" aria-label="Rautahat product collection">
        <article className="product-showcase-card product-showcase-card--classic">
          <div className="product-showcase-tag">Classic Blend</div>
          <div className="product-showcase-main">
            <img
              src="/classic-blend.svg"
              alt="Exclusive Taste Manikchand Gautka Classic Blend package"
              className="product-showcase-image"
            />
            <div className="product-showcase-copy">
              <h2>Manikchand<br />Premium</h2>
              <strong>Classic Blend. Timeless Taste.</strong>
              <p>A perfect blend of tradition and quality, bringing you an authentic taste loved for generations.</p>
              <div className="product-card-features">
                <span><i aria-hidden="true">✦</i>Premium<br />Ingredients</span>
                <span><i aria-hidden="true">◉</i>Rich Aroma<br />&amp; Flavor</span>
                <span><i aria-hidden="true">◇</i>Trusted<br />Quality</span>
              </div>
              <a className="product-explore-link" href="mailto:contact@rautahatpanmasalaudhyog.com.np?subject=Classic%20Blend%20inquiry">Explore now <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="product-showcase-signature"><span>Exclusive Taste</span></div>
        </article>
        <article className="product-showcase-card product-showcase-card--premium">
          <div className="product-showcase-tag">Rajshahi Pan Masala</div>
          <div className="product-showcase-main">
            <img
              src="/classic-blend-two.svg"
              alt="Rajshahi Pan Masala product package"
              className="product-showcase-image product-showcase-image--pair"
            />
            <div className="product-showcase-copy">
              <h2>Rajshahi<br />Pan Masala</h2>
              <strong>Premium Blend. Unmatched Freshness.</strong>
              <p>Rajshahi is a perfect combination of rich flavors and premium ingredients, designed to refresh in every bite.</p>
              <div className="product-card-features">
                <span><i aria-hidden="true">✦</i>Premium<br />Blend</span>
                <span><i aria-hidden="true">≈</i>Long Lasting<br />Freshness</span>
                <span><i aria-hidden="true">◇</i>Superior<br />Quality</span>
              </div>
              <a className="product-explore-link" href="mailto:contact@rautahatpanmasalaudhyog.com.np?subject=Rajshahi%20Pan%20Masala%20inquiry">Explore now <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="product-showcase-signature"><span>Rajshahi</span></div>
        </article>
      </section>

      <section className="products-benefits shell" aria-label="Rautahat quality commitments">
        <div><i aria-hidden="true">❧</i><span><strong>100% Natural Ingredients</strong><small>Pure goodness in every pinch</small></span></div>
        <div><i aria-hidden="true">✥</i><span><strong>Premium Quality</strong><small>Crafted with care</small></span></div>
        <div><i aria-hidden="true">➜</i><span><strong>Fast &amp; Reliable Delivery</strong><small>Reaching you nationwide</small></span></div>
        <div><i aria-hidden="true">♥</i><span><strong>Trusted Since 1985</strong><small>A legacy of taste</small></span></div>
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
