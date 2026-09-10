'use client';

import { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: 'Classic Blend',
    image: 'https://images.unsplash.com/photo-1585518419759-1d837b3ec46e?auto=format&fit=crop&w=800&q=80',
    description: 'A warm, familiar blend',
  },
  {
    id: 2,
    name: 'Royal Premium',
    image: 'https://images.unsplash.com/photo-1599599810694-200f3814e3e1?auto=format&fit=crop&w=800&q=80',
    description: 'A richer, celebratory finish',
  },
  {
    id: 3,
    name: 'Elaichi Fresh',
    image: 'https://images.unsplash.com/photo-1577720643272-265f434b4d10?auto=format&fit=crop&w=800&q=80',
    description: 'Bright cardamom freshness',
  },
];

export default function ProductCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => setCurrent((prev) => (prev - 1 + products.length) % products.length);
  const handleNext = () => setCurrent((prev) => (prev + 1) % products.length);

  return (
    <section className="carousel-section" id="carousel">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`carousel-slide ${index === current ? 'active' : ''}`}
                style={{
                  opacity: index === current ? 1 : 0,
                  pointerEvents: index === current ? 'auto' : 'none',
                }}
              >
                <img src={product.image} alt={product.name} className="carousel-image" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
