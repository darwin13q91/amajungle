import SectionWrapper from "./SectionWrapper";
import { useToggleArray } from "../hooks/useToggleArray";
import CTAGroup from "./CTAGroup";

const ResourcesSection = () => {
  // Use custom hook for toggle functionality (first category open by default)
  const { openItems: openCategories, toggleItem: toggleCategory } = useToggleArray([0]);

  // Resource categories data
  const resourceCategories = [
    {
      title: "📚 Official Amazon Resources",
      items: [
        {
          title: "Amazon Seller Central Help Pages",
          url: "https://sellercentral.amazon.com/help/hub/reference/external/G200364090",
          description: "Official Amazon documentation, policies, and best practices directly from the source."
        },
        {
          title: "Amazon Seller University",
          url: "https://sellercentral.amazon.com/learn",
          description: "Free courses and training materials from Amazon covering FBA, advertising, and business growth."
        },
        {
          title: "Amazon Brand Registry Guide",
          url: "https://brandregistry.amazon.com/",
          description: "Complete guide to brand protection, Enhanced Brand Content, and Amazon Stores."
        },
        {
          title: "Amazon Advertising Console Training",
          url: "https://advertising.amazon.com/help",
          description: "Official tutorials for Sponsored Products, Brands, and Display advertising campaigns."
        }
      ]
    },
    {
      title: "🛠️ Recommended Amazon Tools",
      items: [
        {
          title: "Jungle Scout - Product Research",
          url: "https://www.junglescout.com/",
          description: "Market analysis, product validation, and competitor tracking. Best for finding profitable opportunities."
        },
        {
          title: "Helium 10 - Complete Toolkit",
          url: "https://www.helium10.com/",
          description: "Keyword research, listing optimization, inventory management, and profit analytics in one platform."
        },
        {
          title: "Keepa - Price History Tracking",
          url: "https://keepa.com/",
          description: "Historical price data, sales rank tracking, and automated price monitoring for informed decisions."
        },
        {
          title: "AMZScout - Market Intelligence",
          url: "https://www.amzscout.net/",
          description: "Product research, keyword tracking, and sales estimation tools for data-driven growth."
        },
        {
          title: "Viral Launch - Launch Strategy",
          url: "https://viral-launch.com/",
          description: "Product launch campaigns, keyword research, and listing optimization for maximum visibility."
        }
      ]
    },
    {
      title: "📈 Market Intelligence & Analytics",
      items: [
        {
          title: "Amazon Brand Analytics (Official)",
          url: "https://sellercentral.amazon.com/brand-analytics",
          description: "Search frequency data, market basket analysis, and demographic insights for registered brands."
        },
        {
          title: "Amazon Marketplace Trends 2025",
          url: "https://www.statista.com/outlook/dmo/ecommerce/amazon",
          description: "Quarterly reports on emerging categories, seasonal trends, and growth opportunities."
        },
        {
          title: "Algorithm Update Tracker",
          url: "https://www.searchenginejournal.com/amazon-algorithm-updates/",
          description: "Real-time monitoring of A9 algorithm changes and their impact on search rankings."
        },
        {
          title: "Competitor Intelligence Reports",
          url: "https://www.marketplace-analytics.com/",
          description: "Weekly insights on competitor strategies, pricing changes, and new product launches."
        }
      ]
    },
    {
      title: "🎓 Educational Platforms",
      items: [
        {
          title: "Amazing Selling Machine",
          url: "https://amazingselling.com/",
          description: "Comprehensive Amazon FBA training program with proven strategies and ongoing support."
        },
        {
          title: "Freedom Ticket by Helium 10",
          url: "https://www.helium10.com/freedom-ticket/",
          description: "Free Amazon FBA course covering everything from product research to scaling operations."
        },
        {
          title: "Seller Sessions Podcast",
          url: "https://sellersession.com/",
          description: "Weekly industry insights, expert interviews, and actionable strategies from top sellers."
        },
        {
          title: "Amazon PPC University",
          url: "https://www.amazoncourses.com/ppc-university/",
          description: "Advanced advertising training for optimizing campaigns and maximizing ROAS."
        }
      ]
    },
    {
      title: "🎁 Free Starter Tools",
      items: [
        {
          title: "Amazon FBA Calculator (Official)",
          url: "https://sellercentral.amazon.com/fba/profitabilitycalculator/",
          description: "Calculate fees, profitability, and compare FBA vs. FBM fulfillment options."
        },
        {
          title: "Keyword Research Tool (Free Version)",
          url: "https://www.sonar-tool.com/",
          description: "Basic keyword discovery and search volume data for Amazon product listings."
        },
        {
          title: "Amazon Seller Mobile App",
          url: "https://sellercentral.amazon.com/mobile-app",
          description: "Manage inventory, respond to customers, and monitor performance on the go."
        },
        {
          title: "Listing Quality Scanner",
          url: "https://www.amzanalyzer.com/",
          description: "Free audit tool to check your listings for optimization opportunities and compliance."
        }
      ]
    },
    {
      title: "📈 Amajungle Exclusive Resources",
      items: [
        {
          title: "Amazon Success Blueprint 2025",
          url: "#contact",
          description: "Our comprehensive guide combining 10+ years of experience with latest strategies and tools."
        },
        {
          title: "Tool Recommendation Matrix",
          url: "#contact",
          description: "Personalized tool recommendations based on your business size, budget, and growth stage."
        },
        {
          title: "Monthly Market Reports",
          url: "#contact",
          description: "Curated insights, trend analysis, and actionable recommendations for our clients."
        },
        {
          title: "Free Amazon Business Audit",
          url: "#contact",
          description: "Comprehensive review of your current setup with specific improvement recommendations."
        }
      ]
    }
  ];

  return (
    <SectionWrapper id="resources" className="resources">
      <h2>Amazon Resources & Expert Insights</h2>
      <p className="resources-intro">
        Your complete resource hub for Amazon success. Access our curated collection of guides, tools, and market intelligence to stay ahead of the competition.
      </p>
      
      <div className="resource-categories">
        {resourceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={`resource-category ${openCategories.includes(categoryIndex) ? 'open' : ''}`}>
            <button 
              className="resource-category-header" 
              onClick={() => toggleCategory(categoryIndex)}
              aria-expanded={openCategories.includes(categoryIndex)}
              aria-controls={`category-${categoryIndex}`}
            >
              <h3>{category.title}</h3>
              <span className="category-toggle-icon">
                {openCategories.includes(categoryIndex) ? '−' : '+'}
              </span>
            </button>
            <div 
              id={`category-${categoryIndex}`}
              className="category-content"
            >
              <ul className="resources-list">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <strong>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    </strong>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <CTAGroup
        className="resources-cta-section"
        title="Ready to Accelerate Your Amazon Success?"
        description="Get personalized tool recommendations and exclusive access to our proven strategies."
        buttons={[
          { href: "#contact", text: "Get Free Amazon Audit" },
          { href: "#contact", text: "Download Complete Resource Guide", variant: "secondary" }
        ]}
      />
    </SectionWrapper>
  );
};

export default ResourcesSection;
