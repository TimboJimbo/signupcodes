// Amazon Associates tracking configuration
export const AMAZON_ASSOCIATE_ID = 'signupcodes-20';

/**
 * Generate Amazon affiliate URL with Associate ID
 */
export function generateAmazonUrl(productId: string): string {
  return `https://www.amazon.com/dp/${productId}?tag=${AMAZON_ASSOCIATE_ID}`;
}

/**
 * Track affiliate link clicks for analytics
 */
export function trackAffiliateClick(productId: string, productTitle: string, category: string): void {
  // Send event to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'affiliate_click', {
      product_id: productId,
      product_title: productTitle,
      category: category,
      affiliate_program: 'amazon_associates'
    });
  }
}

/**
 * Enhanced affiliate URL with tracking parameters
 */
export function createTrackedAffiliateUrl(baseUrl: string, productId: string): string {
  const url = new URL(baseUrl);
  
  // Add Amazon Associate ID if it's an Amazon URL
  if (url.hostname.includes('amazon.com') || url.hostname.includes('amzn.to')) {
    url.searchParams.set('tag', AMAZON_ASSOCIATE_ID);
  }
  
  // Add UTM parameters for better tracking
  url.searchParams.set('utm_source', 'signupcodes');
  url.searchParams.set('utm_medium', 'affiliate');
  url.searchParams.set('utm_campaign', 'deals');
  url.searchParams.set('utm_content', productId);
  
  return url.toString();
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}