import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * ServicesPricingSection Component
 *
 * Three-tier Amazon service bundles:
 *   Tier 1 — Starter     $799 one-time
 *   Tier 2 — Growth      $1,899/month   (highlighted)
 *   Tier 3 — Scale       Custom
 */

interface ServiceTier {
  id: string;
  badge?: string;
  icon: string;
  name: string;
  price: string;
  priceNote: string;
  anchor: string;
  tagline: string;
  features: string[];
  cta: string;
  ctaLink: string;
  highlighted?: boolean;
}

const tiers: ServiceTier[] = [
  {
    id: "starter",
    icon: "🚀",
    name: "Starter",
    price: "$799",
    priceNote: "one-time",
    anchor: "Perfect for new & relaunching Amazon sellers",
    tagline: "Get your Amazon presence built right from day one",
    features: [
      "FBA account setup & configuration",
      "5 product listings fully optimized",
      "Keyword research & backend SEO",
      "Basic PPC campaign setup",
      "Brand protection fundamentals",
      "Launch strategy guide",
      "60-day email support",
      "30-day satisfaction guarantee",
    ],
    cta: "Get Started — $799",
    ctaLink: "/contact",
  },
  {
    id: "growth",
    badge: "Most Popular",
    icon: "📈",
    name: "Growth",
    price: "$1,899",
    priceNote: "/ month",
    anchor: "Save $700+/mo vs hiring services individually",
    tagline: "Ongoing management to accelerate your Amazon sales",
    features: [
      "Everything in Starter, plus:",
      "PPC campaign management & optimization",
      "Account health monitoring & compliance",
      "Inventory & supply chain management",
      "15 product listings maintained",
      "Monthly performance reports",
      "Brand protection & monitoring",
      "90-day priority support",
      "Bi-weekly strategy check-ins",
      "30-day satisfaction guarantee",
    ],
    cta: "Get Started — $1,899/mo",
    ctaLink: "/contact",
    highlighted: true,
  },
  {
    id: "scale",
    icon: "🏆",
    name: "Scale",
    price: "Custom",
    priceNote: "tailored to you",
    anchor: "For high-volume sellers & established brands",
    tagline: "Full-service Amazon management at enterprise level",
    features: [
      "Everything in Growth, plus:",
      "Unlimited product listings",
      "Dedicated account manager",
      "Account reinstatement support",
      "Advanced competitor analysis",
      "Custom reporting & analytics",
      "Priority support with 4-hr response",
      "Quarterly strategy sessions",
      "Custom integrations & workflows",
      "30-day satisfaction guarantee",
    ],
    cta: "Let's Talk — Free Consultation",
    ctaLink: "/contact",
  },
];

const ServicesPricingSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <SectionWrapper id="services-pricing" className="bg-alt">
      <div className="section-header">
        <span className="section-badge">Amazon Pricing</span>
        <h2 className="section-title">Simple, Bundled Pricing</h2>
        <p className="section-description">
          Choose a package that fits your stage — or{" "}
          <Link to="/contact" style={{ color: "var(--primary)", fontWeight: 600 }}>
            contact us
          </Link>{" "}
          for a custom quote on individual services.
        </p>
      </div>

      <div
        ref={ref}
        className={`pricing-tiers stagger-children ${isVisible ? "visible" : ""}`}
      >
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`pricing-card ${tier.highlighted ? "pricing-card--highlighted" : ""}`}
          >
            {tier.badge && <div className="pricing-badge">{tier.badge}</div>}

            <div className="pricing-header">
              <span className="pricing-icon">{tier.icon}</span>
              <h3 className="pricing-name">{tier.name}</h3>
              <div className="pricing-price">
                <span className="pricing-amount">{tier.price}</span>
                <span className="pricing-period">{tier.priceNote}</span>
              </div>
              <p className="pricing-anchor">"{tier.anchor}"</p>
              <p className="pricing-tagline">{tier.tagline}</p>
            </div>

            <div className="pricing-features">
              <h4>What's Included:</h4>
              <ul>
                {tier.features.map((f, i) => (
                  <li key={i}>
                    <span className="feature-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pricing-footer">
              <Link to={tier.ctaLink} className={`cta-btn ${tier.highlighted ? "main" : "secondary"}`}>
                <span>{tier.cta}</span>
                <span className="cta-arrow">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="pricing-note">
        <p>
          💬 <strong>Need just one service?</strong> All Amazon services are also available
          individually — starting from $149. <Link to="/services">View individual pricing →</Link>
        </p>
      </div>
    </SectionWrapper>
  );
};

export default ServicesPricingSection;
