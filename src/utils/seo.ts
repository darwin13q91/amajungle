// SEO utility functions for dynamic meta tag management

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export const updateSEO = (seoData: SEOData) => {
  // Update document title
  document.title = seoData.title;

  // Update or create meta description
  updateMetaTag('name', 'description', seoData.description);
  
  // Update keywords if provided
  if (seoData.keywords) {
    updateMetaTag('name', 'keywords', seoData.keywords);
  }

  // Update Open Graph tags
  updateMetaTag('property', 'og:title', seoData.title);
  updateMetaTag('property', 'og:description', seoData.description);
  
  // Update Twitter tags
  updateMetaTag('property', 'twitter:title', seoData.title);
  updateMetaTag('property', 'twitter:description', seoData.description);

  // Update canonical URL if provided
  if (seoData.canonical) {
    updateCanonical(seoData.canonical);
  }

  // Update OG image if provided
  if (seoData.ogImage) {
    updateMetaTag('property', 'og:image', seoData.ogImage);
    updateMetaTag('property', 'twitter:image', seoData.ogImage);
  }
};

const updateMetaTag = (attribute: string, value: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${value}"]`);
  
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    element.setAttribute('content', content);
    document.getElementsByTagName('head')[0].appendChild(element);
  }
};

const updateCanonical = (url: string) => {
  let link = document.querySelector('link[rel="canonical"]');
  
  if (link) {
    link.setAttribute('href', url);
  } else {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.getElementsByTagName('head')[0].appendChild(link);
  }
};

// SEO data for each page
export const pageSEOData: Record<string, SEOData> = {
  home: {
    title: 'Amajungle - Your Amazon Success Partner',
    description: 'Expert Amazon marketplace services including FBA management, PPC advertising, listing optimization, and account setup. Dedicated Amazon success partners with competitive pricing.',
    keywords: 'Amazon FBA, Amazon PPC, Amazon SEO, Amazon marketplace, Amazon consulting, Amazon experts, e-commerce, Amazon account setup, Amazon listing optimization',
    canonical: 'https://amajungle.vercel.app/',
    ogImage: 'https://amajungle.vercel.app/ama-logo.svg'
  },
  about: {
    title: 'About Amajungle - Amazon Experts',
    description: 'Learn about our journey as experienced Amazon consultants dedicated to helping sellers succeed with personalized attention and competitive pricing.',
    keywords: 'About Amajungle, Amazon experts, Amazon consultants, Amazon success stories, professional Amazon services',
    canonical: 'https://amajungle.vercel.app/about',
    ogImage: 'https://amajungle.vercel.app/ama-logo.svg'
  },
  services: {
    title: 'Amazon Services - Competitive Pricing | Amajungle',
    description: 'Premium Amazon services including PPC management, listing optimization, account setup, and FBA services. Expert team with competitive pricing.',
    keywords: 'Amazon services, Amazon PPC management, Amazon listing optimization, Amazon account setup, Amazon FBA services, competitive pricing',
    canonical: 'https://amajungle.vercel.app/services',
    ogImage: 'https://amajungle.vercel.app/ama-logo.svg'
  },
  contact: {
    title: 'Contact Amajungle - Get Started Today',
    description: 'Ready to grow your Amazon business? Contact our expert team for a free consultation. Email hello@amajungle.com for premium Amazon services.',
    keywords: 'Contact Amajungle, Amazon consultation, Amazon experts contact, hello@amajungle.com, Amazon services inquiry',
    canonical: 'https://amajungle.vercel.app/contact',
    ogImage: 'https://amajungle.vercel.app/ama-logo.svg'
  }
};
