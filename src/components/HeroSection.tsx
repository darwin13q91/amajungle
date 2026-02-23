import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import SectionWrapper from "./SectionWrapper";

/**
 * HeroSection Component - Professional Landing Hero
 * 
 * Features:
 * - Animated count-up for statistics with intersection observer
 * - Dynamic year calculation from founding date (2016)
 * - Premium glassmorphism visual effects
 * - Responsive design with mobile optimization
 * - Semantic HTML structure for accessibility
 */

// Count-up animation hook with intersection observer
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);
  
  return { count, ref };
};

const HeroSection = () => {
  // Calculate founder's years of Amazon experience (since 2016)
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - 2016;
  const { count: yearsCount, ref: statsRef } = useCountUp(yearsExperience, 1500);
  
  return (
    <SectionWrapper id="hero" className="hero">
      <div className="hero-content">
        {/* Status Badge */}
        <div className="hero-badge" role="status" aria-live="polite">
          <span className="badge-dot" aria-hidden="true"></span>
          <span>Now Accepting New Clients</span>
        </div>

        {/* Brand Identity */}
        <h1 className="hero-title">
          <span className="logo-ama">Ama</span>
          <span className="logo-jungle">jungle</span>
        </h1>

        {/* Value Proposition */}
        <h2 className="hero-subtitle">
          Your 24/7 AI Team — Running on Autopilot
          <span className="hero-highlight">Expert Amazon Consulting + AI Automation</span>
        </h2>

        {/* Supporting Copy */}
        <p className="hero-tagline">
          Stop paying $2,000/month for a VA who needs vacations.
          Get an AI assistant that monitors markets, manages your inbox, and runs your business 24/7/365 —
          plus {yearsCount}+ years of Amazon expertise, founder-led and guaranteed.
        </p>

        {/* Dual Service Pills */}
        <div className="hero-service-pills" aria-label="Services offered">
          <span className="service-pill amazon-pill">📦 Amazon FBA Consulting</span>
          <span className="service-pill ai-pill">🤖 AI Automation Agency</span>
        </div>

        {/* Social Proof Stats */}
        <div className="hero-stats" ref={statsRef} role="list" aria-label="Key statistics">
          <div className="stat-item" role="listitem">
            <span className="stat-number" aria-label={`${yearsCount} plus years`}>{yearsCount}+</span>
            <span className="stat-label">Years Amazon Experience</span>
          </div>
          <div className="stat-item" role="listitem">
            <span className="stat-number">47+</span>
            <span className="stat-label">AI Systems Built</span>
          </div>
          <div className="stat-item" role="listitem">
            <span className="stat-number">24/7</span>
            <span className="stat-label">AI Runs for You</span>
          </div>
          <div className="stat-item" role="listitem">
            <span className="stat-number">30-Day</span>
            <span className="stat-label">Money-Back Guarantee</span>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="hero-cta-group" role="group" aria-label="Get started options">
          <Link to="/contact" className="cta-btn main pulse">
            <span>Book a Free Discovery Call</span>
            <span className="cta-arrow" aria-hidden="true">→</span>
          </Link>
          <Link to="/services" className="cta-btn secondary">
            <span>View Services & Pricing</span>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;