'use client';

import { Header, Footer } from '@/components/layout';
import { BookAnimation } from '@/components/home';
import { Section, FadeIn } from '@/components/ui';
import { useLanguage } from '@/lib/language-context';

export default function ChaptersPage() {
  const { language } = useLanguage();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <Section>
          <div className="text-center mb-12">
            <FadeIn>
              <p className="text-gold uppercase tracking-[0.4em] text-sm mb-4">
                LA CASA VIVA
              </p>
              <h1 className="font-display text-section text-off-white mb-4">
                {language === 'fr' ? 'Les Chapitres' : 'The Chapters'}
              </h1>
              <p className="text-muted text-lg max-w-xl mx-auto">
                {language === 'fr' 
                  ? 'Chaque chapitre raconte une nouvelle histoire. Découvrez nos expériences exclusives.'
                  : 'Each chapter tells a new story. Discover our exclusive experiences.'}
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <BookAnimation />
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  );
}
