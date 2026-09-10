import Link from 'next/link';

const products = [
  {
    id: 'pan-masala',
    name: 'Pan Masala',
    summary: 'Aromatic blends crafted with premium ingredients and a refreshing finish.',
    image: '/products/pan-masala.svg',
  },
  {
    id: 'gutka-chewing-tobacco',
    name: 'Gutka / Chewing Tobacco',
    summary: 'Bold, rich flavor profile for consumers who prefer a traditional chew.',
    image: '/products/gutka-chewing-tobacco.svg',
  },
  {
    id: 'surti-tobacco',
    name: 'Surti Tobacco',
    summary: 'Distinctive taste and heritage quality inspired by classic Surti traditions.',
    image: '/products/surti-tobacco.svg',
  },
  {
    id: 'tobacco',
    name: 'Tobacco',
    summary: 'Carefully sourced and processed for consistency, aroma, and satisfaction.',
    image: '/products/tobacco.svg',
  },
  {
    id: 'classic-blend',
    name: 'Classic Blend',
    summary: 'A warm, familiar blend made for an easy and balanced everyday experience.',
    image: '/products/classic-blend.svg',
  },
  {
    id: 'royal-premium',
    name: 'Royal Premium',
    summary: 'A richer, celebratory blend with a smooth finish and unmistakable character.',
    image: '/products/royal-premium.svg',
  },
  {
    id: 'elaichi-fresh',
    name: 'Elaichi Fresh',
    summary: 'A bright cardamom-led blend that brings a clean, refreshing note to every chew.',
    image: '/products/elaichi-fresh.svg',
  },
];

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
          <span className="products-intro-count">07 signatures</span>
        </div>
        <h1>Find your familiar.</h1>
        <p>Distinctive blends, considered ingredients, and a taste shaped by tradition. Discover the collection.</p>
      </section>

      <section className="products-grid shell" aria-label="All products">
        {products.map((product, index) => (
          <article className="product-page-card" id={product.id} key={product.id}>
            <div className="product-page-media">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-page-copy">
              <span className="product-number">0{index + 1}</span>
              <h2>{product.name}</h2>
              <p>{product.summary}</p>
            </div>
          </article>
        ))}
      </section>

      <footer className="footer">
        <div className="footer-content shell">
          <div className="footer-brand">
            <img className="footer-seal" src="/logo.svg" alt="Rautahat Panmasala logo" />
            <div>
              <strong>RAUTAHAT PANMASAL UDHYOG PVT. LTD.</strong>
              <p>TRADITION. QUALITY. TRUST.</p>
            </div>
          </div>
          <div className="footer-links">
            <Link href="#top">Back to top</Link>
          </div>
          <p className="footer-copy">
            <span>&copy; 2026 Rautahat Panmasal Udhyog Pvt. Ltd. All rights reserved.</span>
            <span className="footer-credit">Created by Pulsesoftx Pvt. Ltd. (BB)</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
