import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Chapters | LA CASA VIVA',
  description: 'Discover all chapters of La Casa Viva - curated premium nightlife experiences in Casablanca.',
  openGraph: {
    title: 'The Chapters | LA CASA VIVA',
    description: 'Discover all chapters of La Casa Viva - curated premium nightlife experiences.',
    images: ['/og-image.jpg'],
  },
};

export default function ChaptersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
