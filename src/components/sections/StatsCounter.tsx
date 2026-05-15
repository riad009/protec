'use client';

import AnimatedCounter from '@/components/ui/AnimatedCounter';
import FadeIn from '@/components/animations/FadeIn';

interface StatsCounterProps {
  dict: any;
}

export default function StatsCounter({ dict }: StatsCounterProps) {
  const stats = [
    { end: 10, suffix: '+', label: dict.stats.experienceLabel, color: 'text-brand-600' },
    { end: 500, suffix: '+', label: dict.stats.clientsLabel, color: 'text-trust-600' },
    { end: 4, suffix: '', label: dict.stats.warrantyLabel, color: 'text-brand-500' },
    { end: 4, suffix: '', label: dict.stats.citiesLabel, color: 'text-gray-800' },
  ];

  return (
    <section className="relative py-16 md:py-20 bg-gray-50">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <AnimatedCounter
                key={i}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                className={`text-4xl md:text-5xl lg:text-6xl font-bold font-mono ${stat.color}`}
                labelClassName="text-sm text-gray-400 mt-2"
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
