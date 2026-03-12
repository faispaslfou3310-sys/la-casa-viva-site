'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import {
  HeroSection,
  AboutSection,
  WhatWeDoSection,
  SignatureSection,
  FeaturedChapterSection,
  BookAnimation,
} from '@/components/home';
import { useLanguage } from '@/lib/language-context';

export default function HomePage() {
  const [showBook, setShowBook] = useState(true);
  const { language } = useLanguage();

  return (
    <>
      <AnimatePresence mode="wait">
        {showBook ? (
          <motion.div
            key="book"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-near-black flex flex-col"
          >
            {/* Minimal Header for Book View */}
            <div className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-xl md:text-2xl text-off-white tracking-[0.2em]">
                  LA CASA VIVA
                </span>
                <button
                  onClick={() => setShowBook(false)}
                  className="text-sm text-muted hover:text-gold transition-colors uppercase tracking-wider"
                >
                  {language === 'fr' ? 'Passer' : 'Skip'}
                </button>
              </div>
            </div>

            {/* Book Section */}
            <div className="flex-1 flex items-center justify-center px-6 py-24">
              <div className="w-full max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center mb-8"
                >
                  <p className="text-gold uppercase tracking-[0.4em] text-sm mb-2">
                    {language === 'fr' ? 'Bienvenue' : 'Welcome'}
                  </p>
                  <h1 className="font-display text-3xl md:text-5xl text-off-white tracking-wider">
                    {language === 'fr' ? 'Les Chapitres' : 'The Chapters'}
                  </h1>
                </motion.div>
                
                <BookAnimation />

                {/* Continue Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="text-center mt-12"
                >
                  <button
                    onClick={() => setShowBook(false)}
                    className="group inline-flex items-center gap-2 text-muted hover:text-gold transition-colors"
                  >
                    <span className="text-sm uppercase tracking-wider">
                      {language === 'fr' ? 'Continuer vers le site' : 'Continue to site'}
                    </span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <main>
              <HeroSection />
              <AboutSection />
              <WhatWeDoSection />
              <SignatureSection />
              <FeaturedChapterSection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
