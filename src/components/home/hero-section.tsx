'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Button, FadeIn } from '@/components/ui';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-dark-gray via-near-black to-black" />
      
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[100px] animate-pulse animation-delay-400" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main title */}
        <FadeIn delay={0.2}>
          <h1 className="font-display text-hero text-off-white tracking-[0.1em] mb-6">
            {t.home.hero.title}
          </h1>
        </FadeIn>

        {/* Decorative line */}
        <FadeIn delay={0.4}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-gold/50" />
            <span className="text-gold text-2xl">✦</span>
            <span className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.5}>
          <p className="text-muted text-lg md:text-xl uppercase tracking-[0.3em] mb-12">
            {t.home.hero.subtitle}
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.7}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button href="/chapter-i" variant="primary" size="lg">
              {t.home.hero.cta1}
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              {t.home.hero.cta2}
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-muted hover:text-gold transition-colors"
          aria-label="Scroll to about section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
