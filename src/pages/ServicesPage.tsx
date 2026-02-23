import SectionWrapper from '../components/SectionWrapper'
import { Link } from 'react-router-dom'
import { services } from '../config/services'
import ServicesPricingSection from '../components/ServicesPricingSection'

/**
 * Services Page Component
 * 
 * Comprehensive services information including:
 * - Detailed service descriptions (from centralized services.ts)
 * - Pricing information
 * - Process workflows
 * - Package comparisons
 */

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper id="services-hero" className="hero-section services-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Amazon <span className="text-gradient">Services</span>
          </h1>
          <p className="hero-subtitle">
            End-to-end Amazon consulting — account setup, PPC, listing optimization, 
            account health, and brand protection. All founder-led, all guaranteed.
          </p>
          
          <div className="hero-cta-group">
            <button onClick={() => document.getElementById('service-packages')?.scrollIntoView({ behavior: 'smooth' })} className="cta-btn main">
              <span>View Service Packages</span>
              <span className="cta-arrow">→</span>
            </button>
            <Link to="/contact" className="cta-btn secondary">
              <span>Free Consultation</span>
              <span className="cta-icon">💬</span>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Value Proposition */}
      <SectionWrapper id="value-proposition" className="bg-alt">
        <h2 className="section-title">Why Choose Amajungle?</h2>
        <div className="value-benefits">
          <div className="benefit-card">
            <div className="benefit-icon">💰</div>
            <h3>Competitive Pricing</h3>
            <p>Get premium Amazon services at competitive rates. We deliver exceptional results while keeping costs reasonable for businesses of all sizes.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🎯</div>
            <h3>Expert Attention</h3>
            <p>Work directly with experienced Amazon professionals, not junior staff. Every client gets personalized strategies and dedicated support throughout their journey.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">⚡</div>
            <h3>Fast & Responsive</h3>
            <p>No bureaucracy, no delays. We move quickly, adapt to changes, and implement strategies immediately. Your success is our priority, proven through action.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🛡️</div>
            <h3>Results Guarantee</h3>
            <p>30-day satisfaction guarantee on all services. If you're not happy with the quality of our work, we'll redo it at no extra cost or refund your fee for any undelivered services.</p>
          </div>
        </div>
        <div className="guarantee-badge">
          <h4>🏆 Professional Results – Introductory Rates</h4>
          <p>Get experienced, founder-led service without the big-agency price tag!</p>
        </div>
      </SectionWrapper>

      {/* Services Overview */}
      <SectionWrapper id="services-overview">
        <h2 className="section-title">Complete Amazon Solutions</h2>
        <p className="section-description">
          From account setup to advanced optimization, we provide end-to-end Amazon services 
          that help businesses of all sizes succeed in the competitive marketplace.
        </p>
        
        <div className="services-grid">
          {services.filter(s => !s.id.startsWith('openclaw')).map((service) => (
            <div key={service.id} className="service-detail-card">
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <div className="service-meta">
                  <h3>{service.title}</h3>
                  <div className="service-pricing">
                    <span className="price">{service.price}</span>
                    <span className="duration">{service.duration}</span>
                  </div>
                </div>
              </div>
              
              <p className="service-description">{service.description}</p>
              
              <div className="service-details">
                <div className="features-section">
                  <h4>What's Included:</h4>
                  <ul className="features-list">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="process-section">
                  <h4>Our Process:</h4>
                  <ol className="process-list">
                    {service.process.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
                
                <div className="suitable-section">
                  <h4>Perfect For:</h4>
                  <div className="suitable-tags">
                    {service.suitable.map((tag, index) => (
                      <span key={index} className="suitable-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="service-actions">
                <Link to="/contact" className="cta-btn main">
                  <span>Get Started</span>
                  <span className="cta-arrow">→</span>
                </Link>
                <Link to="/contact" className="cta-btn secondary">
                  <span>Learn More</span>
                  <span className="cta-icon">📋</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* AI Automation Callout */}
      <SectionWrapper id="ai-callout" className="bg-alt">
        <div className="cta-content">
          <h2>Need AI Automation as well?</h2>
          <p>We also build 24/7 AI agents that run on your own hardware — handling emails, research, trading, and more via Telegram. Priced from $497, one-time.</p>
          <div className="cta-buttons">
            <Link to="/" className="cta-btn main">
              <span>See AI Automation Plans</span>
              <span className="cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Service Packages */}
      <ServicesPricingSection />

      {/* Process Overview */}
      <SectionWrapper id="service-process">
        <h2 className="section-title">Our Proven Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h4>Discovery & Analysis</h4>
            <p>We analyze your current situation, goals, and challenges to create a customized strategy.</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h4>Strategy Development</h4>
            <p>Our experts develop a comprehensive plan tailored to your specific business needs.</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h4>Implementation</h4>
            <p>We execute the strategy with precision, keeping you informed throughout the process.</p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h4>Optimization</h4>
            <p>Continuous monitoring and optimization ensure sustained growth and improved performance.</p>
          </div>
          <div className="process-step">
            <div className="step-number">5</div>
            <h4>Growth & Scale</h4>
            <p>We help you scale your success with advanced strategies and ongoing support.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper id="services-cta" className="bg-alt">
        <div className="cta-content">
          <h2>Ready to Transform Your Amazon Business?</h2>
          <p>Choose the service that's right for you, or let us create a custom solution for your unique needs.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn main">
              <span>Get Your Free Consultation</span>
              <span className="cta-arrow">→</span>
            </Link>
            <Link to="/contact" className="cta-btn secondary">
              <span>Contact Us</span>
              <span className="cta-icon">📖</span>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}

export default ServicesPage
