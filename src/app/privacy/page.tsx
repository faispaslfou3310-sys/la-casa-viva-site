'use client';

import { useLanguage } from '@/lib/language-context';
import { Header, Footer } from '@/components/layout';
import { Section, FadeIn } from '@/components/ui';
import { CONTACT_EMAIL, BRAND_NAME } from '@/lib/constants';

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">
        <Section>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h1 className="font-display text-section text-off-white mb-4">
                {t.legal.privacy.title}
              </h1>
              <p className="text-muted mb-12">{t.legal.privacy.lastUpdated}</p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="prose prose-invert prose-gold max-w-none space-y-8">
                <section>
                  <h2 className="font-display text-2xl text-off-white mb-4">
                    1. Introduction
                  </h2>
                  <p className="text-muted leading-relaxed">
                    {BRAND_NAME} ("we", "our", or "us") is committed to protecting your privacy.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard
                    your information when you visit our website or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl text-off-white mb-4">
                    2. Information We Collect
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    We may collect information about you in various ways, including:
                  </p>
                  <ul className="list-disc list-inside text-muted space-y-2">
                    <li>Personal data you voluntarily provide (name, email, phone number)</li>
                    <li>Information submitted through our forms (Bus Waitlist, Contact)</li>
                    <li>Ticket purchase information for verification purposes</li>
                    <li>Automatically collected data (IP address, browser type, device information)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl text-off-white mb-4">
                    3. How We Use Your Information
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-muted space-y-2">
                    <li>Process your event registrations and applications</li>
                    <li>Communicate with you about our events and services</li>
                    <li>Verify ticket purchases for exclusive experiences</li>
                    <li>Improve our website and user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl text-off-white mb-4">
                    4. Information Sharing
                  </h2>
                  <p className="text-muted leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties.
                    We may share information with trusted partners who assist us in operating
                    our website, conducting our business, or servicing you, provided they agree
                    to keep this information confidential.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl text-off-white mb-4">
                    5. Data Security
                  </h2>
                  <p className="text-muted leading-relaxed">
                    We implement appropriate technical and organizational security measures
                    to protect your personal information. However, no method of transmission
                    over the Internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl text-off-white mb-4">
                    6. Your Rights
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-muted space-y-2">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your personal data</li>
                    <li>Withdraw consent for data processing</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl text-off-white mb-4">
                    7. Contact Us
                  </h2>
                  <p className="text-muted leading-relaxed">
                    If you have questions about this Privacy Policy or wish to exercise your
                    rights, please contact us at{' '}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-gold hover:underline"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                </section>
              </div>
            </FadeIn>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
