'use client';

import FeaturesTicker from '@/components/FeaturesTicker';

const productFeatures = [
  { label: "SOURCED FROM", value: "PURE MOUNTAINS", icon: "⛰" },
  { label: "SELECTED", value: "SUPARI", icon: "🌾" },
  { label: "WITH", value: "KESAR GOODNESS", icon: "🌸" },
  { label: "PREMIUM", value: "PAN MASALA", icon: "✨" },
  { label: "TRUSTED BY", value: "CLIENTS WORLDWIDE", icon: "🌍" },
];

const productHighlights = [
  {
    name: "Pan Masala",
    summary: "Aromatic blends crafted with premium ingredients and a refreshing finish.",
    image: "/products/pan-masala.svg",
  },
  {
    name: "Gutka / Chewing Tobacco",
    summary: "Bold, rich flavor profile for consumers who prefer a traditional chew.",
    image: "/products/gutka-chewing-tobacco.svg",
  },
  {
    name: "Surti Tobacco",
    summary: "Distinctive taste and heritage quality inspired by classic Surti traditions.",
    image: "/products/surti-tobacco.svg",
  },
  {
    name: "Tobacco",
    summary: "Carefully sourced and processed for consistency, aroma, and satisfaction.",
    image: "/products/tobacco.svg",
  },
];

const featuredProducts = productHighlights.slice(0, 3);

export default function Home() {
  return (
    <main className="landing-page">
      <header className="site-header">
        <a className="site-brand" href="#top" aria-label="Rautahat Panmasala home">
          <img className="site-brand-mark" src="/logo.svg" alt="Rautahat Panmasala logo" />
          <span>
            <strong>RAUTAHAT</strong>
            <small>PANMASALA UDHYOG</small>
          </span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">Our story</a>
          <a href="#contact">Contact</a>
          <a className="header-product-link" href="/products" target="_blank" rel="noreferrer">
            View products <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <FeaturesTicker />

      <section className="hero-scene" id="top">
        <div className="hero-overlay" />

        <div className="hero-content shell hero-content--clean">
          <div className="hero-art hero-art--minimal" aria-label="Premium pan masala product display" />
        </div>

      </section>

      <section className="highlight-section shell" id="products">
        <div className="section-heading">
          <div>
            <span className="section-label">Our Signature Range</span>
            <h2>Product Highlights</h2>
          </div>
          <p>Traditional quality, crafted for authentic flavor and trusted taste.</p>
        </div>

        <div className="highlight-grid">
          {featuredProducts.map((product) => (
            <a
              key={product.name}
              className="highlight-card"
              href={`/products#${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="highlight-media">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="highlight-image" />
                ) : (
                  <label className="highlight-upload">
                    <input type="file" accept="image/*" aria-label={`Upload photo for ${product.name}`} />
                    <span>Upload Photo</span>
                  </label>
                )}
              </div>
              <h3>{product.name}</h3>
              <p>{product.summary}</p>
              <span className="highlight-view">View product <span aria-hidden="true">↗</span></span>
            </a>
          ))}
        </div>
      </section>

      <section className="gallery-shell shell" aria-label="Product gallery">
        <img src="/product-collage.svg" alt="Product gallery" className="gallery-image" />
      </section>

      <section className="about shell" id="about">
        <div className="about-content">
          <h2>About Rautahat Panmasala</h2>
          <p>
            For generations, Rautahat Panmasala Udhyog Pvt. Ltd. has been committed to delivering the finest quality pan masala blends. 
            Each product is carefully crafted using the purest ingredients sourced from the pristine mountains, ensuring an authentic taste 
            and unmatched aroma that brings moments of joy to our valued customers worldwide.
          </p>
          <p>
            Our dedication to tradition, quality, and trust remains unwavering. We believe in providing excellence in every pack.
          </p>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div className="contact-content">
          <h2>Get in Touch</h2>
          <p>Experience the taste of tradition</p>
          <div className="contact-buttons">
            <a className="button button-primary" href="mailto:Contact@rautahatpanmasalaudhyog.co.np">Email Us <span>↗</span></a>
            <a className="button button-secondary" href="tel:+977123456789">Call Us <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content shell">
          <div className="footer-brand">
            <span className="footer-seal">R</span>
            <div>
              <strong>RAUTAHAT PANMASAL UDHYOG PVT. LTD.</strong>
              <p>TRADITION. QUALITY. TRUST.</p>
            </div>
          </div>
          <div className="footer-links">
            <a href="#top">Back to top</a>
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
