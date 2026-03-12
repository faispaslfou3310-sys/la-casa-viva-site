'use client';

import Link from 'next/link';
import { Instagram, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Header, Footer } from '@/components/layout';
import { Button, FadeIn, Section, StaggerContainer, StaggerItem, TicketDropdown } from '@/components/ui';
import {
  EVENT_DATE,
  VENUE_FULL,
  TICKETS_URL,
  BUS_APPLICATION_URL,
  ARTISTS,
} from '@/lib/constants';

export default function ChapterIPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-radial from-dark-gray via-near-black to-black" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px]" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <FadeIn>
              <p className="text-gold uppercase tracking-[0.4em] text-sm mb-6">
                {t.chapter.header}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-off-white tracking-[0.15em] mb-8">
                {t.chapter.subtitle}
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center gap-4 mb-10">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-px bg-gold/50" />
                  <span className="text-gold">✦</span>
                  <span className="w-12 h-px bg-gold/50" />
                </div>
                <p className="text-muted text-lg uppercase tracking-wider">
                  {EVENT_DATE}
                </p>
                <p className="text-off-white/80 text-lg">
                  {VENUE_FULL}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="inline-block px-4 py-2 border border-gold/40 text-gold text-sm uppercase tracking-widest">
                {t.chapter.ticketsOnly}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Line-up Section */}
        <Section number="01" className="bg-dark-gray/30">
          <FadeIn>
            <h2 className="font-display text-section text-off-white text-center mb-16">
              {t.chapter.lineup.title}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARTISTS.map((artist, index) => (
              <StaggerItem key={artist.name}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="relative group"
                >
                  <div className="border border-white/10 bg-dark-gray/50 p-8 text-center transition-all duration-300 group-hover:border-gold/40 group-hover:bg-dark-gray/80">
                    {/* Headliner badge */}
                    {artist.role === 'Headliner' && (
                      <span className="absolute top-4 left-4 text-xs text-gold uppercase tracking-wider">
                        {t.chapter.lineup.headliner}
                      </span>
                    )}

                    <h3 className="font-display text-2xl md:text-3xl text-off-white mb-4">
                      {artist.name}
                    </h3>

                    <a
                      href={artist.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted hover:text-gold transition-colors text-sm"
                    >
                      <Instagram size={16} />
                      <span>Instagram</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>

        {/* Bus Experience Section */}
        <Section number="02">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
                {t.chapter.bus.subtitle}
              </p>
              <h2 className="font-display text-section text-off-white mb-8">
                {t.chapter.bus.title}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-muted text-xl mb-10">
                {t.chapter.bus.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {t.chapter.bus.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 border border-white/10 text-muted text-sm uppercase tracking-wider"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Button href={BUS_APPLICATION_URL} external variant="primary" size="lg">
                {t.chapter.bus.cta}
                <ExternalLink size={16} className="ml-2" />
              </Button>
            </FadeIn>
          </div>
        </Section>

        {/* Tickets Section */}
        <Section className="bg-gradient-to-b from-near-black via-dark-gray/30 to-near-black">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="font-display text-section text-off-white mb-8">
                {t.chapter.tickets.title}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <TicketDropdown label={t.chapter.tickets.cta} />
                <Button href={BUS_APPLICATION_URL} external variant="secondary" size="lg">
                  {t.chapter.bus.cta}
                  <ExternalLink size={16} className="ml-2" />
                </Button>
              </div>
            </FadeIn>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
