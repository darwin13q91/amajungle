import { useState } from 'react';
import SectionWrapper from './SectionWrapper';

/**
 * NewsletterSection Component
 * 
 * Email capture for lead generation
 * Offers the AI Automation Blueprint as lead magnet
 */

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email platform (ConvertKit, ActiveCampaign, etc.)
    console.log('Newsletter signup:', email);
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <SectionWrapper id="newsletter" className="newsletter-section">
      <div className="newsletter-content">
        <span className="section-badge">Free Resource</span>
        <h2 className="section-title">Get the AI Automation Blueprint</h2>
        <p className="section-description">
          The exact 30-day roadmap I use to help sellers save 20+ hours/week 
          and $2,000+/month — delivered to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="newsletter-input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="newsletter-input"
            />
            <button type="submit" className="cta-btn main newsletter-btn">
              Get Free Blueprint →
            </button>
          </div>
          
          {status === 'success' && (
            <p className="newsletter-success">
              ✅ Check your inbox! The blueprint is on its way.
            </p>
          )}
          
          {status === 'error' && (
            <p className="newsletter-error">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
        
        <p className="newsletter-disclaimer">
          No spam. Unsubscribe anytime. Your email is never shared.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default NewsletterSection;
