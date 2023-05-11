import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const footerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.footer className="footer"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <div className="footer-info">
          <h3>Amajungle</h3>
          <p>123 Main Street</p>
          <p>City, State ZIP</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@amajungle.com</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy">
        <p>&copy; 2023 Amajungle. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
