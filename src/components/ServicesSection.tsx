import SectionWrapper from "./SectionWrapper";
import { Link } from 'react-router-dom';
import { services } from '../config/services';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * ServicesSection Component - Comprehensive Service Display
 * 
 * Features:
 * - Dynamic data from centralized services.ts
 * - Scroll-triggered reveal animations
 * - Professional card design with hover effects
 * - Semantic HTML for accessibility
 */

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <SectionWrapper id="services" className="">
      <div className="section-header">
        <span className="section-badge">Amazon Services</span>
        <h2 className="section-title">Complete Amazon Solutions</h2>
        <p className="section-description">
          From account setup to advanced optimization, we provide end-to-end Amazon 
          services that help businesses of all sizes succeed in the competitive marketplace.
        </p>
      </div>
      
      <div 
        ref={ref} 
        className={`services-grid stagger-children ${isVisible ? 'visible' : ''}`}
        role="list"
        aria-label="Available services"
      >
        {services.filter(s => !s.id.startsWith('openclaw')).map((service) => (
          <article 
            key={service.id} 
            className="service-detail-card"
            role="listitem"
            aria-labelledby={`service-title-${service.id}`}
          >
            <div className="service-header">
              <div className="service-icon" aria-hidden="true">{service.icon}</div>
              <div className="service-meta">
                <h3 id={`service-title-${service.id}`}>{service.title}</h3>
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
                <ul className="features-list" aria-label="Included features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="process-section">
                <h4>Our Process:</h4>
                <ol className="process-list" aria-label="Service process steps">
                  {service.process.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              
              <div className="suitable-section">
                <h4>Perfect For:</h4>
                <div className="suitable-tags" role="list" aria-label="Target audience">
                  {service.suitable.map((tag, index) => (
                    <span key={index} className="suitable-tag" role="listitem">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="service-actions">
              <Link to="/contact" className="cta-btn main">Get Started</Link>
              <Link to="/contact" className="cta-btn secondary">Learn More</Link>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;