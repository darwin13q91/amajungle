/**
 * Web Vitals Monitoring
 * 
 * Tracks Core Web Vitals (CLS, INP, LCP, FCP, TTFB)
 * and logs them in development or sends to analytics in production
 */

import { onCLS, onINP, onLCP, onFCP, onTTFB, type Metric } from 'web-vitals';

// Analytics reporting function
const sendToAnalytics = (metric: Metric): void => {
  // In production, send to your analytics service
  // Example: Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
  
  // In development, log to console
  if (import.meta.env.DEV) {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
    });
  }
};

// Color coding for console logs
const getRatingColor = (rating: string): string => {
  switch (rating) {
    case 'good': return '✅';
    case 'needs-improvement': return '⚠️';
    case 'poor': return '❌';
    default: return '📊';
  }
};

// Enhanced logging for development
const logMetric = (metric: Metric): void => {
  const color = getRatingColor(metric.rating);
  const value = metric.name === 'CLS' 
    ? metric.value.toFixed(3) 
    : Math.round(metric.value);
  
  console.log(
    `${color} ${metric.name}: ${value}ms (${metric.rating})`,
    metric
  );
};

// Initialize web vitals tracking
export const initWebVitals = (): void => {
  const reportHandler = import.meta.env.DEV ? logMetric : sendToAnalytics;
  
  // Core Web Vitals
  onCLS(reportHandler);  // Cumulative Layout Shift
  onINP(reportHandler);  // Interaction to Next Paint (replaces FID)
  onLCP(reportHandler);  // Largest Contentful Paint
  
  // Additional metrics
  onFCP(reportHandler);  // First Contentful Paint
  onTTFB(reportHandler); // Time to First Byte
};

// Thresholds for good performance
export const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },      // ms
  INP: { good: 200, poor: 500 },        // ms (replaces FID)
  CLS: { good: 0.1, poor: 0.25 },       // score
  FCP: { good: 1800, poor: 3000 },      // ms
  TTFB: { good: 800, poor: 1800 },      // ms
};

// Get performance summary
export const getPerformanceSummary = (): Record<string, any> => {
  if (typeof window === 'undefined' || !window.performance) {
    return {};
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  return {
    domContentLoaded: Math.round(navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart),
    loadComplete: Math.round(navigation?.loadEventEnd - navigation?.loadEventStart),
    domInteractive: Math.round(navigation?.domInteractive),
    firstPaint: Math.round(performance.getEntriesByName('first-paint')[0]?.startTime || 0),
    firstContentfulPaint: Math.round(performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0),
  };
};

export default initWebVitals;
