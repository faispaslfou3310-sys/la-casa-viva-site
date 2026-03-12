import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | LA CASA VIVA',
  description: 'Privacy Policy for La Casa Viva website and services.',
  openGraph: {
    title: 'Privacy Policy | LA CASA VIVA',
    description: 'Privacy Policy for La Casa Viva website and services.',
    images: ['/og-image.jpg'],
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
