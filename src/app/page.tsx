'use client';

import FeaturesTicker from '@/components/FeaturesTicker';

const productFeatures = [
  { label: "SOURCED FROM", value: "PURE MOUNTAINS", icon: "⛰" },
  { label: "SELECTED", value: "SUPARI", icon: "🌾" },
  { label: "WITH", value: "KESAR GOODNESS", icon: "🌸" },
  { label: "PREMIUM", value: "PAN MASALA", icon: "✨" },
  { label: "TRUSTED BY", value: "CLIENTS WORLDWIDE", icon: "🌍" },
];

export default function Home() {
  return (
    <main className="landing-page">
      <header className="site-header landing-header">
        <a className="site-brand" href="#top" aria-label="Rautahat Panmasala home">
          <img className="site-brand-mark" src="/logo.svg" alt="Rautahat Panmasala logo" />
          <span>
            <strong>RAUTAHAT</strong>
            <small>PANMASALA UDHYOG</small>
          </span>
        </a>
        <nav className="site-nav landing-nav" aria-label="Main navigation">
          <a className="landing-nav-home" href="#top">Home</a>
          <a href="#about">About Us</a>
          <a href="/products">Products</a>
          <a href="#about">Quality</a>
          <a href="#contact">Contact</a>
          <a className="header-product-link" href="/products">
            View products <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <FeaturesTicker />

      <section className="hero-scene" id="top">
        <img
          src="/any.svg"
          alt="Rautahat Pan Masala premium blend with mountain-sourced ingredients, supari, and kesar"
          className="home-hero-image"
        />
      </section>

      <section className="gallery-shell shell" aria-label="Product gallery">
        <img src="/product-collage.svg" alt="Rautahat Panmasala product gallery" className="gallery-image" />
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
            <a className="button button-primary" href="mailto:contact@rautahatpanmasalaudhyog.com.np">Email Us <span>↗</span></a>
          </div>
        </div>
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
            <a href="#top">Back to top</a>
          </div>
          <p className="footer-copy">
            <span>&copy; 2026 Rautahat Panmasal Udhyog Pvt. Ltd. All rights reserved.</span>
            <span className="footer-credit">Powered by Pulsesoftx Pvt. Ltd.</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
