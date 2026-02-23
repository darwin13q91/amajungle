import SectionWrapper from "./SectionWrapper";
import CTAGroup from "./CTAGroup";

const TestimonialsSection = () => (
  <SectionWrapper id="why-trust-us" className="testimonials">
    <h2>Why Trust a New Consultancy?</h2>
    <p className="testimonials-intro">
      Fair question. Here's why working with us is a smart bet—even as a new agency.
    </p>
    
    <div className="coming-soon-content">
      <div className="placeholder-card">
        <div className="placeholder-icon">🎓</div>
        <h4>10+ Years in the Amazon Ecosystem</h4>
        <p>Our founders have spent over a decade working inside the Amazon marketplace—managing seller accounts, running ad campaigns, and solving complex catalog issues before launching Amajungle.</p>
      </div>
      
      <div className="placeholder-card">
        <div className="placeholder-icon">💰</div>
        <h4>Introductory Pricing</h4>
        <p>We're building our client portfolio, which means you get experienced, founder-led service at rates well below what established agencies charge for the same work.</p>
      </div>
      
      <div className="placeholder-card">
        <div className="placeholder-icon">🛡️</div>
        <h4>Zero-Risk Guarantee</h4>
        <p>30-day satisfaction guarantee. No long-term contracts. If you're not happy with our work quality, we'll redo it at no cost or refund fees for undelivered services.</p>
      </div>

      <div className="placeholder-card">
        <div className="placeholder-icon">⚡</div>
        <h4>Direct Founder Access</h4>
        <p>No account managers or junior staff. You work directly with our founders—experienced Amazon professionals who are personally invested in your results.</p>
      </div>

      <div className="placeholder-card">
        <div className="placeholder-icon">🎯</div>
        <h4>Your Success = Our Reputation</h4>
        <p>As a new consultancy, every client outcome matters. We're building our reputation one success story at a time, so you get our absolute best effort.</p>
      </div>
      
      <div className="placeholder-card">
        <div className="placeholder-icon">📊</div>
        <h4>Battle-Tested Strategies</h4>
        <p>The strategies we use aren't theoretical—they're the same approaches our founders applied successfully throughout their careers in the Amazon ecosystem.</p>
      </div>
    </div>
    
    <CTAGroup
      className="testimonials-cta"
      title="Ready to Work With Us?"
      buttons={[
        { href: "/contact", text: "Get Your Free Consultation" },
        { href: "/services", text: "See Our Pricing", variant: "secondary" }
      ]}
    />
  </SectionWrapper>
);

export default TestimonialsSection;