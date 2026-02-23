import SectionWrapper from "./SectionWrapper";

/**
 * AboutSection Component - Value Proposition & Trust Building
 * 
 * Communicates founder expertise and unique selling points:
 * - Direct founder access vs agency layers
 * - Launch pricing incentive (40% off)
 * - 30-day satisfaction guarantee
 * - Limited founding client spots (5)
 */

const AboutSection = () => (
  <SectionWrapper id="about" className="about">
    <div className="about-header">
      <span className="section-badge">Why Amajungle</span>
      <h2 className="section-title">Experienced Amazon Professionals, Fresh Consultancy</h2>
      <p className="about-intro">
        Our founders have spent 10+ years working inside the Amazon ecosystem—managing 
        seller accounts, running PPC campaigns, and scaling brands. Now we've built 
        Amajungle to bring that hands-on expertise directly to you, with introductory 
        pricing and founder-level attention.
      </p>
    </div>
      
    <div className="about-content">
      <div className="amazon-expertise featured-card">
        <div className="expertise-icon">🎯</div>
        <div className="expertise-content">
          <h3>What You're Actually Getting</h3>
          <p>
            <strong>Hands-On Founders:</strong> We've spent years building and scaling Amazon brands 
            from the ground up—managing complete account ecosystems and developing strategies 
            that drive sustainable growth. Now that expertise works directly for you, 
            without the agency markup or layers of account managers.
          </p>
        </div>
      </div>

      <div className="benefits-grid" role="list">
        <div className="benefit-item" role="listitem">
          <span className="benefit-icon" aria-hidden="true">📊</span>
          <div className="benefit-content">
            <strong>Catalog Problem-Solving</strong>
            <p>We identify and fix critical issues within your product catalog—from suppressed listings to policy violations. You work directly with us, not a junior account manager.</p>
          </div>
        </div>
        
        <div className="benefit-item" role="listitem">
          <span className="benefit-icon" aria-hidden="true">🔍</span>
          <div className="benefit-content">
            <strong>Inventory & Listing Management</strong>
            <p>End-to-end coordination with manufacturers, suppliers, and 3PLs to ensure seamless operations. Plus SEO-optimized listings that rank and convert.</p>
          </div>
        </div>
        
        <div className="benefit-item" role="listitem">
          <span className="benefit-icon" aria-hidden="true">📦</span>
          <div className="benefit-content">
            <strong>Fast Execution</strong>
            <p>No corporate approval processes or endless meetings. We make decisions and implement immediately.</p>
          </div>
        </div>
        
        <div className="benefit-item" role="listitem">
          <span className="benefit-icon" aria-hidden="true">🎯</span>
          <div className="benefit-content">
            <strong>Personal Attention</strong>
            <p>We're selective about who we work with. Your success directly builds our reputation, so you get our full focus.</p>
          </div>
        </div>
        
        <div className="benefit-item highlight" role="listitem">
          <span className="benefit-icon" aria-hidden="true">💰</span>
          <div className="benefit-content">
            <strong>Introductory Pricing</strong>
            <p>Special rates for early clients while we build our portfolio. Get premium service at startup-friendly prices.</p>
          </div>
        </div>
        
        <div className="benefit-item highlight" role="listitem">
          <span className="benefit-icon" aria-hidden="true">🛡️</span>
          <div className="benefit-content">
            <strong>Zero Risk</strong>
            <p>30-day satisfaction guarantee. If you're not happy with the quality of our work, we'll redo it at no extra cost — or refund your fee for any undelivered services.</p>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
