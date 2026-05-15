'use client';

import { useState } from 'react';
import {
  FileText, ChevronRight, ChevronLeft, Check, Shield, Clock, Award, CreditCard,
  MapPin, Home, Building2, Factory, Users, HelpCircle,
  Bell, Camera, Wrench, TrendingUp, Sparkles, Phone, Mail, MessageCircle,
} from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

interface QuotePageClientProps {
  dict: any;
  locale: string;
}

const propertyIcons = [Home, Building2, Building2, Factory, Users, HelpCircle];
const serviceIcons = [Bell, Camera, Shield, Wrench, TrendingUp];
const contactMethodIcons = [Phone, Mail, MessageCircle];

export default function QuotePageClient({ dict, locale }: QuotePageClientProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    propertyType: '', serviceType: '', location: '', surface: '',
    rooms: '', details: '', name: '', email: '', phone: '', preferred: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const selectOption = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };
  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const message = [
        `Type de bien: ${formData.propertyType || 'N/A'}`,
        `Service: ${formData.serviceType || 'N/A'}`,
        `Localisation: ${formData.location || 'N/A'}`,
        `Surface: ${formData.surface || 'N/A'}`,
        `Pièces: ${formData.rooms || 'N/A'}`,
        `Détails: ${formData.details || 'N/A'}`,
        `Méthode de contact préférée: ${formData.preferred || 'N/A'}`,
      ].join('\n');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Demande de devis – ${formData.serviceType || 'N/A'}`,
          message,
        }),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setError(locale === 'fr' ? 'Erreur lors de l\'envoi. Veuillez réessayer.' : 'Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  const totalSteps = 3;

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition-colors duration-200";
  const optionClass = (selected: boolean) => `p-4 rounded-xl border text-left text-sm font-medium transition-colors duration-200 ${
    selected ? 'bg-brand-50 border-brand-300 text-brand-600' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-200 hover:text-gray-900'
  }`;
  const optionSmClass = (selected: boolean) => `p-3 rounded-xl border text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
    selected ? 'bg-brand-50 border-brand-300 text-brand-600' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-200'
  }`;

  return (
    <>
      <section className="relative pt-28 pb-8 md:pt-36 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <Badge variant="success" icon={<Sparkles className="w-3.5 h-3.5" />}>{dict.quotePage.hero.badge}</Badge>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto text-gray-900">
              {dict.quotePage.hero.title}{' '}<span className="gradient-text">{dict.quotePage.hero.titleHighlight}</span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">{dict.quotePage.hero.subtitle}</p>
          </FadeIn>
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="text-center py-16 px-8 rounded-2xl bg-white border border-trust-200 shadow-lg">
                  <div className="w-20 h-20 mx-auto rounded-full bg-trust-50 flex items-center justify-center mb-6">
                    <Check className="w-10 h-10 text-trust-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{dict.quotePage.success.title}</h2>
                  <p className="text-lg text-gray-500 max-w-md mx-auto mb-8">{dict.quotePage.success.message}</p>
                  <Link href={`/${locale}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-50 border border-brand-200 rounded-xl text-brand-600 font-medium hover:bg-brand-100 transition-colors duration-200">
                    {dict.quotePage.success.back}
                  </Link>
                </div>
              ) : (
                <div>
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-200 ${
                            s <= step ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-400 border border-gray-200'
                          }`}>
                            {s < step ? <Check className="w-4 h-4" /> : s}
                          </div>
                          <span className={`hidden sm:block text-sm font-medium ${s <= step ? 'text-gray-900' : 'text-gray-400'}`}>
                            {dict.quotePage.steps[`step${s}`]}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-brand-600 to-brand-500 rounded-full transition-all duration-300"
                        style={{ width: `${(step / totalSteps) * 100}%` }} />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-100 min-h-[400px]">
                      {step === 1 && (
                        <div className="space-y-8">
                          <div>
                            <label className="block text-sm font-medium text-gray-900 mb-4">{dict.quotePage.form.propertyType}</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {dict.quotePage.form.propertyTypes.map((type: string, i: number) => {
                                const Icon = propertyIcons[i] || HelpCircle;
                                const selected = formData.propertyType === type;
                                return (
                                  <button key={type} type="button" onClick={() => selectOption('propertyType', type)} className={optionClass(selected)}>
                                    <Icon className={`w-5 h-5 mb-2 ${selected ? 'text-brand-600' : 'text-gray-400'}`} />
                                    {type}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-900 mb-4">{dict.quotePage.form.serviceType}</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {dict.quotePage.form.serviceTypes.map((type: string, i: number) => {
                                const Icon = serviceIcons[i] || Shield;
                                const selected = formData.serviceType === type;
                                return (
                                  <button key={type} type="button" onClick={() => selectOption('serviceType', type)} className={optionClass(selected)}>
                                    <Icon className={`w-5 h-5 mb-2 ${selected ? 'text-brand-600' : 'text-gray-400'}`} />
                                    {type}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-900 mb-4">{dict.quotePage.form.location}</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {dict.quotePage.form.locations.map((loc: string) => {
                                const selected = formData.location === loc;
                                return (
                                  <button key={loc} type="button" onClick={() => selectOption('location', loc)} className={optionSmClass(selected)}>
                                    <MapPin className={`w-4 h-4 ${selected ? 'text-brand-600' : 'text-gray-400'}`} />
                                    {loc}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-900 mb-2">{dict.quotePage.form.surface}</label>
                              <input type="text" name="surface" value={formData.surface} onChange={handleChange} className={inputClass} placeholder="ex: 150" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-900 mb-2">{dict.quotePage.form.rooms}</label>
                              <input type="text" name="rooms" value={formData.rooms} onChange={handleChange} className={inputClass} placeholder="ex: 5" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">{dict.quotePage.form.details}</label>
                            <textarea name="details" rows={4} value={formData.details} onChange={handleChange}
                              className={`${inputClass} resize-none`}
                              placeholder={locale === 'fr' ? 'Décrivez votre projet...' : 'Describe your project...'} />
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">{dict.quotePage.form.name}</label>
                            <input type="text" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Jean Dupont" />
                          </div>
                          <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-900 mb-2">{dict.quotePage.form.email}</label>
                              <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="jean@example.com" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-900 mb-2">{dict.quotePage.form.phone}</label>
                              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+41 XX XXX XX XX" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-900 mb-4">{dict.quotePage.form.preferred}</label>
                            <div className="grid grid-cols-3 gap-3">
                              {dict.quotePage.form.preferredOptions.map((option: string, i: number) => {
                                const Icon = contactMethodIcons[i];
                                const selected = formData.preferred === option;
                                return (
                                  <button key={option} type="button" onClick={() => selectOption('preferred', option)}
                                    className={`p-3 rounded-xl border text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${
                                      selected ? 'bg-brand-50 border-brand-300 text-brand-600' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-200'
                                    }`}>
                                    <Icon className="w-4 h-4" />
                                    {option}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      {step > 1 ? (
                        <button type="button" onClick={prevStep}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200">
                          <ChevronLeft className="w-4 h-4" />
                          {dict.quotePage.form.previous}
                        </button>
                      ) : (<div />)}
                      {step < totalSteps ? (
                        <Button type="button" onClick={nextStep} icon={<ChevronRight className="w-4 h-4" />}>{dict.quotePage.form.next}</Button>
                      ) : (
                        <Button type="submit" variant="cta" size="lg" icon={<FileText className="w-5 h-5" />} disabled={loading}>
                          {loading ? (locale === 'fr' ? 'Envoi...' : 'Sending...') : dict.quotePage.form.submit}
                        </Button>
                      )}
                    </div>
                    {error && (
                      <p className="text-sm text-red-600 text-center mt-2">{error}</p>
                    )}
                  </form>
                </div>
              )}
            </div>

            <FadeIn direction="right" className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                    {locale === 'fr' ? 'Nos engagements' : 'Our commitments'}
                  </h3>
                  <ul className="space-y-3">
                    {dict.quotePage.trust.items.map((item: string, i: number) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-trust-50 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-trust-600" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Shield, label: dict.trust.warranty, color: 'text-brand-600' },
                      { icon: CreditCard, label: dict.trust.noContract, color: 'text-trust-600' },
                      { icon: Award, label: dict.trust.ndaa, color: 'text-amber-500' },
                      { icon: Clock, label: '24/7', color: 'text-brand-500' },
                    ].map((b, i) => (
                      <div key={i} className="text-center p-3 rounded-xl bg-white border border-gray-100">
                        <b.icon className={`w-6 h-6 ${b.color} mx-auto mb-1`} />
                        <p className="text-xs text-gray-500">{b.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <a href="tel:+41787083877"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-trust-50 border border-trust-100 hover:bg-trust-100 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-xl bg-trust-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-trust-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{dict.common.callUs}</p>
                    <p className="text-sm text-trust-600 font-mono">{dict.common.phone}</p>
                  </div>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
