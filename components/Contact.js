import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <animated.div style={formAnimation}>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Please use the form below to get in touch.</p>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </animated.div>
  );
}

export default Contact;

