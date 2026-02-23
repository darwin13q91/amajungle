import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-grid">
        {/* Brand Section */}
        <div className="footer-brand">
          <h3 className="footer-logo">Amajungle</h3>
          <p className="footer-tagline">Amazon Consulting & AI Automation</p>
          <p className="footer-description">
            Founder-led team offering Amazon FBA consulting and AI Automation Agency services. 30-day money-back guarantee on everything we do.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Get Started</Link>
          </nav>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4 className="footer-heading">Services</h4>
          <nav className="footer-nav">
            <Link to="/services#listing">Listing Optimization</Link>
            <Link to="/services#ppc">PPC Management</Link>
            <Link to="/services#brand">Brand Registry</Link>
            <Link to="/services#account">Account Management</Link>
            <Link to="/#ai-pricing">AI Automation</Link>
          </nav>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4 className="footer-heading">Get in Touch</h4>
          <div className="footer-contact">
            <a href="mailto:hello@amajungle.com" className="footer-contact-item">
              <span className="contact-icon">✉</span>
              <span>hello@amajungle.com</span>
            </a>
            <a href="tel:+6309954505206" className="footer-contact-item">
              <span className="contact-icon">📞</span>
              <span>+63 0995 450 5206</span>
            </a>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/amznby-services/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Amajungle. All rights reserved.
        </p>
        <div className="footer-legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;