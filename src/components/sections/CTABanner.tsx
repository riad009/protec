'use client';

import { Phone, ArrowRight, Shield, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';

interface CTABannerProps {
  dict: any;
  locale: string;
}

export default function CTABanner({ dict, locale }: CTABannerProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-brand-700" />
            <div className="absolute inset-0 dot-pattern opacity-10" />

            {/* Static decorations */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-white/10" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border border-white/10" />
            <div className="absolute top-10 left-10">
              <Sparkles className="w-6 h-6 text-white/20" />
            </div>
            <div className="absolute bottom-10 right-10">
              <Shield className="w-8 h-8 text-white/10" />
            </div>

            <div className="relative z-10 py-16 md:py-20 px-6 md:px-12 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
                {dict.cta.title}
              </h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                {dict.cta.subtitle}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`/${locale}/devis`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white/80 text-white hover:bg-white hover:text-brand-600 transition-all duration-300 active:scale-[0.98]"
                >
                  {dict.cta.button}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 text-white/70">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{dict.cta.call}</span>
                <a href="tel:+41787083877" className="text-sm font-semibold text-white hover:underline">
                  {dict.cta.phone}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
