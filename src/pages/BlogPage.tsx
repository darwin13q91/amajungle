import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';

/**
 * Blog Page Component
 * 
 * Content marketing hub featuring:
 * - Amazon selling tips and strategies
 * - Industry news and updates
 * - Case studies and success stories
 * - SEO-optimized articles
 */

// Blog post data - can be moved to a CMS or separate config later
const blogPosts = [
  {
    id: 1,
    slug: 'amazon-ppc-strategies-2026',
    title: '10 Amazon PPC Strategies That Actually Work in 2026',
    excerpt: 'Discover the latest PPC optimization techniques that top sellers are using to maximize ROI and dominate their niches on Amazon.',
    category: 'PPC & Advertising',
    date: 'January 15, 2026',
    readTime: '8 min read',
    image: '📊',
    featured: true
  },
  {
    id: 2,
    slug: 'amazon-algorithm-changes',
    title: 'Understanding Amazon\'s A10 Algorithm: What Changed and How to Adapt',
    excerpt: 'A deep dive into the latest algorithm updates and actionable strategies to maintain and improve your product rankings.',
    category: 'SEO & Rankings',
    date: 'January 10, 2026',
    readTime: '12 min read',
    image: '🔍',
    featured: true
  },
  {
    id: 3,
    slug: 'fba-inventory-management',
    title: 'FBA Inventory Management: Avoid Stockouts and Long-Term Storage Fees',
    excerpt: 'Learn the inventory forecasting techniques that prevent costly stockouts while minimizing storage fees.',
    category: 'Operations',
    date: 'January 5, 2026',
    readTime: '6 min read',
    image: '📦',
    featured: false
  },
  {
    id: 4,
    slug: 'brand-registry-benefits',
    title: 'Amazon Brand Registry 2026: Complete Guide to Benefits and Setup',
    excerpt: 'Everything you need to know about Brand Registry, from eligibility requirements to unlocking A+ Content and Brand Analytics.',
    category: 'Brand Building',
    date: 'December 28, 2025',
    readTime: '10 min read',
    image: '🏷️',
    featured: false
  },
  {
    id: 5,
    slug: 'listing-optimization-checklist',
    title: 'The Ultimate Amazon Listing Optimization Checklist',
    excerpt: 'A comprehensive checklist covering titles, bullets, descriptions, images, and backend keywords for maximum conversion.',
    category: 'Listing Optimization',
    date: 'December 20, 2025',
    readTime: '7 min read',
    image: '✅',
    featured: false
  },
  {
    id: 6,
    slug: 'amazon-account-health',
    title: 'Protecting Your Amazon Account Health: Prevention and Recovery',
    excerpt: 'How to maintain excellent account health metrics and what to do if you face suspension or policy violations.',
    category: 'Account Management',
    date: 'December 15, 2025',
    readTime: '9 min read',
    image: '🛡️',
    featured: false
  }
];

const categories = [
  'All',
  'PPC & Advertising',
  'SEO & Rankings',
  'Operations',
  'Brand Building',
  'Listing Optimization',
  'Account Management'
];

const BlogPage = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper id="blog-hero" className="hero-section blog-hero">
        <div className="hero-content">
          <span className="section-badge">Knowledge Hub</span>
          <h1 className="hero-title">
            Amazon Seller <span className="text-gradient">Insights</span>
          </h1>
          <p className="hero-subtitle">
            Expert tips, strategies, and industry updates to help you succeed on Amazon. 
            Stay ahead of the competition with our latest insights.
          </p>
        </div>
      </SectionWrapper>

      {/* Featured Posts */}
      <SectionWrapper id="featured-posts">
        <h2 className="section-title">Featured Articles</h2>
        <div className="featured-posts-grid">
          {featuredPosts.map(post => (
            <article key={post.id} className="featured-post-card">
              <div className="post-image-placeholder">
                <span className="post-emoji">{post.image}</span>
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">{post.date}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-footer">
                  <span className="read-time">⏱️ {post.readTime}</span>
                  <Link to={`/blog/${post.slug}`} className="read-more">
                    Read Article →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Category Filter */}
      <SectionWrapper id="blog-categories" className="bg-alt">
        <div className="category-filter">
          <h3>Browse by Category</h3>
          <div className="category-tags">
            {categories.map(category => (
              <button 
                key={category} 
                className={`category-tag ${category === 'All' ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Recent Posts */}
      <SectionWrapper id="recent-posts">
        <h2 className="section-title">Recent Articles</h2>
        <div className="posts-grid">
          {recentPosts.map(post => (
            <article key={post.id} className="post-card">
              <div className="post-image-small">
                <span className="post-emoji">{post.image}</span>
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-category">{post.category}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-footer">
                  <span className="post-date">{post.date}</span>
                  <span className="read-time">{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Newsletter CTA */}
      <SectionWrapper id="newsletter-cta" className="bg-alt">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Get the latest Amazon selling tips and strategies delivered to your inbox.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
              aria-label="Email address"
            />
            <button type="submit" className="cta-btn main">
              Subscribe
            </button>
          </form>
          <p className="newsletter-disclaimer">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper id="blog-cta">
        <div className="cta-content">
          <h2>Ready to Apply These Strategies?</h2>
          <p>Let our experts help you implement winning Amazon strategies for your business.</p>
          <div className="hero-cta-group">
            <Link to="/contact" className="cta-btn main">
              <span>Get Free Consultation</span>
              <span className="cta-arrow">→</span>
            </Link>
            <Link to="/services" className="cta-btn secondary">
              <span>View Our Services</span>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default BlogPage;
