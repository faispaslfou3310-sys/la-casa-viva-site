import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chapter I | LA CASA VIVA',
  description: 'Chapter I - The inaugural event by La Casa Viva. Saturday 28 March 2026 at Gaia Beach – Casablanca. Featuring Kasango, Zari Music, Rayz & &TERLUDE.',
  openGraph: {
    title: 'Chapter I | LA CASA VIVA',
    description: 'Chapter I - The inaugural event by La Casa Viva. Saturday 28 March 2026 at Gaia Beach – Casablanca.',
    images: ['/og-image.jpg'],
  },
};

export default function ChapterILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
