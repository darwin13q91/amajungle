import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";

/**
 * AIGuaranteeSection Component
 *
 * 30-Day "It Works Or You Don't Pay" Guarantee
 * Removes purchase risk and builds trust for the OpenClaw offer.
 */

const guaranteeItems = [
  {
    icon: "🤖",
    text: "Run at least 1 successful automation per day",
  },
  {
    icon: "⏱️",
    text: "Save you a minimum of 5 hours per week",
  },
  {
    icon: "📱",
    text: "Work via Telegram as demonstrated",
  },
];

const ifNotItems = [
  { icon: "💰", text: "Refund 100% of your setup fee" },
  { icon: "🔓", text: "Let you keep the system (open source — you own it)" },
  { icon: "🎓", text: "Give you a free 1-hour consultation on what went wrong" },
];

const AIGuaranteeSection = () => (
  <SectionWrapper id="ai-guarantee" className="ai-guarantee">
    <div className="guarantee-shell">
      <div className="guarantee-badge-large">
        <span className="guarantee-shield">🛡️</span>
        <div>
          <strong>30-Day Guarantee</strong>
          <span>"It Works Or You Don't Pay"</span>
        </div>
      </div>

      <h2 className="guarantee-title">Zero Risk. We Mean It.</h2>
      <p className="guarantee-intro">
        Within 30 days, your AI agent must:
      </p>

      <div className="guarantee-checklist">
        {guaranteeItems.map((item, i) => (
          <div key={i} className="guarantee-check">
            <span className="guarantee-icon">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <div className="guarantee-divider">
        <span>If it doesn't, we will:</span>
      </div>

      <div className="guarantee-refund-list">
        {ifNotItems.map((item, i) => (
          <div key={i} className="guarantee-refund-item">
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <blockquote className="guarantee-why">
        <strong>Why we can offer this:</strong> We've built 47 of these systems. We know it works.
        The only reason it wouldn't work for you is if we misunderstood your use case — and in
        that case, you shouldn't pay.
      </blockquote>

      <div className="guarantee-cta-group">
        <Link to="/contact" className="cta-btn main pulse">
          <span>Book a Free Discovery Call</span>
          <span className="cta-arrow" aria-hidden="true">→</span>
        </Link>
        <Link to="/services" className="cta-btn secondary">
          View All Pricing Options
        </Link>
      </div>
    </div>
  </SectionWrapper>
);

export default AIGuaranteeSection;
