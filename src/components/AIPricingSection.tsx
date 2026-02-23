import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * AIPricingSection Component
 *
 * Three-tier pricing for OpenClaw AI Automation:
 *   Tier 1 — Autopilot Starter      $497 one-time
 *   Tier 2 — Business Command Center $1,497 one-time
 *   Tier 3 — Enterprise Autopilot    $4,997 + $297/mo
 */

interface PricingTier {
  id: string;
  badge?: string;
  icon: string;
  name: string;
  price: string;
  priceNote: string;
  anchor: string;
  timeline: string;
  tagline: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const tiers: PricingTier[] = [
  {
    id: "starter",
    icon: "🤖",
    name: "Autopilot Starter",
    price: "$497",
    priceNote: "one-time",
    anchor: "",
    timeline: "48-hour setup",
    tagline: "Get your AI assistant running in 48 hours",
    features: [
      "OpenClaw installation on your laptop or VPS",
      "1 specialized context of your choice",
      "Telegram bot — control from your phone",
      "5 custom automation workflows (cron jobs)",
      "Secured API key file (chmod 600)",
      "30-minute onboarding video call",
      "Written usage & troubleshooting docs",
      "7-day email support",
    ],
    cta: "Get Started — $497",
  },
  {
    id: "business",
    badge: "Most Popular",
    icon: "🦾",
    name: "Business Command Center",
    price: "$1,497",
    priceNote: "one-time",
    anchor: "Replaces a $2,000/mo VA — runs 24/7 for a one-time fee",
    timeline: "5–7 day setup",
    tagline: "Run your entire operation through one AI agent",
    features: [
      "Everything in Starter, plus:",
      "3 specialized contexts configured (your choice)",
      "20 custom automation workflows",
      "Multi-context switching ('Switch to business mode')",
      "Tailscale secure remote access",
      "Skills integration — GitHub, Google Workspace, Slack, Gmail",
      "Custom workspace organization",
      "60-minute strategy + onboarding session",
      "2 follow-up optimization calls (first 30 days)",
      "30-day priority support (4-hour response)",
    ],
    cta: "Get Started — $1,497",
    highlighted: true,
  },
  {
    id: "enterprise",
    icon: "🚀",
    name: "Enterprise Autopilot",
    price: "$4,997",
    priceNote: "+ $297/month support",
    anchor: "Replaces 2–3 VAs ($6K/mo) + saves 20+ hours/week",
    timeline: "7–14 day setup",
    tagline: "White-glove setup + ongoing optimization",
    features: [
      "Everything in Business Command Center, plus:",
      "All 6 contexts fully configured & integrated",
      "Custom skill development (we build what you need)",
      "50+ automation workflows",
      "Team access for up to 5 Telegram users",
      "Unlimited tool integrations (Zapier, Make, custom APIs)",
      "Monthly performance reports",
      "Quarterly strategy sessions",
      "Dedicated Slack channel",
      "Ongoing system maintenance & new automations",
      "Priority support (4-hour SLA)",
    ],
    cta: "Get Started — $4,997",
  },
];

const AIPricingSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <SectionWrapper id="ai-pricing" className="ai-pricing">
      <div className="section-header">
        <span className="section-badge ai-badge">Pricing</span>
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-description">
          One-time setup fee. You own the system. No recurring SaaS fees, no vendor lock-in.
        </p>
      </div>

      {/* Pricing Cards */}
      <div
        ref={ref}
        className={`pricing-tiers stagger-children ${isVisible ? "visible" : ""}`}
      >
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`pricing-card ${tier.highlighted ? "pricing-card--highlighted" : ""}`}
          >
            {tier.badge && (
              <div className="pricing-badge">{tier.badge}</div>
            )}

            <div className="pricing-header">
              <span className="pricing-icon">{tier.icon}</span>
              <h3 className="pricing-name">{tier.name}</h3>
              <div className="pricing-price">
                <span className="pricing-amount">{tier.price}</span>
                <span className="pricing-period">{tier.priceNote}</span>
              </div>
              {tier.anchor && (
                <p className="pricing-anchor">"{tier.anchor}"</p>
              )}
              <div className="pricing-timeline">
                <span className="timeline-icon">⏱</span>
                {tier.timeline}
              </div>
              <p className="pricing-tagline">{tier.tagline}</p>
            </div>

            <div className="pricing-features">
              <h4>What's Included:</h4>
              <ul>
                {tier.features.map((f, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact"
              className={`cta-btn ${tier.highlighted ? "main pulse" : "secondary"} pricing-cta`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Discovery Call CTA */}
      <div className="pricing-discovery">
        <h3>Not sure which tier is right for you?</h3>
        <p>Book a free 15-minute discovery call. We'll review your workflows, identify your top 3 automation opportunities, and show you exactly how your AI system would work — no pressure.</p>
        <Link to="/contact" className="cta-btn main">
          <span>Book a Free Discovery Call</span>
          <span className="cta-arrow" aria-hidden="true">→</span>
        </Link>
      </div>

    </SectionWrapper>
  );
};

export default AIPricingSection;
