/**
 * Google Analytics 4 Integration
 * 
 * Provides analytics tracking for:
 * - Page views
 * - Custom events
 * - User engagement metrics
 * - Conversion tracking
 */

// GA4 Measurement ID - Replace with actual ID in production
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

// Type declarations for gtag
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Initialize Google Analytics 4
 * Call this once when the app loads
 */
export const initGA = (): void => {
  if (typeof window === 'undefined') return;
  
  // Don't initialize if already loaded or no valid ID
  if (typeof window.gtag === 'function' || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    if (import.meta.env.DEV) {
      console.log('GA4: Skipped (no valid measurement ID or already loaded)');
    }
    return;
  }

  // Create script element for gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    send_page_view: true
  });

  if (import.meta.env.DEV) {
    console.log('GA4: Initialized with ID:', GA_MEASUREMENT_ID);
  }
};

/**
 * Track page views
 * Call this on route changes
 */
export const trackPageView = (path: string, title?: string): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title || document.title
  });

  if (import.meta.env.DEV) {
    console.log('GA4: Page view tracked -', path);
  }
};

/**
 * Track custom events
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', eventName, eventParams);

  if (import.meta.env.DEV) {
    console.log('GA4: Event tracked -', eventName, eventParams);
  }
};

/**
 * Pre-defined event tracking functions
 */
export const analytics = {
  // Contact form events
  contactFormStart: () => trackEvent('form_start', { form_name: 'contact' }),
  contactFormSubmit: () => trackEvent('form_submit', { form_name: 'contact' }),
  
  // CTA clicks
  ctaClick: (ctaName: string, location: string) => 
    trackEvent('cta_click', { cta_name: ctaName, location }),
  
  // Service page interactions
  serviceView: (serviceName: string) => 
    trackEvent('service_view', { service_name: serviceName }),
  
  // Blog interactions
  blogPostView: (postTitle: string, category: string) =>
    trackEvent('blog_view', { post_title: postTitle, category }),
  
  // Newsletter signup
  newsletterSignup: () => trackEvent('newsletter_signup'),
  
  // External link clicks
  externalLinkClick: (url: string) =>
    trackEvent('external_link_click', { url }),
  
  // Error tracking
  errorOccurred: (errorType: string, errorMessage: string) =>
    trackEvent('error', { error_type: errorType, error_message: errorMessage })
};

export default { initGA, trackPageView, trackEvent, analytics };
