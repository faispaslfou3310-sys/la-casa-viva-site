'use client';

import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Section, SectionSubtitle, Button, FadeIn } from '@/components/ui';
import { EVENT_DATE_SHORT, VENUE_FULL } from '@/lib/constants';

export function FeaturedChapterSection() {
  const { t, language } = useLanguage();

  return (
    <Section className="bg-gradient-to-b from-near-black via-dark-gray/50 to-near-black">
      <div className="text-center mb-12">
        <FadeIn>
          <SectionSubtitle className="mb-4">{t.home.featured.title}</SectionSubtitle>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Featured Card */}
          <div className="relative border border-gold/30 bg-dark-gray/40 backdrop-blur-sm overflow-hidden group">
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/50" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/50" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/50" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/50" />

            <div className="p-12 md:p-16 text-center">
              <h3 className="font-display text-5xl md:text-7xl text-off-white tracking-[0.15em] mb-6">
                {t.home.featured.subtitle}
              </h3>
              
              <p className="text-muted text-lg mb-4">
                {t.home.featured.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gold/80 uppercase tracking-wider mb-10">
                <span>{EVENT_DATE_SHORT}</span>
                <span className="hidden sm:block">•</span>
                <span>{VENUE_FULL}</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  href="/chapter-i" 
                  variant="primary" 
                  size="lg"
                  className="group-hover:shadow-[0_0_30px_rgba(201,169,98,0.3)]"
                >
                  {t.home.featured.cta}
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  href="/chapters" 
                  variant="secondary" 
                  size="lg"
                >
                  <BookOpen size={18} className="mr-2" />
                  {language === 'fr' ? 'Voir tous les chapitres' : 'View all chapters'}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </FadeIn>
    </Section>
  );
}
