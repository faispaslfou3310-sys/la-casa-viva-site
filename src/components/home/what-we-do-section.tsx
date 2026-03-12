'use client';

import { Calendar, Sparkles, Music2 } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import {
  Section,
  SectionTitle,
  Card,
  CardTitle,
  CardDescription,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';

const iconMap = {
  events: Calendar,
  brand: Sparkles,
  artist: Music2,
};

export function WhatWeDoSection() {
  const { t } = useLanguage();

  const services = [
    {
      key: 'events',
      ...t.home.whatWeDo.events,
    },
    {
      key: 'brand',
      ...t.home.whatWeDo.brand,
    },
    {
      key: 'artist',
      ...t.home.whatWeDo.artist,
    },
  ];

  return (
    <Section className="bg-dark-gray/30">
      <div className="text-center mb-16">
        <SectionTitle>{t.home.whatWeDo.title}</SectionTitle>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {services.map((service) => {
          const Icon = iconMap[service.key as keyof typeof iconMap];
          return (
            <StaggerItem key={service.key}>
              <Card className="h-full text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 border border-gold/30 text-gold">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                </div>
                <CardTitle className="text-center">{service.title}</CardTitle>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
