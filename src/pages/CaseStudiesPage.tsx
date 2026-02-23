import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';

/**
 * Case Studies Page Component
 * 
 * Showcases client success stories with:
 * - Before/after metrics
 * - Strategy breakdowns
 * - Testimonial quotes
 * - Industry-specific examples
 */

// Case studies data
const caseStudies = [
  {
    id: 1,
    slug: 'health-supplements-brand',
    title: 'Health Supplements Brand: 340% Revenue Growth',
    client: 'NutriVital Pro',
    industry: 'Health & Wellness',
    challenge: 'Struggling with low visibility and poor conversion rates in a highly competitive supplement market.',
    solution: 'Complete listing overhaul, strategic PPC campaign restructuring, and A+ Content implementation.',
    results: [
      { metric: 'Revenue Growth', value: '340%', period: '6 months' },
      { metric: 'ACOS Reduction', value: '45%', period: 'to 22%' },
      { metric: 'Organic Ranking', value: 'Page 1', period: 'for 15 keywords' },
      { metric: 'Conversion Rate', value: '+85%', period: 'improvement' }
    ],
    testimonial: {
      quote: "Amajungle transformed our Amazon presence. We went from barely breaking even to becoming a category leader.",
      author: 'Marketing Director',
      company: 'NutriVital Pro'
    },
    image: '💊',
    featured: true
  },
  {
    id: 2,
    slug: 'home-kitchen-brand',
    title: 'Kitchen Brand: From Suspension to $50K/Month',
    client: 'ChefMaster Tools',
    industry: 'Home & Kitchen',
    challenge: 'Account suspended due to policy violations, losing $30K monthly revenue.',
    solution: 'Account reinstatement appeal, compliance audit, and systematic listing corrections.',
    results: [
      { metric: 'Account Reinstated', value: '14 Days', period: 'turnaround' },
      { metric: 'Monthly Revenue', value: '$50K+', period: 'recovered' },
      { metric: 'Policy Compliance', value: '100%', period: 'maintained' },
      { metric: 'Review Rating', value: '4.6★', period: 'improved' }
    ],
    testimonial: {
      quote: "When Amazon suspended us, we thought it was over. Amajungle not only got us back but helped us grow stronger.",
      author: 'Founder & CEO',
      company: 'ChefMaster Tools'
    },
    image: '🍳',
    featured: true
  },
  {
    id: 3,
    slug: 'pet-supplies-startup',
    title: 'Pet Supplies Startup: Launch to $25K in 90 Days',
    client: 'PawPerfect Co',
    industry: 'Pet Supplies',
    challenge: 'New brand with no Amazon presence trying to enter a saturated market.',
    solution: 'Strategic product launch, optimized listings, and targeted PPC campaigns.',
    results: [
      { metric: 'First 90 Days', value: '$25K', period: 'revenue' },
      { metric: 'Best Seller Rank', value: 'Top 100', period: 'in subcategory' },
      { metric: 'Reviews Generated', value: '150+', period: 'organic reviews' },
      { metric: 'Launch Cost', value: '-60%', period: 'vs industry avg' }
    ],
    testimonial: {
      quote: "As a first-time Amazon seller, having Amajungle guide our launch was invaluable. They exceeded all expectations.",
      author: 'Co-Founder',
      company: 'PawPerfect Co'
    },
    image: '🐕',
    featured: false
  },
  {
    id: 4,
    slug: 'electronics-accessories',
    title: 'Tech Accessories: PPC Optimization Success',
    client: 'TechGear Plus',
    industry: 'Electronics',
    challenge: 'High advertising costs eating into margins with inefficient PPC campaigns.',
    solution: 'Complete campaign restructuring, negative keyword optimization, and bid management.',
    results: [
      { metric: 'ACOS Reduced', value: '58%', period: 'to 18%' },
      { metric: 'Ad Spend Efficiency', value: '+200%', period: 'ROAS improvement' },
      { metric: 'Sales Volume', value: '+75%', period: 'with same budget' },
      { metric: 'Profit Margin', value: '+22%', period: 'increase' }
    ],
    testimonial: {
      quote: "We were spending a fortune on ads with little return. Amajungle turned our PPC into a profit machine.",
      author: 'Operations Manager',
      company: 'TechGear Plus'
    },
    image: '📱',
    featured: false
  }
];

const industries = [
  'All Industries',
  'Health & Wellness',
  'Home & Kitchen',
  'Pet Supplies',
  'Electronics',
  'Beauty & Personal Care',
  'Sports & Outdoors'
];

const CaseStudiesPage = () => {
  const featuredStudies = caseStudies.filter(study => study.featured);
  const otherStudies = caseStudies.filter(study => !study.featured);

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper id="case-studies-hero" className="hero-section case-studies-hero">
        <div className="hero-content">
          <span className="section-badge">Success Stories</span>
          <h1 className="hero-title">
            Real Results, <span className="text-gradient">Real Growth</span>
          </h1>
          <p className="hero-subtitle">
            Discover how we've helped Amazon sellers overcome challenges and achieve 
            remarkable growth. These are their stories.
          </p>
        </div>
      </SectionWrapper>

      {/* Stats Overview */}
      <SectionWrapper id="stats-overview" className="bg-alt">
        <div className="stats-banner">
          <div className="stat-item-large">
            <span className="stat-number-large">$2M+</span>
            <span className="stat-label-large">Revenue Generated for Clients</span>
          </div>
          <div className="stat-item-large">
            <span className="stat-number-large">95%</span>
            <span className="stat-label-large">Client Retention Rate</span>
          </div>
          <div className="stat-item-large">
            <span className="stat-number-large">50+</span>
            <span className="stat-label-large">Successful Projects</span>
          </div>
          <div className="stat-item-large">
            <span className="stat-number-large">4.9★</span>
            <span className="stat-label-large">Average Client Rating</span>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Case Studies */}
      <SectionWrapper id="featured-case-studies">
        <h2 className="section-title">Featured Success Stories</h2>
        <div className="case-studies-featured">
          {featuredStudies.map(study => (
            <article key={study.id} className="case-study-card featured">
              <div className="case-study-header">
                <span className="case-study-icon">{study.image}</span>
                <div className="case-study-meta">
                  <span className="industry-tag">{study.industry}</span>
                </div>
              </div>
              
              <h3 className="case-study-title">{study.title}</h3>
              
              <div className="case-study-challenge">
                <h4>The Challenge</h4>
                <p>{study.challenge}</p>
              </div>
              
              <div className="case-study-solution">
                <h4>Our Solution</h4>
                <p>{study.solution}</p>
              </div>
              
              <div className="case-study-results">
                <h4>The Results</h4>
                <div className="results-grid">
                  {study.results.map((result, index) => (
                    <div key={index} className="result-item">
                      <span className="result-value">{result.value}</span>
                      <span className="result-metric">{result.metric}</span>
                      <span className="result-period">{result.period}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <blockquote className="case-study-testimonial">
                <p>"{study.testimonial.quote}"</p>
                <cite>
                  <strong>{study.testimonial.author}</strong>
                  <span>{study.testimonial.company}</span>
                </cite>
              </blockquote>
              
              <Link to={`/case-studies/${study.slug}`} className="read-full-study">
                Read Full Case Study →
              </Link>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Industry Filter */}
      <SectionWrapper id="industry-filter" className="bg-alt">
        <div className="category-filter">
          <h3>Filter by Industry</h3>
          <div className="category-tags">
            {industries.map(industry => (
              <button 
                key={industry} 
                className={`category-tag ${industry === 'All Industries' ? 'active' : ''}`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* More Case Studies */}
      <SectionWrapper id="more-case-studies">
        <h2 className="section-title">More Success Stories</h2>
        <div className="case-studies-grid">
          {otherStudies.map(study => (
            <article key={study.id} className="case-study-card compact">
              <div className="case-study-header">
                <span className="case-study-icon">{study.image}</span>
                <span className="industry-tag">{study.industry}</span>
              </div>
              
              <h3 className="case-study-title">{study.title}</h3>
              <p className="case-study-excerpt">{study.challenge}</p>
              
              <div className="results-preview">
                {study.results.slice(0, 2).map((result, index) => (
                  <div key={index} className="result-preview-item">
                    <span className="result-value">{result.value}</span>
                    <span className="result-metric">{result.metric}</span>
                  </div>
                ))}
              </div>
              
              <Link to={`/case-studies/${study.slug}`} className="read-more">
                View Case Study →
              </Link>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper id="case-studies-cta" className="bg-alt">
        <div className="cta-content">
          <h2>Ready to Be Our Next Success Story?</h2>
          <p>Join the growing list of sellers who've transformed their Amazon business with Amajungle.</p>
          <div className="hero-cta-group">
            <Link to="/contact" className="cta-btn main">
              <span>Start Your Success Story</span>
              <span className="cta-arrow">→</span>
            </Link>
            <Link to="/services" className="cta-btn secondary">
              <span>Explore Our Services</span>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default CaseStudiesPage;
