'use client';

import Image from 'next/image';
import {
  Shield,
  Phone,
  ChevronRight,
  Zap,
  Lock,
  Eye,
  Award,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

interface HeroProps {
  dict: any;
  locale: string;
}

export default function HeroSection({ dict, locale }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Subtle accent lines - static only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-500/5 to-transparent" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300/20 to-transparent" />
        <div className="absolute left-[80%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-500/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="max-w-2xl animate-[fade-in_0.6s_ease-out_forwards]">
            {/* Badge */}
            <Badge variant="default" icon={<Award className="w-3.5 h-3.5" />}>
              {dict.hero.badge}
            </Badge>

            {/* Headline */}
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
              {dict.hero.title}{' '}
              <span className="gradient-text">{dict.hero.titleHighlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl">
              {dict.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                href={`/${locale}/devis`}
                size="lg"
                variant="primary"
                icon={<Shield className="w-5 h-5" />}
              >
                {dict.hero.cta1}
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button
                href="tel:+41787083877"
                size="lg"
                variant="secondary"
                icon={<Phone className="w-5 h-5" />}
              >
                {dict.hero.cta2}
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: '10+', label: dict.hero.stats.experience },
                { value: '500+', label: dict.hero.stats.clients },
                { value: '4', label: dict.hero.stats.warranty },
                { value: '24/7', label: dict.hero.stats.support },
              ].map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-2xl md:text-3xl font-bold font-mono text-brand-600">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-[480px]">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/images/hero-security-app.jpg"
                  alt="Professional security monitoring"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
