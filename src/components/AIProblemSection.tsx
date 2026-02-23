import SectionWrapper from "./SectionWrapper";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * AIProblemSection Component
 *
 * Agitates the pain points of manual busywork that AI should
 * be handling — priming the visitor for the OpenClaw solution.
 */

const painPoints = [
  { icon: "📉", text: "Manually checking Polymarket every morning for new opportunities" },
  { icon: "📋", text: "Copy-pasting product data from Amazon 20 times a day" },
  { icon: "📧", text: "Scheduling the same 5 emails every week" },
  { icon: "🔔", text: "Missing client messages because you're across 6 Slack channels" },
  { icon: "💸", text: "Paying $49/mo for 10 different SaaS tools that barely talk to each other" },
  { icon: "😴", text: "Business grinding to a halt the moment you step offline" },
];

const AIProblemSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <SectionWrapper id="ai-problem" className="ai-problem">
      <div className="section-header">
        <span className="section-badge ai-badge">Sound Familiar?</span>
        <h2 className="section-title">
          You're drowning in busywork that AI should be handling
        </h2>
        <p className="section-description">
          Every hour you spend on repetitive tasks is an hour stolen from what actually moves the needle.
        </p>
      </div>

      <div
        ref={ref}
        className={`pain-points-grid stagger-children ${isVisible ? "visible" : ""}`}
      >
        {painPoints.map((point, idx) => (
          <div key={idx} className="pain-point-card">
            <span className="pain-icon" aria-hidden="true">❌</span>
            <div className="pain-emoji" aria-hidden="true">{point.icon}</div>
            <p>{point.text}</p>
          </div>
        ))}
      </div>

      <div className="problem-cta-wrapper">
        <div className="problem-solution-bridge">
          <div className="bridge-line"></div>
          <div className="bridge-message">
            <span className="bridge-icon">💡</span>
            <strong>What if one AI system could do all of this while you sleep?</strong>
          </div>
          <div className="bridge-line"></div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AIProblemSection;
