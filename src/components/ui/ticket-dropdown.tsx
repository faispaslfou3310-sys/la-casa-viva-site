'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TICKETS = [
  { id: 1, name: 'Early Bird', price: '500', suffix: 'DHS', available: true },
  { id: 2, name: 'Regular', price: '800', suffix: 'DHS', available: true },
  { id: 3, name: 'Last Call', price: '1200', suffix: 'DHS', available: true },
  { id: 4, name: 'On-site', price: '1200', suffix: 'DHS', available: true },
];

interface TicketDropdownProps {
  label: string;
}

export function TicketDropdown({ label }: TicketDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative inline-block">
      {/* Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative inline-flex items-center justify-center font-display text-base tracking-[0.15em] uppercase bg-gold text-near-black px-12 py-4 border-2 border-gold hover:bg-gold-light transition-all duration-300"
      >
        <span className="absolute inset-1 border border-near-black/20 pointer-events-none" />
        {label}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-3 text-sm"
        >
          ▼
        </motion.span>
      </motion.button>

      {/* Dropdown parchemin */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scaleY: 0 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -20, scaleY: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top center' }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[320px] z-50"
          >
            {/* Parchemin container */}
            <div className="relative bg-[#0c0a08] border-2 border-gold/60 shadow-[0_25px_80px_rgba(0,0,0,0.9)]">
              
              {/* Coins ornementaux */}
              <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-gold" />
              <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-gold" />
              <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-gold" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-gold" />

              {/* Header */}
              <div className="pt-6 pb-4 text-center border-b border-gold/30">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="w-8 h-px bg-gold/50" />
                  <span className="text-gold">⚜</span>
                  <span className="w-8 h-px bg-gold/50" />
                </div>
                <h3 className="font-display text-gold text-2xl tracking-[0.2em] uppercase">
                  Tickets
                </h3>
                <p className="text-gold/50 text-xs tracking-[0.25em] uppercase mt-1">
                  Choose your pass
                </p>
              </div>

              {/* Tickets list */}
              <div className="py-2">
                {TICKETS.map((ticket, index) => (
                  <motion.a
                    key={ticket.id}
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.08 }}
                    className="group flex items-center justify-between px-6 py-4 hover:bg-gold/10 transition-all duration-200 border-b border-gold/10 last:border-b-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gold/40 group-hover:text-gold transition-colors">✦</span>
                      <span className="font-display text-off-white text-lg tracking-wide group-hover:text-gold transition-colors">
                        {ticket.name}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-gold text-xl">{ticket.price}</span>
                      <span className="text-gold/50 text-xs">{ticket.suffix}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Footer */}
              <div className="py-4 text-center border-t border-gold/30">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-6 h-px bg-gold/30" />
                  <span className="text-gold/40 text-xs tracking-[0.2em]">LA CASA VIVA</span>
                  <span className="w-6 h-px bg-gold/30" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
