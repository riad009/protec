'use client';

import Image from 'next/image';
import { Wrench, Check, Star, Phone, Search, Settings, Package, TrendingUp } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';

interface MaintenancePageClientProps {
  dict: any;
  locale: string;
}

const supportIcons = [Search, Settings, Package, TrendingUp];

export default function MaintenancePageClient({ dict, locale }: MaintenancePageClientProps) {
  const plans = [dict.maintenancePage.plans.basic, dict.maintenancePage.plans.standard, dict.maintenancePage.plans.premium];

  return (
    <>
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn className="max-w-3xl">
              <Badge variant="warning" icon={<Wrench className="w-3.5 h-3.5" />}>{dict.maintenancePage.hero.badge}</Badge>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                {dict.maintenancePage.hero.title}{' '}<span className="gradient-text">{dict.maintenancePage.hero.titleHighlight}</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl">{dict.maintenancePage.hero.subtitle}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href={`/${locale}/devis`} size="lg" icon={<Wrench className="w-5 h-5" />}>{dict.common.getQuote}</Button>
                <Button href="tel:+41787083877" size="lg" variant="secondary" icon={<Phone className="w-5 h-5" />}>{dict.common.callUs}</Button>
              </div>
            </FadeIn>
            <FadeIn direction="right" className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/images/maintenance-hero.png"
                  alt="Professional maintenance technician"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{dict.maintenancePage.plans.title}</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan: any, i: number) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`relative h-full p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                  plan.recommended
                    ? 'bg-white border-brand-200 shadow-lg shadow-brand-600/10 ring-1 ring-brand-100'
                    : 'bg-white border-gray-100 shadow-sm hover:border-brand-200 hover:shadow-md'
                }`}>
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="default" icon={<Star className="w-3 h-3" />}>Recommandé</Badge>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.title}</h3>
                  {plan.subtitle && (
                    <p className="text-sm text-gray-500 font-medium mb-2">{plan.subtitle}</p>
                  )}
                  <p className="text-2xl font-bold text-brand-600 font-mono mb-4">{plan.price}</p>
                  {plan.description && (
                    <p className="text-sm text-gray-500 leading-relaxed mb-6 border-l-2 border-brand-200 pl-3">{plan.description}</p>
                  )}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature: string, j: number) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-trust-500 flex-shrink-0" />{feature}
                      </li>
                    ))}
                  </ul>
                  <Button href={`/${locale}/devis`} className="w-full justify-center" variant={plan.recommended ? 'primary' : 'secondary'}>
                    {dict.common.getQuote}
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{dict.maintenancePage.support.title}</h2>
          </FadeIn>
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-500">{dict.maintenancePage.support.description}</p>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.maintenancePage.support.items.map((item: any, i: number) => {
              const Icon = supportIcons[i];
              return (
                <StaggerItem key={i}>
                  <GlassCard className="h-full text-center" padding="p-6">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </GlassCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner dict={dict} locale={locale} />
    </>
  );
}
