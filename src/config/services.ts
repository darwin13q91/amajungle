/**
 * Service data configuration
 * Central source of truth for all Amazon services offered
 */

export interface Service {
  id: string;
  title: string;
  icon: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  process: string[];
  suitable: string[];
}

export const services: Service[] = [
  {
    id: 'fba-setup',
    title: 'FBA Account Setup & Optimization',
    icon: '📦',
    price: 'Starting at $349',
    duration: '2-3 weeks',
    description: 'Complete Amazon FBA account setup with optimization for maximum visibility and sales potential.',
    features: [
      'Professional seller account setup',
      'Product listing optimization',
      'Keyword research and implementation',
      'Enhanced Brand Content creation',
      'Inventory management setup',
      'Tax and legal compliance assistance',
      'Initial performance monitoring'
    ],
    process: [
      'Account audit and setup',
      'Market research and competitor analysis',
      'Product listing creation and optimization',
      'Brand registry and trademark assistance',
      'Launch strategy implementation',
      'Performance monitoring and reporting'
    ],
    suitable: ['New Amazon sellers', 'Businesses expanding to Amazon', 'Sellers with underperforming accounts']
  },
  {
    id: 'ppc-management',
    title: 'Amazon PPC Campaign Setup & Management',
    icon: '📊',
    price: 'Starting at $299/month',
    duration: 'Ongoing',
    description: 'Professional setup and management of your Amazon advertising campaigns to ensure smooth performance and steady growth.',
    features: [
      'Sponsored Products campaign setup',
      'Keyword research and initial targeting',
      'Campaign monitoring and performance tracking',
      'Regular updates and adjustments to improve results'
    ],
    process: [
      'Initial campaign setup and structure',
      'Keyword selection and targeting',
      'Ongoing monitoring of performance',
      'Updates and adjustments to maintain efficiency'
    ],
    suitable: ['Established sellers', 'Brands with advertising budget', 'Sellers looking to scale']
  },
  {
    id: 'account-health',
    title: 'Amazon Account Health Management',
    icon: '🏥',
    price: 'Starting at $599/month',
    duration: 'Ongoing',
    description: 'Comprehensive monitoring and management of your Amazon account health to ensure compliance, resolve violations, and maintain uninterrupted selling privileges.',
    features: [
      'Regular monitoring of Account Health Dashboard',
      'Handling of policy Violations, Restrictions, and Compliance issues',
      'Review of performance metrics and seller policies',
      'Identification of potential risks or violations',
      'Guidance and support for resolving account health alerts',
      'Ongoing updates to maintain compliance'
    ],
    process: [
      'Initial account health audit and risk assessment',
      'Review of performance metrics and policy compliance',
      'Monitoring of account health notifications and alerts',
      'Direct handling of violations, restrictions, and compliance cases',
      'Action plan for resolving issues promptly',
      'Monthly account health reviews and updates'
    ],
    suitable: ['All Amazon sellers', 'Sellers with policy concerns', 'Businesses maintaining compliance']
  },
  {
    id: 'listing-optimization',
    title: 'Product Listing Optimization',
    icon: '✨',
    price: 'Starting at $149 per listing',
    duration: '1-2 weeks',
    description: 'Comprehensive optimization of your product listings to improve search visibility and conversion rates.',
    features: [
      'SEO-optimized titles and descriptions',
      'High-converting bullet points',
      'Backend keyword optimization',
      'Professional product photography guidance',
      'Enhanced Brand Content design',
      'A+ Content creation',
      'Competitor analysis and positioning'
    ],
    process: [
      'Current listing analysis',
      'Keyword research and optimization',
      'Content creation and enhancement',
      'Image optimization recommendations',
      'Implementation and testing',
      'Performance monitoring'
    ],
    suitable: ['All Amazon sellers', 'Products with low conversion rates', 'New product launches']
  },
  {
    id: 'brand-protection',
    title: 'Brand Protection & Registry',
    icon: '🛡️',
    price: 'Starting at $299',
    duration: '2-4 weeks',
    description: 'Protect your brand on Amazon with comprehensive brand registry and anti-counterfeiting measures.',
    features: [
      'Amazon Brand Registry setup',
      'Brand protection monitoring',
      'Counterfeit reporting and removal',
      'Brand gating strategies'
    ],
    process: [
      'Brand analysis and trademark search',
      'Brand Registry application',
      'Monitoring implementation',
      'Enforcement procedures',
      'Ongoing brand management'
    ],
    suitable: ['Established brands', 'Private label sellers', 'Brands facing counterfeiting']
  },
  {
    id: 'inventory-management',
    title: 'Inventory & Supply Chain Management',
    icon: '📦',
    price: 'Starting at $399/month',
    duration: 'Ongoing',
    description: 'Optimize your inventory levels and supply chain for maximum profitability and minimal stockouts.',
    features: [
      'Inventory forecasting and planning',
      'FBA shipment coordination',
      'Stock level monitoring',
      'Reorder point optimization',
      'Storage fee minimization',
      'Multi-channel fulfillment',
      'Supplier relationship management'
    ],
    process: [
      'Current inventory analysis',
      'Demand forecasting setup',
      'Automated reorder systems',
      'Supply chain optimization',
      'Performance tracking',
      'Continuous improvement'
    ],
    suitable: ['Sellers with multiple SKUs', 'Growing businesses', 'Brands with complex logistics']
  },
  {
    id: 'account-reinstatement',
    title: 'Account Reinstatement & Recovery',
    icon: '🔄',
    price: 'Starting at $499',
    duration: '1-3 weeks',
    description: 'Expert assistance in reinstating suspended Amazon accounts and resolving policy violations.',
    features: [
      'Suspension root cause analysis',
      'Professional appeal writing',
      'Plan of Action development',
      'Policy compliance review',
      'Documentation preparation',
      'Direct Amazon communication',
      'Preventive measures setup'
    ],
    process: [
      'Suspension analysis',
      'Evidence gathering',
      'Appeal preparation',
      'Submission and follow-up',
      'Account restoration',
      'Compliance implementation'
    ],
    suitable: ['Suspended sellers', 'Policy violation warnings', 'Account health issues']
  },
  {
    id: 'openclaw-starter',
    title: 'AI Automation — Autopilot Starter',
    icon: '🤖',
    price: '$497 one-time',
    duration: '48-hour setup',
    description: 'Get a fully configured AI assistant running on your hardware in 48 hours. One specialized context, five custom automations, and Telegram control from your phone — all set up for you.',
    features: [
      'OpenClaw installation on your laptop or VPS',
      '1 specialized context of your choice (Trading, Personal, Business, Amazon, or WebDev)',
      'Telegram bot interface — control from your phone',
      '5 custom automation workflows (cron jobs)',
      'Secured .env file with your API keys (chmod 600)',
      '30-minute onboarding video call',
      'Written documentation (usage & troubleshooting)',
      '7-day email support',
      '30-day "It Works Or You Don\'t Pay" guarantee'
    ],
    process: [
      'Welcome email + pre-setup questionnaire (Day 0)',
      'Kickoff call — map your workflows and collect API keys (Day 1–2)',
      'Remote installation and context configuration (Day 3–5)',
      'Build and test 5 automation workflows',
      'Handoff call — live walkthrough and Telegram bot delivery (Day 6)',
      '7-day support period for tweaks and questions'
    ],
    suitable: [
      'Seamen and maritime workers — automate tasks while at sea',
      'Creators and freelancers — auto-research, content ideas, client comms',
      'Anyone testing AI automation for one specific use case',
      'Those replacing manual, repetitive daily tasks'
    ]
  },
  {
    id: 'openclaw-business',
    title: 'AI Automation — Business Command Center',
    icon: '🦾',
    price: '$1,497 one-time',
    duration: '5–7 day setup',
    description: 'Run your entire operation through one AI agent. Three fully configured contexts, 20+ automations, and secure remote access — replacing a $2,000/mo VA at a one-time fee.',
    features: [
      'Everything in Autopilot Starter, plus:',
      '3 specialized contexts configured (choose any 3: Trading, Personal, Business, Amazon, WebDev, Research)',
      '20 custom automation workflows',
      'Multi-context switching ("Switch to business mode")',
      'Tailscale secure remote access from anywhere',
      'Skills integration — GitHub, Google Workspace, Slack, Gmail, and more',
      'Custom workspace organization',
      '60-minute strategy and onboarding session',
      '2 follow-up optimization calls (first 30 days)',
      '30-day priority support with 4-hour response time',
      '30-day "It Works Or You Don\'t Pay" guarantee'
    ],
    process: [
      'Welcome email + pre-setup questionnaire (Day 0)',
      'Kickoff strategy call — map workflows and select 3 contexts (Day 1–2)',
      'Remote installation, context configuration, and tool integrations (Day 3–5)',
      'Build and test 20 automation workflows',
      'Handoff call — live walkthrough, Telegram bot, and documentation (Day 6)',
      '30-day support with 2 optimization follow-up calls'
    ],
    suitable: [
      'Freelancers and small business owners',
      'E-commerce sellers managing multiple SKUs',
      'Local service businesses — lead follow-up, scheduling, review monitoring',
      'Agencies coordinating multiple client projects'
    ]
  },
  {
    id: 'openclaw-enterprise',
    title: 'AI Automation — Enterprise Autopilot',
    icon: '🚀',
    price: '$4,997 one-time + $297/month support',
    duration: '7–14 day setup',
    description: 'White-glove setup of all 6 AI contexts with custom skill development, 50+ automations, team access, and ongoing optimization. Replaces 2–3 VAs ($6K/mo) and saves 20+ hours per week.',
    features: [
      'Everything in Business Command Center, plus:',
      'All 6 contexts fully configured and integrated (Trading, Personal, Business, Amazon, WebDev, Research)',
      '50+ custom automation workflows',
      'Custom skill development — we build what you need',
      'Team access for up to 5 Telegram users',
      'Unlimited tool integrations (Zapier, Make, custom APIs)',
      'Monthly performance reports',
      'Quarterly strategy sessions',
      'Dedicated Slack channel',
      'Ongoing system maintenance and new automations',
      'Priority support with 4-hour SLA',
      'Team training for up to 5 people',
      '2-hour deep-dive onboarding and training session',
      '30-day "It Works Or You Don\'t Pay" guarantee'
    ],
    process: [
      'Welcome email + pre-setup questionnaire (Day 0)',
      'Deep-dive kickoff call — full workflow audit and automation roadmap (Day 1–2)',
      'Remote installation of all 6 contexts and custom skills development (Day 3–10)',
      'Build and test 50+ automation workflows with live data',
      '2-hour handoff call — team training and live walkthrough (Day 11–14)',
      'Ongoing monthly reports, quarterly strategy sessions, and priority support'
    ],
    suitable: [
      'Agencies and dev shops managing high-volume client work',
      'E-commerce brands with complex multi-channel operations',
      'High-volume crypto traders managing 6-figure portfolios',
      'Businesses ready to replace 2–3 virtual assistants with AI'
    ]
  }
];

// Helper function to get service by ID
export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

// Helper function to get all service IDs
export const getServiceIds = (): string[] => {
  return services.map(service => service.id);
};
