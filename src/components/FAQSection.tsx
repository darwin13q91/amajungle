import SectionWrapper from "./SectionWrapper";
import { useToggleArray } from "../hooks/useToggleArray";
import CTAGroup from "./CTAGroup";

const FAQSection = () => {
  // Use custom hook for toggle functionality
  const { openItems, toggleItem } = useToggleArray();

  // FAQ data array for easier management
  const faqData = [
    // === AI AUTOMATION (OpenClaw) ===
    {
      question: "Do I need to know how to code?",
      answer: "Nope. We set everything up for you. You control it via Telegram like texting a smart assistant.",
      tag: "AI"
    },
    {
      question: "Does it run in the cloud or on my own hardware?",
      answer: "Your hardware — laptop or VPS. You own the data. No recurring cloud fees.",
      tag: "AI"
    },
    {
      question: "Is my data secure?",
      answer: "Yes. Everything runs on YOUR hardware. API keys stored in encrypted env files. Optional Tailscale for zero-trust remote access.",
      tag: "AI"
    },
    {
      question: "Can I upgrade tiers later?",
      answer: "Yes. Pay the difference to upgrade anytime.",
      tag: "AI"
    },
    {
      question: "What's the real cost to run this?",
      answer: "Setup is one-time. Ongoing costs are only your API keys — roughly $10–20/mo in LLM usage. No SaaS subscriptions.",
      tag: "AI"
    },
    // === AMAZON SERVICES ===
    {
      tag: "Amazon",
      question: "How long does it take to see results?",
      answer: "30–60 days for existing listings. 90–120 days for new product launches."
    },
    {
      tag: "Amazon",
      question: "What's the minimum PPC budget?",
      answer: "We recommend $1,000–$2,000/month to gather meaningful data and stay competitive. Varies by category."
    },
    {
      tag: "Amazon",
      question: "Can you handle account suspensions?",
      answer: "Yes. We do root cause analysis, write the appeal, develop the Plan of Action, and follow through until the account is reinstated."
    },
    {
      tag: "Amazon",
      question: "What's included in listing optimization?",
      answer: "Keyword research, title, bullet points, descriptions, A+ content, backend keywords, and image recommendations."
    },
    {
      tag: "Amazon",
      question: "Do you work with brand new sellers?",
      answer: "Yes. We handle end-to-end setup — account creation, Brand Registry, first listings, launch strategy, and PPC."
    }
  ];

  const aiItems = faqData.filter(item => item.tag === "AI");
  const amazonItems = faqData.filter(item => item.tag === "Amazon");
  const aiOffset = 0;
  const amazonOffset = aiItems.length;

  const renderFaqGroup = (items: typeof faqData, offset: number) =>
    items.map((item, idx) => {
      const index = offset + idx;
      return (
        <li key={index} className={`faq-item ${openItems.includes(index) ? 'open' : ''}`}>
          <button
            className="faq-question"
            onClick={() => toggleItem(index)}
            aria-expanded={openItems.includes(index)}
            aria-controls={`faq-answer-${index}`}
          >
            <strong>{item.question}</strong>
            <span className="faq-toggle-icon">
              {openItems.includes(index) ? '−' : '+'}
            </span>
          </button>
          <div
            id={`faq-answer-${index}`}
            className="faq-answer"
          >
            <p>{item.answer}</p>
          </div>
        </li>
      );
    });

  return (
    <SectionWrapper id="faq" className="faq">
      <div className="section-header">
        <span className="section-badge">FAQ</span>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-description faq-intro">
          Everything you need to know before getting started.
        </p>
      </div>

      {/* AI Automation FAQs */}
      <div className="faq-group">
        <div className="faq-group-header">
          <span className="faq-group-icon">🤖</span>
          <h3>AI Automation (OpenClaw)</h3>
        </div>
        <ul className="faq-list">
          {renderFaqGroup(aiItems, aiOffset)}
        </ul>
      </div>

      {/* Amazon Services FAQs */}
      <div className="faq-group">
        <div className="faq-group-header">
          <span className="faq-group-icon">📦</span>
          <h3>Amazon Services</h3>
        </div>
        <ul className="faq-list">
          {renderFaqGroup(amazonItems, amazonOffset)}
        </ul>
      </div>
      
      <CTAGroup
        buttons={[
          { href: "/contact", text: "Ask Your Question" },
          { href: "/contact", text: "Schedule Expert Consultation", variant: "secondary" }
        ]}
      />
    </SectionWrapper>
  );
};

export default FAQSection;