'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'uppercase tracking-wider transition-colors',
          language === 'en'
            ? 'text-gold'
            : 'text-muted hover:text-off-white'
        )}
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <span className="text-white/20">/</span>
      <button
        onClick={() => setLanguage('fr')}
        className={cn(
          'uppercase tracking-wider transition-colors',
          language === 'fr'
            ? 'text-gold'
            : 'text-muted hover:text-off-white'
        )}
        aria-label="Passer en français"
        aria-pressed={language === 'fr'}
      >
        FR
      </button>
    </div>
  );
}
