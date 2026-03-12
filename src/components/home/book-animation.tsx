'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Lock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

interface Chapter {
  number: string;
  title: string;
  subtitle?: string;
  available: boolean;
  href?: string;
  poweredBy?: {
    name: string;
    logo: string;
  };
}

const chapters: Chapter[] = [
  {
    number: 'I',
    title: 'Chapter I',
    subtitle: 'The Beginning',
    available: true,
    href: '/chapter-i',
    poweredBy: {
      name: 'Red Bull',
      logo: '/redbull-logo.png',
    },
  },
  {
    number: 'II',
    title: 'Chapter II',
    subtitle: 'Coming Soon',
    available: false,
  },
  {
    number: 'III',
    title: 'Chapter III',
    subtitle: 'Coming Soon',
    available: false,
  },
  {
    number: 'IV',
    title: 'Chapter IV',
    subtitle: 'Coming Soon',
    available: false,
  },
];

export function BookAnimation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Trigger book opening animation after mount
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className="relative w-full max-w-5xl mx-auto perspective-[2000px]">
      {/* Book Container */}
      <div className="relative aspect-[3/2] md:aspect-[2/1]">
        {/* Book Shadow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isOpen ? 0.5 : 0.3, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black/50 blur-3xl rounded-3xl transform translate-y-8"
        />

        {/* Book Base (Right Page - Always visible) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-br from-[#1a1815] via-[#0f0e0c] to-[#0a0908] rounded-r-lg border border-gold/20 overflow-hidden"
          style={{
            boxShadow: 'inset -10px 0 30px rgba(0,0,0,0.5), inset 2px 0 10px rgba(201,169,98,0.1)',
          }}
        >
          {/* Page texture */}
          <div className="absolute inset-0 opacity-5 bg-[url('/noise.svg')] bg-repeat" />
          
          {/* Gold edge accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold/40 via-gold/20 to-gold/40" />
          
          {/* Content */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-full p-8 md:p-12 flex flex-col"
              >
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gold/60 uppercase tracking-[0.4em] text-xs mb-2"
                  >
                    La Casa Viva
                  </motion.p>
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-display text-3xl md:text-5xl text-off-white tracking-wider"
                  >
                    {language === 'fr' ? 'Sommaire' : 'Contents'}
                  </motion.h2>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mt-4"
                  />
                </div>

                {/* Chapters List */}
                <div className="flex-1 space-y-4 md:space-y-6">
                  {chapters.map((chapter, index) => (
                    <motion.div
                      key={chapter.number}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.15 }}
                    >
                      {chapter.available ? (
                        <Link
                          href={chapter.href || '#'}
                          className="group flex items-center gap-4 md:gap-6 p-3 md:p-4 border border-gold/30 bg-gold/5 hover:bg-gold/10 hover:border-gold/50 transition-all duration-300"
                        >
                          {/* Chapter Number */}
                          <span className="font-display text-2xl md:text-4xl text-gold w-12 md:w-16 text-center">
                            {chapter.number}
                          </span>
                          
                          {/* Divider */}
                          <div className="w-px h-12 bg-gold/30" />
                          
                          {/* Chapter Info */}
                          <div className="flex-1">
                            <h3 className="font-display text-lg md:text-2xl text-off-white group-hover:text-gold transition-colors">
                              {chapter.title}
                            </h3>
                            {chapter.subtitle && (
                              <p className="text-muted text-sm">{chapter.subtitle}</p>
                            )}
                          </div>

                          {/* Powered By */}
                          {chapter.poweredBy && (
                            <div className="hidden md:flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5">
                              <span className="text-[10px] text-muted uppercase tracking-wider">
                                Powered by
                              </span>
                              <Image
                                src={chapter.poweredBy.logo}
                                alt={chapter.poweredBy.name}
                                width={60}
                                height={20}
                                className="object-contain"
                              />
                            </div>
                          )}

                          {/* Arrow */}
                          <ArrowRight 
                            size={20} 
                            className="text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" 
                          />
                        </Link>
                      ) : (
                        <div className="flex items-center gap-4 md:gap-6 p-3 md:p-4 border border-white/5 bg-white/[0.02] opacity-40 blur-[0.5px]">
                          {/* Chapter Number */}
                          <span className="font-display text-2xl md:text-4xl text-muted/50 w-12 md:w-16 text-center">
                            {chapter.number}
                          </span>
                          
                          {/* Divider */}
                          <div className="w-px h-12 bg-white/10" />
                          
                          {/* Chapter Info */}
                          <div className="flex-1">
                            <h3 className="font-display text-lg md:text-2xl text-muted/50">
                              {chapter.title}
                            </h3>
                            <p className="text-muted/30 text-sm">
                              {language === 'fr' ? 'Bientôt disponible' : 'Coming Soon'}
                            </p>
                          </div>

                          {/* Lock Icon */}
                          <Lock size={18} className="text-muted/30" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Powered By for Chapter I */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="md:hidden flex items-center justify-center gap-3 mt-6 pt-6 border-t border-white/10"
                >
                  <span className="text-xs text-muted uppercase tracking-wider">
                    Chapter I powered by
                  </span>
                  <Image
                    src="/redbull-logo.png"
                    alt="Red Bull"
                    width={60}
                    height={24}
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Left Page (Cover - Animated) */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpen ? -160 : 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.645, 0.045, 0.355, 1],
            delay: 0.3 
          }}
          style={{ 
            transformOrigin: 'left center',
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-0 z-10"
        >
          {/* Cover Front */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-[#1a1815] via-[#0f0e0c] to-[#080706] rounded-lg border border-gold/30 overflow-hidden backface-hidden"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8), inset 0 0 100px rgba(201,169,98,0.05)',
            }}
          >
            {/* Cover texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] bg-repeat" />
            
            {/* Gold border frame */}
            <div className="absolute inset-4 md:inset-8 border border-gold/20 rounded-sm" />
            <div className="absolute inset-6 md:inset-12 border border-gold/10 rounded-sm" />

            {/* Cover Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              {/* Decorative top element */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
                <span className="text-gold text-xl">✦</span>
                <span className="w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
              </div>

              {/* Logo */}
              <Image
                src="/logo.png"
                alt="La Casa Viva"
                width={250}
                height={150}
                className="object-contain mb-4"
                priority
              />

              {/* Subtitle */}
              <p className="text-gold/60 uppercase tracking-[0.3em] text-xs md:text-sm text-center">
                The Chapters
              </p>

              {/* Decorative bottom element */}
              <div className="flex items-center gap-3 mt-8">
                <span className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
                <span className="text-gold text-xl">✦</span>
                <span className="w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
              </div>
            </div>

            {/* Spine effect */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/50 to-transparent" />
          </div>

          {/* Cover Back (Inside of cover when opened) */}
          <div 
            className="absolute inset-0 bg-[#0a0908] rounded-lg backface-hidden"
            style={{ 
              transform: 'rotateY(180deg)',
              boxShadow: 'inset 10px 0 30px rgba(0,0,0,0.5)',
            }}
          >
            {/* Marbled paper texture effect */}
            <div className="absolute inset-0 opacity-5 bg-[url('/noise.svg')] bg-repeat" />
            <div className="absolute inset-0 bg-gradient-to-l from-gold/5 to-transparent" />
          </div>
        </motion.div>

        {/* Book Spine */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-[#0a0908] via-gold/20 to-[#0a0908] rounded-l-sm z-20"
          style={{
            boxShadow: '2px 0 10px rgba(0,0,0,0.5)',
          }}
        />
      </div>

      {/* Click to open hint (only before opening) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-muted text-sm"
          >
            {language === 'fr' ? 'Le livre s\'ouvre...' : 'The book is opening...'}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
