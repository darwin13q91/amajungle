// Centralized routing configuration to ensure consistency
export interface RouteConfig {
  path: string;
  label: string;
  component: string;
  title: string;
  description: string;
  showInNav?: boolean; // Optional flag to hide from navigation
}

export const routes: RouteConfig[] = [
  {
    path: 'home',
    label: 'Home',
    component: 'HomePage',
    title: 'Amajungle — Amazon Consulting & AI Automation',
    description: 'Expert Amazon FBA consulting and AI Automation Agency. 10+ years Amazon experience. 47 AI systems built. 30-day money-back guarantee.'
  },
  {
    path: 'about',
    label: 'About',
    component: 'AboutPage', 
    title: 'About Amajungle — Amazon & AI Experts',
    description: 'Founder-led team with 10+ years Amazon experience and 47 AI automation systems built. Personal attention, no middlemen.'
  },
  {
    path: 'services',
    label: 'Services',
    component: 'ServicesPage',
    title: 'Amazon Services | Amajungle',
    description: 'Amazon FBA consulting services: account setup, PPC management, listing optimization, account health, brand protection, and more.'
  },
  {
    path: 'blog',
    label: 'Blog',
    component: 'BlogPage',
    title: 'Amazon Seller Blog - Tips & Strategies | Amajungle',
    description: 'Expert tips, strategies, and industry updates to help you succeed on Amazon.',
    showInNav: true
  },
  {
    path: 'case-studies',
    label: 'Case Studies',
    component: 'CaseStudiesPage',
    title: 'Client Success Stories | Amajungle',
    description: 'Real results from real clients. See how we\'ve helped Amazon sellers achieve remarkable growth.',
    showInNav: true
  },
  {
    path: 'contact',
    label: 'Contact',
    component: 'ContactPage',
    title: 'Contact Amajungle - Get Started Today',
    description: 'Ready to grow your Amazon business? Contact us for a free consultation.'
  },
  {
    path: 'privacy',
    label: 'Privacy Policy',
    component: 'PrivacyPolicyPage',
    title: 'Privacy Policy - Amajungle',
    description: 'Learn how Amajungle collects, uses, and protects your personal data in compliance with Philippine Data Privacy Act.',
    showInNav: false
  },
  {
    path: 'terms',
    label: 'Terms of Service',
    component: 'TermsOfServicePage',
    title: 'Terms of Service - Amajungle',
    description: 'Terms and conditions for using Amajungle\'s Amazon consulting services.',
    showInNav: false
  }
];

// Helper functions for routing
export const getRouteByPath = (path: string): RouteConfig | undefined => {
  return routes.find(route => route.path === path);
};

export const getNavigationItems = () => {
  return routes
    .filter(route => route.showInNav !== false)
    .map(route => ({
      id: route.path,
      label: route.label,
      path: route.path
    }));
};

export const isValidRoute = (path: string): boolean => {
  return routes.some(route => route.path === path);
};
