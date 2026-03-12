'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, external, children, ...props }, ref) => {
    const baseStyles = cn(
      'relative inline-flex items-center justify-center font-medium tracking-wider uppercase transition-all duration-300 ease-out',
      'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-near-black',
      {
        // Variants
        'border border-gold/60 text-gold hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_20px_rgba(201,169,98,0.2)] focus-visible:ring-gold':
          variant === 'primary',
        'border border-off-white/30 text-off-white hover:bg-off-white/5 hover:border-off-white/60 focus-visible:ring-off-white':
          variant === 'secondary',
        'bg-gold border border-gold text-near-black hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,169,98,0.4)] focus-visible:ring-gold':
          variant === 'solid',
        // Sizes
        'px-6 py-2 text-xs': size === 'sm',
        'px-8 py-3 text-sm': size === 'md',
        'px-10 py-4 text-base': size === 'lg',
      },
      className
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseStyles}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={baseStyles}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={baseStyles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
