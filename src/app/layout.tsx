import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { LanguageProvider } from '@/lib/language-context';
import { SEO } from '@/lib/constants';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://lacasaviva.ma'),
  title: {
    default: SEO.defaultTitle,
    template: '%s | LA CASA VIVA',
  },
  description: SEO.defaultDescription,
  keywords: ['nightlife', 'events', 'Casablanca', 'premium', 'party', 'music', 'La Casa Viva'],
  authors: [{ name: 'La Casa Viva' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'fr_FR',
    siteName: 'LA CASA VIVA',
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: 'LA CASA VIVA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [SEO.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <LanguageProvider>
          {/* Noise overlay for luxury feel */}
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
