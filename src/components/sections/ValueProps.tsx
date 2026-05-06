'use client';

import {
  ShieldCheck,
  CreditCard,
  Award,
  MapPin,
  Settings,
  Headphones,
} from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import GlassCard from '@/components/ui/GlassCard';

interface ValuePropsProps {
  dict: any;
}

const icons = [ShieldCheck, CreditCard, Award, MapPin, Settings, Headphones];
const iconColors = [
  'from-brand-600 to-brand-500',
  'from-trust-600 to-trust-500',
  'from-amber-500 to-amber-400',
  'from-brand-500 to-brand-400',
  'from-gray-700 to-gray-600',
  'from-trust-500 to-trust-400',
];

export default function ValueProps({ dict }: ValuePropsProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 section-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {dict.valueProps.title}{' '}
            <span className="gradient-text">{dict.valueProps.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {dict.valueProps.subtitle}
          </p>
        </FadeIn>

        {/* Value Props Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.valueProps.items.map((item: any, i: number) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={i}>
                <GlassCard className="h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconColors[i]} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
