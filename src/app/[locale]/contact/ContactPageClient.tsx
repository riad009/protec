'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MessageSquare, Phone, Mail, MapPin, Clock, Check, Send } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

interface ContactPageClientProps {
  dict: any;
  locale: string;
}

export default function ContactPageClient({ dict, locale }: ContactPageClientProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition-colors duration-200";

  return (
    <>
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn className="max-w-3xl">
              <Badge variant="default" icon={<MessageSquare className="w-3.5 h-3.5" />}>{dict.contactPage.hero.badge}</Badge>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                {dict.contactPage.hero.title}{' '}<span className="gradient-text">{dict.contactPage.hero.titleHighlight}</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl">{dict.contactPage.hero.subtitle}</p>
            </FadeIn>
            <FadeIn direction="right" className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/images/contact-hero.png"
                  alt="Contact us"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <FadeIn direction="left" className="lg:col-span-3">
              <GlassCard hover={false} padding="p-6 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto rounded-full bg-trust-50 flex items-center justify-center mb-6">
                      <Check className="w-8 h-8 text-trust-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{dict.contactPage.form.success}</h3>
                    <p className="text-gray-500">
                      {locale === 'fr' ? 'Nous vous répondrons dans les plus brefs délais.' : 'We will get back to you as soon as possible.'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">{dict.contactPage.form.name}</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Jean Dupont" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">{dict.contactPage.form.email}</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="jean@example.com" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">{dict.contactPage.form.phone}</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+41 XX XXX XX XX" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">{dict.contactPage.form.subject}</label>
                        <select name="subject" required value={formData.subject} onChange={handleChange} className={inputClass}>
                          <option value="">--</option>
                          {dict.contactPage.form.subjects.map((s: string) => (<option key={s} value={s}>{s}</option>))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">{dict.contactPage.form.message}</label>
                      <textarea name="message" required rows={5} value={formData.message} onChange={handleChange}
                        className={`${inputClass} resize-none`}
                        placeholder={locale === 'fr' ? 'Décrivez votre besoin...' : 'Describe your need...'} />
                    </div>
                    <Button type="submit" size="lg" className="w-full justify-center" icon={<Send className="w-5 h-5" />}>
                      {dict.contactPage.form.submit}
                    </Button>
                  </form>
                )}
              </GlassCard>
            </FadeIn>

            <FadeIn direction="right" className="lg:col-span-2">
              <div className="space-y-6">
                <a href="tel:+41787083877"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-trust-200 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-trust-50 flex items-center justify-center flex-shrink-0 group-hover:bg-trust-100 transition-colors duration-200">
                    <Phone className="w-6 h-6 text-trust-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{locale === 'fr' ? 'Téléphone' : 'Phone'}</h3>
                    <p className="text-trust-600 font-mono mt-1">{dict.contactPage.info.phone}</p>
                  </div>
                </a>
                <a href="mailto:info@protecsys.ch"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-brand-200 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors duration-200">
                    <Mail className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-brand-600 mt-1">{dict.contactPage.info.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{locale === 'fr' ? 'Adresse' : 'Address'}</h3>
                    <p className="text-gray-500 mt-1">{dict.contactPage.info.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{locale === 'fr' ? 'Horaires' : 'Business Hours'}</h3>
                    <p className="text-gray-500 mt-1">{dict.contactPage.info.hours}</p>
                    <p className="text-trust-600 text-sm mt-1">{dict.contactPage.info.emergency}</p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm aspect-video">
                  <div className="absolute inset-0 bg-gray-50 dot-pattern flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-brand-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Genève • Lausanne • Zurich • Montreux</p>
                      <p className="text-xs text-gray-400 mt-1">{dict.contactPage.info.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
