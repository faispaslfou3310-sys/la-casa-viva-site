import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | LA CASA VIVA',
  description: 'Terms and Conditions for La Casa Viva events and services.',
  openGraph: {
    title: 'Terms & Conditions | LA CASA VIVA',
    description: 'Terms and Conditions for La Casa Viva events and services.',
    images: ['/og-image.jpg'],
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
