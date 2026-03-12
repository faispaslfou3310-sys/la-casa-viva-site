'use client';

import { useLanguage } from '@/lib/language-context';
import { Section, SectionTitle, SectionDivider, FadeIn } from '@/components/ui';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <Section id="about" className="text-center">
      <FadeIn>
        <SectionTitle className="mb-8">{t.home.about.title}</SectionTitle>
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <p className="text-muted text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          {t.home.about.text}
        </p>
      </FadeIn>
      
      <SectionDivider className="mt-16" />
    </Section>
  );
}
