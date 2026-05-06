'use client';

import Image from 'next/image';
import { Camera, ShieldCheck, Check, Phone } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';

interface SurveillancePageClientProps {
  dict: any;
  locale: string;
}

const systemKeys = ['indoor', 'outdoor', 'ptz', 'fourk'];
const systemImages = [
  '/images/security-camera.png',
  '/images/cam-outdoor.jpg',
  '/images/cam-ptz.jpg',
  '/images/cam-4k.jpg',
];
const useCaseImages = [
  '/images/usecase-residential.png',
  '/images/usecase-commercial.png',
  '/images/usecase-industrial.png',
  '/images/usecase-clinic.png',
  '/images/cam-embassy.jpg',
];

export default function SurveillancePageClient({ dict, locale }: SurveillancePageClientProps) {
  return (
    <>
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn className="max-w-3xl">
              <Badge variant="success" icon={<Camera className="w-3.5 h-3.5" />}>{dict.surveillance.hero.badge}</Badge>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                {dict.surveillance.hero.title}{' '}<span className="gradient-text">{dict.surveillance.hero.titleHighlight}</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl">{dict.surveillance.hero.subtitle}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href={`/${locale}/devis`} size="lg" icon={<Camera className="w-5 h-5" />}>{dict.common.getQuote}</Button>
                <Button href="tel:+41787083877" size="lg" variant="secondary" icon={<Phone className="w-5 h-5" />}>{dict.common.callUs}</Button>
              </div>
            </FadeIn>
            <FadeIn direction="right" className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/images/cam-embassy.jpg"
                  alt="Professional surveillance camera"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{dict.surveillance.systems.title}</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemKeys.map((key, i) => {
              const system = dict.surveillance.systems[key];
              return (
                <StaggerItem key={key}>
                  <GlassCard className="h-full" gradient>
                    <div className="w-full h-40 rounded-xl overflow-hidden mb-5 border border-gray-100">
                      <Image
                        src={systemImages[i]}
                        alt={system.title}
                        width={400}
                        height={250}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{system.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{system.description}</p>
                  </GlassCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>




      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{dict.surveillance.useCases.title}</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {dict.surveillance.useCases.items.map((item: any, i: number) => (
              <StaggerItem key={i}>
                <GlassCard className="h-full text-center" padding="p-4">
                  <div className="w-full h-32 rounded-xl overflow-hidden mb-4 border border-gray-100">
                    <Image
                      src={useCaseImages[i] || useCaseImages[0]}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner dict={dict} locale={locale} />
    </>
  );
}
