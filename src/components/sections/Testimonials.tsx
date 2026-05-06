'use client';

import { Star, MapPin, Quote, ExternalLink } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';

interface TestimonialsProps {
  dict: any;
}

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/5jeLwUgVfQYCAE5DA';
const GOOGLE_RATING = 4.6;
const GOOGLE_REVIEW_COUNT = 11;

export default function Testimonials({ dict }: TestimonialsProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {dict.testimonials.title}{' '}
            <span className="gradient-text">{dict.testimonials.titleHighlight}</span>
          </h2>
        </FadeIn>

        {/* Google Reviews Badge */}
        <FadeIn className="flex justify-center mb-12">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-300 group"
          >
            {/* Google "G" logo */}
            <div className="flex-shrink-0">
              <svg width="32" height="32" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.8 33.4 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C33.9 5.8 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.2-2.7-.4-3.9z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.9 18.9 13 24 13c3.1 0 5.8 1.2 8 3l5.7-5.7C33.9 5.8 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.3 0-9.7-3.5-11.3-8.3l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
                <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.2-2.7-.4-3.9z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900">{GOOGLE_RATING}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(GOOGLE_RATING) ? 'text-amber-400 fill-amber-400' : i < GOOGLE_RATING ? 'text-amber-400 fill-amber-400 opacity-60' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500">
                {GOOGLE_REVIEW_COUNT} avis Google
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-brand-600 transition-colors" />
          </a>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {dict.testimonials.items.map((item: any, i: number) => (
            <StaggerItem key={i}>
              <div className="relative h-full p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-100 transition-all duration-500">
                <Quote className="w-8 h-8 text-brand-200 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-600 to-brand-500 flex items-center justify-center text-white font-bold text-sm">
                    {item.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.role}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-brand-400" />
                      <span className="text-xs text-gray-400">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* "See all reviews" link */}
        <FadeIn className="text-center mt-8">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 hover:gap-3 transition-all duration-300"
          >
            Voir tous les avis sur Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
