'use client';

import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  number?: string;
}

export function Section({ children, className, id, number }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('relative py-section px-6 md:px-12 lg:px-24', className)}
    >
      {number && (
        <span className="section-number select-none" aria-hidden="true">
          {number}
        </span>
      )}
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export function SectionTitle({ children, className, as: Tag = 'h2' }: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        'font-display text-section text-off-white tracking-wide',
        className
      )}
    >
      {children}
    </Tag>
  );
}

interface SectionSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionSubtitle({ children, className }: SectionSubtitleProps) {
  return (
    <p
      className={cn(
        'text-gold uppercase tracking-[0.3em] text-sm font-medium',
        className
      )}
    >
      {children}
    </p>
  );
}

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto my-16',
        className
      )}
      aria-hidden="true"
    />
  );
}
