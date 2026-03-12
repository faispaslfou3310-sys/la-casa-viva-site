# LA CASA VIVA - Official Website

A premium, elegant website for La Casa Viva - curated nightlife experiences in Casablanca.

## 🎨 Design

- **Theme**: Dark, minimal, premium aesthetic
- **Colors**: Near-black background, off-white text, gold accents
- **Typography**: Inter (sans-serif) + Playfair Display (display)
- **Animations**: Subtle fade-in and hover effects using Framer Motion

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: Netlify Forms
- **Deployment**: Netlify / Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/lacasaviva/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Netlify

1. Connect your repository to Netlify
2. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
3. Enable Netlify Forms in your dashboard
4. Deploy!

### Vercel

1. Connect your repository to Vercel
2. Vercel will auto-detect Next.js settings
3. For forms, create API routes (see `/app/api/` folder)
4. Deploy!

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── chapter-i/         # Chapter I event page
│   ├── bus/               # Bus Waitlist page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy Policy
│   ├── terms/             # Terms & Conditions
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── fade-in.tsx
│   │   ├── input.tsx
│   │   └── section.tsx
│   ├── layout/            # Layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── language-switch.tsx
│   └── home/              # Home page sections
│       ├── hero-section.tsx
│       ├── about-section.tsx
│       ├── what-we-do-section.tsx
│       ├── signature-section.tsx
│       └── featured-chapter-section.tsx
└── lib/
    ├── constants.ts       # Configuration constants
    ├── translations.ts    # i18n translations (EN/FR)
    ├── language-context.tsx # Language provider
    └── utils.ts           # Utility functions
```

## ⚙️ Configuration

Edit `src/lib/constants.ts` to update:

- Event date and venue
- Ticket URL (billeteries.ma)
- Artists and their Instagram links
- Contact information (WhatsApp, email)
- Social media links

```typescript
// Example
export const EVENT_DATE = 'Saturday 28 March 2026';
export const VENUE_NAME = 'Gaia Beach';
export const TICKETS_URL = 'https://billeteries.ma';
```

## 🌐 Internationalization

The site supports English and French with persistent language selection.

- Translations are in `src/lib/translations.ts`
- Language preference is stored in localStorage
- Add new languages by extending the translations object

## 📝 Netlify Forms Setup

The site uses Netlify Forms for:
- Bus Waitlist applications
- Contact form submissions

Forms are automatically detected by Netlify. To view submissions:
1. Go to your Netlify dashboard
2. Navigate to Forms
3. Select the form (bus-waitlist or contact)

### Honeypot Anti-Spam

Both forms include honeypot fields for spam protection.

## 🎭 Adding Future Chapters

To add Chapter II or future events:

1. Create a new folder: `src/app/chapter-ii/`
2. Copy the Chapter I page structure
3. Update constants in `constants.ts`
4. Add translations in `translations.ts`
5. Update navigation links

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  gold: {
    DEFAULT: '#c9a962',
    light: '#d4b978',
    dark: '#a68b4b',
  },
  // ...
}
```

### Fonts
Fonts are loaded from Google Fonts in `layout.tsx`. Modify the font families as needed.

## 📄 License

© 2026 La Casa Viva. All rights reserved.

---

Built with ❤️ for premium nightlife experiences.
