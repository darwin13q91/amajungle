import ContactSection from '../components/ContactSection'
import SectionWrapper from '../components/SectionWrapper'

/**
 * Contact Page Component
 * 
 * Comprehensive contact information including:
 * - Multiple contact methods
 * - Detailed contact form with consultation booking
 * - Office locations and hours
 * - FAQ for common inquiries
 * - Clear next steps for potential clients
 */

const ContactPage = () => {
  const contactMethods = [
    {
      icon: '✉️',
      title: 'Email Consultation',
      description: 'Get detailed responses from our Amazon experts',
      contact: 'hello@amajungle.com',
      availability: 'Response within 24 hours',
      action: 'Send Message'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Quick answers to your immediate questions',
      contact: 'Available on website',
      availability: 'Mon-Fri, 9AM-6PM EST',
      action: 'Start Chat'
    },
    {
      icon: '📅',
      title: 'Video Meeting',
      description: 'Face-to-face consultation via video call',
      contact: 'Zoom/Google Meet',
      availability: 'By appointment',
      action: 'Book Meeting'
    }
  ]

  // Remote-first contact information
  const contactInfo = {
    email: 'hello@amajungle.com',
    responseTime: 'Within 24 hours',
    availability: 'Mon-Fri, 9AM-6PM EST',
    languages: ['English', 'Spanish']
  }

  const faqs = [
    {
      question: 'How quickly can we start working together?',
      answer: 'We\'re incredibly responsive! Most clients can begin within 24-48 hours after our initial consultation. We keep our processes streamlined for faster results.'
    },
    {
      question: 'Why should I choose Amajungle?',
      answer: 'We offer two things most agencies don\'t: 10+ years of hands-on Amazon experience, and a proven AI Automation practice (47 systems built). You get direct founder access, competitive pricing, and a 30-day money-back guarantee on both.'
    },
    {
      question: 'What information do you need to get started?',
      answer: 'We\'ll need access to your Amazon Seller Central account, current product information, business goals, and any existing marketing materials. We\'ll walk you through everything personally during our consultation.'
    },
    {
      question: 'Do you offer guarantees on results?',
      answer: 'We offer a 30-day satisfaction guarantee. If you\'re not happy with the quality of our work, we\'ll redo it at no extra cost or refund your fee for any undelivered services. Work already completed and implemented (listing changes, campaign setup, account modifications) is non-refundable as it provides immediate tangible value.'
    },
    {
      question: 'Can you handle my industry/business size?',
      answer: 'Our founders have experience across multiple Amazon categories including health supplements, home & kitchen, fashion, and electronics. We welcome businesses of all sizes who value personal attention and measurable results.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper id="contact-hero" className="hero-section contact-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="hero-subtitle">
            Whether you need Amazon consulting or an AI agent running your business 24/7 — 
            let’s figure out the right fit for you.
          </p>
          
          <div className="hero-cta-group">
            <button onClick={() => document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' })} className="cta-btn main">
              <span>Start Conversation</span>
              <span className="cta-arrow">→</span>
            </button>
            <button onClick={() => document.getElementById('contact-methods')?.scrollIntoView({ behavior: 'smooth' })} className="cta-btn secondary">
              <span>Direct Contact</span>
              <span className="cta-icon">📞</span>
            </button>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Methods */}
      <SectionWrapper id="contact-methods">
        <h2 className="section-title">Direct Access to Our Team</h2>
        <p className="section-description">
          No call centers, no junior staff. Connect directly with our founders and 
          senior team members who genuinely care about your success.
        </p>
        
        <div className="contact-methods-grid">
          {contactMethods.map((method, index) => (
            <div key={index} className="contact-method-card">
              <div className="method-icon">{method.icon}</div>
              <h3>{method.title}</h3>
              <p className="method-description">{method.description}</p>
              <div className="method-details">
                <div className="method-contact">{method.contact}</div>
                <div className="method-availability">{method.availability}</div>
              </div>
              {method.title === 'Email Consultation' && (
                <a href="mailto:hello@amajungle.com" className="method-btn">{method.action}</a>
              )}
              {method.title === 'Live Chat' && (
                <button className="method-btn" onClick={() => {
                  if (window.Tawk_API) {
                    window.Tawk_API.maximize();
                  }
                }}>{method.action}</button>
              )}
              {method.title === 'Video Meeting' && (
                <a href="mailto:hello@amajungle.com?subject=Meeting%20Request%20-%20Amazon%20Consulting" className="method-btn">{method.action}</a>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Form Section */}
      <SectionWrapper id="contact-form-section" className="bg-alt">
        <h2 className="section-title">Start Your Partnership With Us</h2>
        <p className="section-description">
          Tell us about your business and goals. We have the time and 
          dedication to create a truly customized strategy for your success.
        </p>
        
        <div className="contact-form-container">
          <ContactSection />
        </div>
      </SectionWrapper>

      {/* Office Locations */}
      <SectionWrapper id="contact-info">
        <h2 className="section-title">Connect With Us</h2>
        <p className="section-description">
          Remote-first team providing personalized service - 
          we're flexible and accessible for all our clients.
        </p>
        
        <div className="contact-info-grid">
          <div className="contact-info-card">
            <h3 className="info-title">📧 Email Communication</h3>
            <div className="info-details">
              <div className="info-item">
                <strong>Primary Email:</strong> {contactInfo.email}
              </div>
              <div className="info-item">
                <strong>Response Time:</strong> {contactInfo.responseTime}
              </div>
              <div className="info-item">
                <strong>Availability:</strong> {contactInfo.availability}
              </div>
              <div className="info-item">
                <strong>Languages:</strong> {contactInfo.languages.join(', ')}
              </div>
            </div>
          </div>
          
          <div className="contact-info-card">
            <h3 className="info-title">💼 Business Information</h3>
            <div className="info-details">
              <div className="info-item">
                <strong>Service Area:</strong> United States & International
              </div>
              <div className="info-item">
                <strong>Time Zone:</strong> Eastern Standard Time (EST)
              </div>
              <div className="info-item">
                <strong>Consultation:</strong> Free initial consultation available
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper id="contact-faq" className="bg-alt">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-description">
          Get quick answers to common questions about working with Amajungle.
        </p>
        
        <div className="contact-faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item-contact">
              <h4 className="faq-question-contact">{faq.question}</h4>
              <p className="faq-answer-contact">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="faq-cta">
          <p>Don't see your question answered?</p>
          <button onClick={() => document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' })} className="cta-btn secondary">Ask Us Directly</button>
        </div>
      </SectionWrapper>

      {/* Response Time & Process */}
      <SectionWrapper id="response-process">
        <h2 className="section-title">What Happens Next?</h2>
        <div className="process-timeline">
          <div className="timeline-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Initial Contact</h4>
              <p>You reach out via your preferred method</p>
              <span className="step-time">Immediate</span>
            </div>
          </div>
          
          <div className="timeline-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Quick Response</h4>
              <p>We respond with initial questions and schedule consultation</p>
              <span className="step-time">Within 4 hours</span>
            </div>
          </div>
          
          <div className="timeline-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Strategy Session</h4>
              <p>Free 30-minute consultation to assess your needs</p>
              <span className="step-time">Within 24 hours</span>
            </div>
          </div>
          
          <div className="timeline-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Custom Proposal</h4>
              <p>Detailed strategy and timeline tailored to your goals</p>
              <span className="step-time">Within 48 hours</span>
            </div>
          </div>
          
          <div className="timeline-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h4>Project Kickoff</h4>
              <p>Begin implementation with dedicated team assignment</p>
              <span className="step-time">1-2 business days</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper id="contact-final-cta">
        <div className="cta-content">
          <h2>Ready to Partner with Experts Who Care?</h2>
          <p>Don't settle for being another client number at a big agency. Work with a founder-led team that's personally invested in your success.</p>
          <div className="cta-buttons">
            <button onClick={() => document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' })} className="cta-btn main">
              Start Our Partnership
              <span className="cta-arrow">→</span>
            </button>
            <a href="mailto:hello@amajungle.com" className="cta-btn secondary">
              Email Our Team
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}

export default ContactPage
