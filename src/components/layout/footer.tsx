'use client';

import Link from 'next/link';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import {
  CONTACT_EMAIL,
  CONTACT_WHATSAPP_URL,
  SOCIAL_INSTAGRAM,
} from '@/lib/constants';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/10 bg-near-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="block">
              <h3 className="font-display text-2xl text-off-white tracking-[0.15em]">
                LA CASA VIVA
              </h3>
            </Link>
            <p className="text-sm text-gold uppercase tracking-wider">
              {t.footer.tagline}
            </p>
          </div>

          {/* Powered By */}
          <div className="flex flex-col items-start md:items-center justify-center">
            <p className="text-xs text-muted uppercase tracking-wider mb-2">
              {t.footer.poweredBy}
            </p>
            <span className="text-off-white font-bold tracking-wider">RED BULL</span>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/20 text-muted hover:text-off-white hover:border-gold/50 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/20 text-muted hover:text-off-white hover:border-gold/50 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="p-2 border border-white/20 text-muted hover:text-off-white hover:border-gold/50 transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-muted hover:text-off-white transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted hover:text-off-white transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted hover:text-off-white transition-colors"
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
