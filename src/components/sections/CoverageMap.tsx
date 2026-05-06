'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';

interface CoverageMapProps {
  dict: any;
}

const swissRegions = [
  { name: 'Suisse Romande', cities: ['Canton de Genève', 'Canton de Vaud', 'Canton de Neuchâtel', 'Canton de Fribourg', 'Canton du Valais'] },
  { name: 'Suisse Alémanique', cities: ['Canton de Berne', 'Canton de Zug'] },
];

export default function CoverageMap({ dict }: CoverageMapProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {dict.coverage.title}{' '}
            <span className="gradient-text">{dict.coverage.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">{dict.coverage.subtitle}</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="relative max-w-md mx-auto flex items-center justify-center bg-white">
              <Image
                src="/images/swiss-flag-map.png"
                alt="Switzerland flag map - Toute la Suisse"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </FadeIn>

          <div className="space-y-6">
            {/* Regions */}
            <StaggerContainer className="grid grid-cols-1 gap-4">
              {swissRegions.map((region, i) => (
                <StaggerItem key={i}>
                  <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-brand-200 hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors duration-300">
                        <MapPin className="w-5 h-5 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{region.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{region.cities.join(' • ')}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
