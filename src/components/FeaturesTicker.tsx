'use client';

const productFeatures = [
  { label: "TRUSTED BY", value: "CLIENTS WORLDWIDE", icon: "🌍" },
  { label: "SOURCED FROM", value: "PURE MOUNTAINS", icon: "⛰" },
  { label: "SELECTED", value: "SUPARI", icon: "🌾" },
  { label: "WITH", value: "KESAR GOODNESS", icon: "🌸" },
  { label: "PREMIUM", value: "PAN MASALA", icon: "✨" },
];

export default function FeaturesTicker() {
  // Double the array for seamless scrolling
  const extendedFeatures = [...productFeatures, ...productFeatures];

  return (
    <div className="features-ticker">
      <div className="features-ticker-inner">
        {extendedFeatures.map((feature, index) => (
          <div key={index} className="ticker-feature-item">
            <span className="ticker-feature-icon">{feature.icon}</span>
            <span className="ticker-feature-text">
              {feature.label} <strong>{feature.value}</strong>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
