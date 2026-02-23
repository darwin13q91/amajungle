import SectionWrapper from '../components/SectionWrapper'
import TeamSection from '../components/TeamSection'
import { Link } from 'react-router-dom'

/**
 * About Page Component
 * 
 * Detailed company information including:
 * - Company mission and vision
 * - Our story and background
 * - Core values and approach
 * - Team expertise and credentials
 * - Why choose us over competitors
 */

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper id="about-hero" className="hero-section about-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            About <span className="text-gradient">Amajungle</span>
          </h1>
          <p className="hero-subtitle">
            Founder-led team with 10+ years inside the Amazon ecosystem — and an AI Automation 
            Agency built for people who need their business running 24/7, even when they’re offline.
          </p>
          
          <div className="hero-cta-group">
            <Link to="/services" className="cta-btn main">
              <span>Our Services</span>
              <span className="cta-arrow">→</span>
            </Link>
            <Link to="/contact" className="cta-btn secondary">
              <span>Get Started</span>
              <span className="cta-icon">🎯</span>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Company Overview */}
      <SectionWrapper id="company-overview">
        <h2 className="section-title">Who We Are</h2>
        <p className="section-description">
          Amazon professionals with over a decade of hands-on experience, 
          now building a consultancy focused on personal attention and real results.
        </p>
        
        <div className="about-story">
            <p>
              Amajungle started as an Amazon consulting firm — founded by people who spent over a decade 
              inside the marketplace managing accounts, running PPC, and solving catalog problems. 
              We’ve seen what works and what burns money.
            </p>
            <p>
              We’ve since expanded into AI Automation: building OpenClaw-powered agents that handle 
              emails, research, trading, and business workflows 24/7 on your own hardware. 
              Same philosophy — no fluff, real output, founder-led.
            </p>
            <p>
              We’re a small, focused team by design. Every client matters to us, 
              and we bring our full expertise to every engagement.
            </p>
        </div>

        <div className="about-stats-grid">
            <div className="stat-card">
              <h3>47+</h3>
              <p>AI Systems Built</p>
            </div>
            <div className="stat-card">
              <h3>Growing</h3>
              <p>Client Base</p>
            </div>
            <div className="stat-card">
              <h3>Focused</h3>
              <p>On Results</p>
            </div>
            <div className="stat-card">
              <h3>2024</h3>
              <p>Founded</p>
            </div>
            <div className="stat-card">
              <h3>10+ Years</h3>
              <p>Founder Experience</p>
            </div>
        </div>
      </SectionWrapper>

      {/* Meet the Team */}
      <SectionWrapper id="our-team" className="bg-alt">
        <TeamSection />
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper id="mission-vision">
        <div className="mission-vision-grid">
          <div className="mission-card">
            <div className="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To deliver exceptional Amazon consulting services through personal attention, 
              competitive pricing, and an unwavering commitment to client success. 
              We build lasting partnerships based on measurable results.
            </p>
          </div>
          <div className="vision-card">
            <div className="card-icon">🌟</div>
            <h3>Our Vision</h3>
            <p>
              To become the preferred Amazon consulting partner for businesses who value personal 
              attention and results over corporate bureaucracy. We set the standard for 
              service excellence and client success.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper id="core-values">
        <h2 className="section-title">Our Core Values</h2>
        <p className="section-description">
          The principles that drive our company and guide every decision we make 
          to ensure your Amazon success.
        </p>
        
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h4>Personal Attention</h4>
            <p>Every client works directly with our founders. No layers of management, no handoffs to junior staff—just focused expertise dedicated to your success.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">📈</div>
            <h4>Results-Driven</h4>
            <p>We measure success by your success. Every strategy we implement must deliver measurable results that justify your investment and drive real business growth.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🎓</div>
            <h4>Stay Current</h4>
            <p>We're agile and quick to adapt to Amazon's constantly changing landscape. We implement the latest strategies while larger agencies are still catching up.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">💪</div>
            <h4>Committed to Excellence</h4>
            <p>Your success is our reputation. As a growing consultancy, we go above and beyond because every client outcome shapes our future.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🔧</div>
            <h4>Hands-On Expertise</h4>
            <p>We're a small, founder-led team. That means you get direct access to our most experienced people on every project—no bureaucracy.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🚀</div>
            <h4>Agile Execution</h4>
            <p>We move fast and implement quickly. While larger agencies get bogged down in processes, we're already executing your strategies and driving results.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper id="why-choose-us" className="bg-alt">
        <h2 className="section-title">Why Choose Amajungle?</h2>
        <p className="section-description">
          Discover the unique advantages of working with a focused, agile team that's 
          building its reputation through exceptional results and personal attention.
        </p>
        
        <div className="choose-us-grid">
          <div className="choose-card">
            <h4>🏆 Quality-Focused Approach</h4>
            <p>We prioritize quality over quantity. Every client receives dedicated attention and expert-level service that drives real results.</p>
          </div>
          <div className="choose-card">
            <h4>👥 Founder-Led Service</h4>
            <p>Work directly with our founders. No junior staff handling your account—just experienced professionals who are personally invested in your results.</p>
          </div>
          <div className="choose-card">
            <h4>🔄 White-Glove Support</h4>
            <p>As a small, focused team, we provide personal attention that large agencies simply can't match. You're never just a client number to us.</p>
          </div>
          <div className="choose-card">
            <h4>📊 Data-Driven Decisions</h4>
            <p>Every strategy is backed by thorough analysis and market research. We can't afford mistakes, so everything we do is methodical and proven.</p>
          </div>
          <div className="choose-card">
            <h4>⚡ Agile Implementation</h4>
            <p>No corporate red tape or lengthy approval processes. We make decisions fast and implement even faster to get you results quickly.</p>
          </div>
          <div className="choose-card">
            <h4>💰 Competitive Pricing</h4>
            <p>Premium services at competitive rates. We're building our client base with fair pricing that delivers exceptional value for your investment.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Call to Action */}
      <SectionWrapper id="about-cta">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Work with a team that's small enough to care and experienced enough to deliver. Let's talk about how we can help your Amazon business grow.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn main">
              Get Your Free Consultation
              <span className="cta-arrow">→</span>
            </Link>
            <Link to="/services" className="cta-btn secondary">
              See Our Services
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}

export default AboutPage
