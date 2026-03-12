'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Section, FadeIn } from '@/components/ui';

export function SignatureSection() {
  const { t } = useLanguage();

  return (
    <Section className="py-32 md:py-40">
      <FadeIn>
        <div className="relative text-center">
          {/* Large decorative quote marks */}
          <span 
            className="absolute -top-8 left-1/2 -translate-x-1/2 text-gold/10 text-[10rem] font-display leading-none select-none"
            aria-hidden="true"
          >
            "
          </span>
          
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10"
          >
            <p className="font-display text-3xl md:text-5xl lg:text-6xl text-off-white tracking-wide leading-tight italic">
              {t.home.signature.text}
            </p>
          </motion.blockquote>

          {/* Decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
          />
        </div>
      </FadeIn>
    </Section>
  );
}
