'use client';

import Image from 'next/image';
import { ChevronRight, Check } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import GlassCard from '@/components/ui/GlassCard';
import Link from 'next/link';

interface ServicesOverviewProps {
  dict: any;
  locale: string;
}

const serviceKeys = ['alarm', 'surveillance', 'maintenance'];
const serviceHrefs = ['alarme', 'videosurveillance', 'maintenance'];
const serviceImages = [
  '/images/alarm-house-3d.png',
  '/images/store-surveillance.png',
  '/images/technician-camera.png',
];
const serviceColors = [
  { text: 'text-brand-600', check: 'text-brand-500' },
  { text: 'text-trust-600', check: 'text-trust-500' },
  { text: 'text-amber-600', check: 'text-amber-500' },
];

export default function ServicesOverview({ dict, locale }: ServicesOverviewProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 section-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {dict.services.title}{' '}
            <span className="gradient-text">{dict.services.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {dict.services.subtitle}
          </p>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {serviceKeys.map((key, i) => {
            const colors = serviceColors[i];
            const service = dict.services[key];

            return (
              <FadeIn key={key} delay={i * 0.15}>
                <Link href={`/${locale}/${serviceHrefs[i]}`} className="block h-full group">
                  <GlassCard className="h-full" gradient>
                    {/* Service Image */}
                    <div className="w-full h-44 rounded-2xl overflow-hidden mb-6 border border-gray-100 group-hover:shadow-md transition-shadow duration-500">
                      <Image
                        src={serviceImages[i]}
                        alt={service.title}
                        width={400}
                        height={250}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature: string, j: number) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className={`w-4 h-4 ${colors.check} flex-shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <div className={`flex items-center gap-1 text-sm font-medium ${colors.text} group-hover:gap-2 transition-all duration-300`}>
                      {dict.services.learnMore}
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </GlassCard>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
