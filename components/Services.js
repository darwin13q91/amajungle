import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/Services.css';

function Services() {
  const servicesSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 800 },
  });

  return (
    <section className="services" id="services">
      <div className="container">
        <animated.h2 style={servicesSpring}>Our Services</animated.h2>
        <div className="services-grid">
          <animated.div style={servicesSpring} className="service">
            <div className="service-icon">
              <i className="fas fa-cog"></i>
            </div>
            <h3 className="service-title">Product Listing Optimization</h3>
            <p className="service-description">Optimizing your product listings with relevant keywords, high-quality images, and compelling product descriptions to improve your search ranking and increase conversions.</p>
            <a href="#" className="service-btn">Learn More</a>
          </animated.div>
          <animated.div style={servicesSpring} className="service">
            <div className="service-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="service-title">PPC Campaigns</h3>
            <p className="service-description">Creating and managing targeted PPC campaigns to drive traffic and sales to your Amazon store while maximizing your ROI.</p>
            <a href="#" className="service-btn">Learn More</a>
          </animated.div>
          <animated.div style={servicesSpring} className="service">
            <div className="service-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="service-title">SEO Audits</h3>
            <p className="service-description">Conducting a thorough SEO audit of your Amazon store to identify and address any issues that may be affecting your search ranking and sales.</p>
            <a href="#" className="service-btn">Learn More</a>
          </animated.div>
          <animated.div style={servicesSpring} className="service">
            <div className="service-icon">
              <i className="fas fa-star"></i>
            </div>
            <h3 className="service-title">Amazon A+ Content</h3>
            <p className="service-description">Creating and optimizing your Amazon A+ Content to showcase your brand and products in a more engaging and informative way to increase sales and customer loyalty.</p>
            <a href="#" className="service-btn">Learn More</a>
          </animated.div>
          <animated.div style={servicesSpring} className="service">
            <div className="service-icon">
              <i className="fas fa-store"></i>
            </div>
            <h3 className="service-title">Amazon Stores</h3>
            <p className="service-description">Designing and building your Amazon Store to create a seamless shopping experience for your customers and boost your sales and brand awareness.</p>
            <a href="#" className="service-btn">Learn More</a>
          </animated.div>
          <animated.div style={servicesSpring} className="service">
            <div className="service-icon">
              <i className="fas fa-comment"></i>
            </div>
            <h3 className="service-title">Review Management</h3>
            <p className="service-description">Managing and responding to customer reviews to improve your reputation, increase customer loyalty, and boost your sales.</p>
          </animated.div>
        </div>
      </div>
    </section>
  );
}

export default Services;