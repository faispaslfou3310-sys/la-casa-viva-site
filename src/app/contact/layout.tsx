import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | LA CASA VIVA',
  description: 'Get in touch with La Casa Viva for partnerships, bookings, and inquiries.',
  openGraph: {
    title: 'Contact | LA CASA VIVA',
    description: 'Get in touch with La Casa Viva for partnerships, bookings, and inquiries.',
    images: ['/og-image.jpg'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
