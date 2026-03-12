'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { LanguageSwitch } from './language-switch';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', labelKey: 'home' },
  { href: '/chapters', labelKey: 'chapters' },
  { href: '/chapter-i', labelKey: 'chapterI' },
  { href: '/contact', labelKey: 'contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="absolute inset-0 bg-gradient-to-b from-near-black via-near-black/80 to-transparent pointer-events-none" />
      
      <nav className="relative px-6 md:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl md:text-2xl text-off-white tracking-[0.2em] hover:text-gold transition-colors"
        >
          LA CASA VIVA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-wider text-muted hover:text-off-white transition-colors"
            >
              {t.nav[link.labelKey as keyof typeof t.nav]}
            </Link>
          ))}
          <LanguageSwitch />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-off-white hover:text-gold transition-colors"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-near-black border-b border-white/10 md:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg uppercase tracking-wider text-muted hover:text-off-white transition-colors"
                >
                  {t.nav[link.labelKey as keyof typeof t.nav]}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <LanguageSwitch />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
