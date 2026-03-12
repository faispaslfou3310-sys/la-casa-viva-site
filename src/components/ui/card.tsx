'use client';

import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'relative p-8 border border-white/10 bg-dark-gray/50 backdrop-blur-sm',
        hover && 'transition-all duration-300 ease-out hover:border-gold/30 hover:bg-dark-gray/80',
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3
      className={cn(
        'font-display text-xl md:text-2xl text-off-white mb-4',
        className
      )}
    >
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn('text-muted text-sm leading-relaxed', className)}>
      {children}
    </p>
  );
}
