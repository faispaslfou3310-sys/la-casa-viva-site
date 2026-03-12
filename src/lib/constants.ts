// ============================================
// LA CASA VIVA - Configuration Constants
// ============================================

// Event Information
export const EVENT_DATE = 'Saturday 28 March 2026';
export const EVENT_DATE_SHORT = 'March 28, 2026';
export const VENUE_NAME = 'Gaia Beach';
export const VENUE_LOCATION = 'Casablanca';
export const VENUE_FULL = `${VENUE_NAME} – ${VENUE_LOCATION}`;

// Tickets & Registration
export const TICKETS_URL = 'https://billeteries.ma';
export const BUS_APPLICATION_URL = 'https://resplendent-biscuit-7659e9.netlify.app/';
export const BUS_APPLICATION_DEADLINE = 'March 15, 2026';
export const BUS_SELECTION_DATE = 'March 17-18, 2026';

// Contact Information
export const CONTACT_EMAIL = 'contact@lacasaviva.com';
export const CONTACT_WHATSAPP = '+212600000000';
export const CONTACT_WHATSAPP_URL = `https://wa.me/${CONTACT_WHATSAPP.replace(/\+/g, '')}`;

// Social Media
export const SOCIAL_INSTAGRAM = 'https://www.instagram.com/lacasaviva';

// Artists Line-up
export const ARTISTS = [
  {
    name: 'Kasango',
    role: 'Headliner',
    instagram: 'https://www.instagram.com/kasangomusic/',
  },
  {
    name: 'Zari Music',
    role: 'Artist',
    instagram: 'https://www.instagram.com/zarimusiic/',
  },
  {
    name: 'Rayz',
    role: 'Artist',
    instagram: 'https://www.instagram.com/_rayz.ofc/',
  },
  {
    name: 'Nass',
    role: 'Artist',
    instagram: 'https://www.instagram.com/nass.ofcc/',
  },
];

// Brand
export const BRAND_NAME = 'LA CASA VIVA';
export const BRAND_TAGLINE = 'Premium nightlife experiences • Casablanca';
export const BRAND_SIGNATURE = 'Some doors open to places. Others open to experiences.';

// SEO
export const SEO = {
  defaultTitle: 'LA CASA VIVA | Premium Nightlife Experiences',
  defaultDescription: 'Curated premium nightlife experiences in Casablanca. Events, brand activations, and exclusive artist bookings.',
  siteUrl: 'https://lacasaviva.com',
  ogImage: '/og-image.jpg',
  twitterHandle: '@lacasaviva',
};

// Form Settings
export const FORM_NAMES = {
  busWaitlist: 'bus-waitlist',
  contact: 'contact',
};
