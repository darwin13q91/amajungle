import SectionWrapper from "./SectionWrapper";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * AIHowItWorksSection Component
 *
 * Walks the visitor through the 4-step OpenClaw setup and usage flow,
 * showing real Telegram conversation examples and the autonomous
 * daily schedule the agent runs on.
 */

const steps = [
  {
    number: "01",
    icon: "🎯",
    title: "Choose Your Contexts",
    description: "Pick 1–6 specialized agent modes tailored to how you work.",
    items: [
      { icon: "🦞", label: "Trading", desc: "Polymarket, crypto tracking" },
      { icon: "👤", label: "Personal", desc: "Tasks, calendar, health" },
      { icon: "💼", label: "Business", desc: "Email, clients, projects" },
      { icon: "📦", label: "Amazon", desc: "Products, inventory, AWS" },
      { icon: "💻", label: "WebDev", desc: "Code, GitHub, deployments" },
      { icon: "🔬", label: "Research", desc: "Web scraping, summaries" },
    ],
  },
  {
    number: "02",
    icon: "⚙️",
    title: "We Build It For You",
    description: "48-hour white-glove setup. You provide API keys — we handle everything else.",
    items: [
      { icon: "🖥️", label: "Configured agent", desc: "On your laptop or VPS" },
      { icon: "📱", label: "Telegram bot", desc: "Connected to your phone" },
      { icon: "⏰", label: "Automations", desc: "Running on schedule" },
      { icon: "🔗", label: "Skills integrated", desc: "GitHub, Gmail, and more" },
    ],
  },
  {
    number: "03",
    icon: "📱",
    title: "Control Everything via Telegram",
    description: "Text your AI like a smart assistant. It actually does things.",
    conversation: [
      {
        you: "Switch to trading mode. Show top Polymarket opportunities.",
        bot: "📊 Scanning markets… Found 3 high-edge opportunities:\n• Election 2026: 72% yes at $0.64 (edge: +8%)\n• BTC >80K by Q2: 61% yes at $0.55 (edge: +6%)\n• Fed cut June: 48% yes at $0.44 (edge: +4%)",
      },
      {
        you: "Switch to business mode. Draft a proposal for John.",
        bot: "✅ Using your proposal template. Pulling John's project notes… Proposal ready — review it here: [link]",
      },
    ],
  },
  {
    number: "04",
    icon: "🔄",
    title: "It Runs 24/7 on Autopilot",
    description: "Your agent keeps working even when you're offline, asleep, or at sea.",
    schedule: [
      { time: "8:45 AM", task: "Scans overnight news, flags trading opportunities" },
      { time: "9:00 AM", task: "Reviews your calendar, sends daily brief" },
      { time: "2:00 PM", task: "Checks Amazon inventory, alerts low stock" },
      { time: "11:30 PM", task: "End-of-day report with tomorrow's priorities" },
    ],
  },
];

const AIHowItWorksSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <SectionWrapper id="ai-how-it-works" className="ai-how-it-works">
      <div className="section-header">
        <span className="section-badge ai-badge">How It Works</span>
        <h2 className="section-title">Your Personal AI Command Center</h2>
        <p className="section-description">
          Built on OpenClaw — the same technology used by crypto traders, e-commerce sellers,
          agencies, and developers shipping work 3× faster.
        </p>
      </div>

      {/* Steps */}
      <div
        ref={ref}
        className={`how-it-works-steps stagger-children ${isVisible ? "visible" : ""}`}
      >
        {steps.map((step) => (
          <div key={step.number} className="hiw-step">
            <div className="hiw-step-header">
              <span className="hiw-step-number">{step.number}</span>
              <span className="hiw-step-icon">{step.icon}</span>
              <div>
                <h3 className="hiw-step-title">{step.title}</h3>
                <p className="hiw-step-desc">{step.description}</p>
              </div>
            </div>

            {/* Context grid */}
            {step.items && (
              <div className="hiw-items-grid">
                {step.items.map((item, i) => (
                  <div key={i} className="hiw-item">
                    <span className="hiw-item-icon">{item.icon}</span>
                    <strong>{item.label}</strong>
                    <span>{item.desc}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Telegram conversation mockup */}
            {step.conversation && (
              <div className="telegram-mockup">
                <div className="telegram-header">
                  <span className="telegram-dot"></span>
                  <span className="telegram-name">🤖 OpenClaw Agent</span>
                  <span className="telegram-status">● Online</span>
                </div>
                {step.conversation.map((msg, i) => (
                  <div key={i} className="telegram-exchange">
                    <div className="telegram-bubble you">{msg.you}</div>
                    <div className="telegram-bubble bot">{msg.bot}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Daily schedule */}
            {step.schedule && (
              <div className="daily-schedule">
                {step.schedule.map((item, i) => (
                  <div key={i} className="schedule-item">
                    <span className="schedule-time">{item.time}</span>
                    <span className="schedule-task">{item.task}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AIHowItWorksSection;
