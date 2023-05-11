import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/About.css';

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === "#about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slide = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0%)' },
    config: { duration: 1000 },
  });

  return (
    <animated.section className="about" id="about" style={fade} ref={aboutRef}>
      <div className="container">
        <animated.h2 style={slide} className="about-heading">Who We Are</animated.h2>
        <animated.p style={slide} className="about-description">We are a team of experienced Amazon specialists who are passionate about helping our clients succeed on the platform. Based in [location], we offer a range of 3rd party services designed to help Amazon sellers grow their business and achieve success.</animated.p>

        <animated.h2 style={slide} className="about-heading">Our Mission</animated.h2>
        <animated.p style={slide} className="about-description">Our mission is simple: to help Amazon sellers succeed. We achieve this by providing high-quality services tailored to meet the specific needs of our clients. We take pride in our exceptional customer support and are committed to helping our clients achieve their business goals.</animated.p>

        <animated.h2 style={slide} className="about-heading">Get in Touch</animated.h2>
        <animated.p style={slide} className="about-description">If you're looking for help growing your business on Amazon, we're here to help. Contact us today to learn more about our services and how we can help you achieve success on the platform.</animated.p>
      </div>
    </animated.section>
  );
}

export default About;
