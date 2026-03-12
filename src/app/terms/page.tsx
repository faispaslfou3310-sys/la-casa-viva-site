'use client';

import { useLanguage } from '@/lib/language-context';
import { Header, Footer } from '@/components/layout';
import { Section, FadeIn } from '@/components/ui';
import { CONTACT_EMAIL, BRAND_NAME } from '@/lib/constants';

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">
        <Section>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h1 className="font-display text-section text-off-white mb-4">
                {t.legal.terms.title}
              </h1>
              <p className="text-muted mb-12">{t.legal.terms.lastUpdated}</p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="prose prose-invert prose-gold max-w-none space-y-8">
                <section>
                  <h2 className="font-display text-2xl text-off-white mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-muted leading-relaxed">
                    By accessing and using the {BRAND_NAME} website and services, you accept
                    and agree to be bound by these Terms & Conditions. If you do not agree
                    to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl text-off-white mb-4">
                    2. Event Participation
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    By attending our events, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-muted space-y-2">
                    <li>Follow all venue rules and regulations</li>
                    <li>Present valid identification when required</li>
                    <li>Behave respectfully towards other attendees and staff</li>
                    <li>Accept that photography and video may be taken at events</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl text-off-white mb-4">
                    3. Ticket Policy
                  </h2>
                  <p className="text-muted leading-relaxed">
                    All ticket sales are final. Tickets are non-refundable and non-transferable
                    unless otherwise stated. {BRAND_NAME} reserves the right to refuse entry
                    or remove any person from an event without refund for violation of these
                    terms or venue policies.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl text-off-white mb-4">
                    4. Bus Experience Selection
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    Regarding the Bus Experience waitlist:
                  </p>
                  <ul className="list-disc list-inside text-muted space-y-2">
                    <li>A valid ticket purchase is required to apply</li>
                    <li>Submission does not guarantee selection</li>
                    <li>Selection decisions are final and at our sole discretion</li>
                    <li>Selected participants will be notified via provided contact information</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl text-off-white mb-4">
                    5. Intellectual Property
                  </h2>
                  <p className="text-muted leading-relaxed">
                    All content on this website, including but not limited to text, graphics,
                    logos, images, and software, is the property of {BRAND_NAME} and is
                    protected by intellectual property laws. Unauthorized use is prohibited.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl text-off-white mb-4">
                    6. Limitation of Liability
                  </h2>
                  <p className="text-muted leading-relaxed">
                    {BRAND_NAME} shall not be liable for any indirect, incidental, special,
                    consequential, or punitive damages arising from your use of our services
                    or attendance at our events. Our total liability shall not exceed the
                    amount paid for the specific service or event in question.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl text-off-white mb-4">
                    7. Event Changes
                  </h2>
                  <p className="text-muted leading-relaxed">
                    {BRAND_NAME} reserves the right to modify event details, including but
                    not limited to lineup, venue, date, and time. We will make reasonable
                    efforts to notify ticket holders of significant changes.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl text-off-white mb-4">
                    8. Governing Law
                  </h2>
                  <p className="text-muted leading-relaxed">
                    These Terms & Conditions shall be governed by and construed in accordance
                    with the laws of Morocco. Any disputes shall be subject to the exclusive
                    jurisdiction of the courts of Casablanca.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl text-off-white mb-4">
                    9. Contact
                  </h2>
                  <p className="text-muted leading-relaxed">
                    For questions about these Terms & Conditions, please contact us at{' '}
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
