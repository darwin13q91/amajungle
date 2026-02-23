import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';

/**
 * 404 Not Found Page
 * 
 * Professional error page for invalid routes with:
 * - Clear messaging
 * - Helpful navigation options
 * - Brand-consistent design
 */

const NotFoundPage = () => {
  return (
    <SectionWrapper id="not-found" className="not-found-page">
      <div className="not-found-content">
        <div className="error-code">
          <span className="error-4">4</span>
          <span className="error-0">
            <span className="amazon-box" aria-hidden="true">📦</span>
          </span>
          <span className="error-4">4</span>
        </div>
        
        <h1 className="not-found-title">Page Not Found</h1>
        
        <p className="not-found-description">
          Oops! The page you're looking for seems to have gotten lost in the Amazon jungle. 
          Don't worry, we'll help you find your way back.
        </p>
        
        <div className="not-found-suggestions">
          <h2>Here are some helpful links:</h2>
          <div className="suggestion-links">
            <Link to="/" className="suggestion-link">
              <span className="link-icon">🏠</span>
              <span className="link-text">
                <strong>Home</strong>
                <small>Return to the homepage</small>
              </span>
            </Link>
            <Link to="/services" className="suggestion-link">
              <span className="link-icon">🛠️</span>
              <span className="link-text">
                <strong>Services</strong>
                <small>Explore our Amazon solutions</small>
              </span>
            </Link>
            <Link to="/about" className="suggestion-link">
              <span className="link-icon">👥</span>
              <span className="link-text">
                <strong>About Us</strong>
                <small>Learn about our expertise</small>
              </span>
            </Link>
            <Link to="/contact" className="suggestion-link">
              <span className="link-icon">📧</span>
              <span className="link-text">
                <strong>Contact</strong>
                <small>Get in touch with us</small>
              </span>
            </Link>
          </div>
        </div>
        
        <div className="not-found-cta">
          <Link to="/" className="cta-btn main">
            <span>Back to Home</span>
            <span className="cta-arrow">→</span>
          </Link>
          <Link to="/contact" className="cta-btn secondary">
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default NotFoundPage;
