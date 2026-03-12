'use client';

import { useState } from 'react';
import { Instagram, MessageCircle, Mail, CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Header, Footer } from '@/components/layout';
import { Button, Input, Textarea, FadeIn, Section } from '@/components/ui';
import {
  FORM_NAMES,
  CONTACT_EMAIL,
  CONTACT_WHATSAPP_URL,
  SOCIAL_INSTAGRAM,
} from '@/lib/constants';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams();
      formBody.append('form-name', FORM_NAMES.contact);
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('message', formData.message);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const directContacts = [
    {
      icon: MessageCircle,
      label: t.contact.direct.whatsapp,
      href: CONTACT_WHATSAPP_URL,
    },
    {
      icon: Instagram,
      label: t.contact.direct.instagram,
      href: SOCIAL_INSTAGRAM,
    },
    {
      icon: Mail,
      label: t.contact.direct.email,
      href: `mailto:${CONTACT_EMAIL}`,
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">
        {/* Hidden form for Netlify */}
        <form name={FORM_NAMES.contact} data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message" />
        </form>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="min-h-[60vh] flex items-center justify-center px-6"
            >
              <div className="text-center max-w-lg">
                <div className="inline-flex items-center justify-center w-20 h-20 border border-gold/50 text-gold mb-8">
                  <CheckCircle2 size={40} />
                </div>
                <h1 className="font-display text-4xl text-off-white mb-4">
                  {t.contact.success.title}
                </h1>
                <p className="text-muted text-lg mb-8">
                  {t.contact.success.message}
                </p>
                <Button href="/" variant="primary">
                  <ArrowLeft size={16} className="mr-2" />
                  {t.contact.success.back}
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Section>
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-16">
                    <FadeIn>
                      <h1 className="font-display text-section text-off-white mb-4">
                        {t.contact.title}
                      </h1>
                      <p className="text-muted text-lg">
                        {t.contact.subtitle}
                      </p>
                    </FadeIn>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <FadeIn delay={0.2}>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <input type="hidden" name="form-name" value={FORM_NAMES.contact} />
                        <div className="hidden">
                          <input type="text" name="bot-field" />
                        </div>

                        <Input
                          label={t.contact.form.name}
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          error={errors.name}
                          required
                        />

                        <Input
                          label={t.contact.form.email}
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          error={errors.email}
                          required
                        />

                        <Textarea
                          label={t.contact.form.message}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          error={errors.message}
                          required
                        />

                        <Button
                          type="submit"
                          variant="solid"
                          size="lg"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting
                            ? t.contact.form.submitting
                            : t.contact.form.submit}
                        </Button>
                      </form>
                    </FadeIn>

                    {/* Direct Contact */}
                    <FadeIn delay={0.4}>
                      <div className="lg:pl-8">
                        <h2 className="font-display text-2xl text-off-white mb-8">
                          {t.contact.direct.title}
                        </h2>

                        <div className="space-y-4">
                          {directContacts.map((contact) => (
                            <a
                              key={contact.label}
                              href={contact.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-4 p-4 border border-white/10 bg-dark-gray/30 hover:border-gold/40 hover:bg-dark-gray/60 transition-all group"
                            >
                              <div className="p-3 border border-white/20 text-muted group-hover:text-gold group-hover:border-gold/50 transition-all">
                                <contact.icon size={20} />
                              </div>
                              <span className="text-off-white group-hover:text-gold transition-colors">
                                {contact.label}
                              </span>
                            </a>
                          ))}
                        </div>

                        <div className="mt-12 p-6 border border-gold/20 bg-gold/5">
                          <p className="text-muted text-sm leading-relaxed">
                            For partnership inquiries, artist bookings, or private event requests,
                            please reach out via email or WhatsApp. We typically respond within 24-48 hours.
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </Section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
