'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Users, CheckCircle2, ArrowRight, Phone, Download, Award, ExternalLink, Building2, Globe } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';

interface ReferencesPageClientProps {
  dict: any;
  locale: string;
}


const recommendationLetters = [
  {
    organization: 'Mission Permanente d\'Israël',
    type: 'Diplomatic',
    description: {
      fr: 'Installation du Système d\'Alarme de Nouvelle Génération : Protection Avancée.',
      en: 'Next-Generation Alarm System Installation: Advanced Protection.',
    },
    countryCode: 'il',
    downloadUrl: '/pdf/Ambassador-Israeli-Mission-to-the-UN-Geneva.pdf',
  },
  {
    organization: 'Mission Permanente du Zimbabwe',
    type: 'Diplomatic',
    description: {
      fr: 'Installation du Système d\'Alarme de Nouvelle Génération et de Vidéo Protection 2K Digital.',
      en: 'Next-Generation Alarm System and 2K Digital Video Protection Installation.',
    },
    countryCode: 'zw',
    downloadUrl: '/pdf/ATESTATION zimbabwye pdf.pdf',
  },
  {
    organization: 'Embassy of Guatemala',
    type: 'Diplomatic',
    description: {
      fr: 'Installation du Système d\'Alarme de Nouvelle Génération et de Vidéo Protection 2K Digital.',
      en: 'Next-Generation Alarm System and 2K Digital Video Protection Installation.',
    },
    countryCode: 'gt',
    downloadUrl: '/pdf/AA3-477-2020-DIFISEG-carta-de-referencia-PROTECSYS-4.pdf',
  },
  {
    organization: 'Kuwait Embassy in Bern',
    type: 'Diplomatic',
    description: {
      fr: 'Installation du Système d\'Alarme de Nouvelle Génération et de Vidéo Protection 2K Digital.',
      en: 'Next-Generation Alarm System and 2K Digital Video Protection Installation.',
    },
    countryCode: 'kw',
    downloadUrl: '/pdf/KUWAIT EMBASSY SWITZERLAND.png',
  },
  {
    organization: 'Mission Permanente du Mali',
    type: 'Diplomatic',
    description: {
      fr: 'Installation du Système de Surveillance 2K de Nouvelle Génération : Une Protection Haute Définition.',
      en: 'Next-Generation 2K Surveillance System Installation: High-Definition Protection.',
    },
    countryCode: 'ml',
    downloadUrl: '/pdf/mission parmante.pdf',
  },
  {
    organization: 'Indonesian Embassy in Bern',
    type: 'Diplomatic',
    description: {
      fr: 'Installation du Système d\'Alarme de Nouvelle Génération et de Vidéo Protection 2K Digital.',
      en: 'Next-Generation Alarm System and 2K Digital Video Protection Installation.',
    },
    countryCode: 'id',
    downloadUrl: '/pdf/indonessian pdf.pdf',
  },
];

export default function ReferencesPageClient({ dict, locale }: ReferencesPageClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = dict.referencesPage.categories;
  const cases = dict.referencesPage.cases;
  const filtered = activeCategory ? cases.filter((c: any) => c.category === activeCategory) : cases;

  return (
    <>
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn className="max-w-3xl">
              <Badge variant="info" icon={<Users className="w-3.5 h-3.5" />}>
                {dict.referencesPage.hero.badge}
              </Badge>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                {dict.referencesPage.hero.title}{' '}
                <span className="gradient-text">{dict.referencesPage.hero.titleHighlight}</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl">
                {dict.referencesPage.hero.subtitle}
              </p>
            </FadeIn>
            <FadeIn direction="right" className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/images/references-hero.png"
                  alt="Professional team"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Official Recommendation Letters */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-6">
              <Award className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-700">
                {locale === 'fr' ? 'Lettres de Recommandation Officielles' : 'Official Recommendation Letters'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {locale === 'fr' ? 'Faites confiance à leurs ' : 'Trust their '}
              <span className="gradient-text">{locale === 'fr' ? 'expériences' : 'experiences'}</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {locale === 'fr'
                ? 'Découvrez les témoignages de ceux qui font confiance à PROTECSYS ! Chaque lettre témoigne d\'expériences authentiques et de la confiance de ceux qui ont travaillé avec nous.'
                : 'Discover the testimonials from those who trust PROTECSYS! Each letter reflects authentic experiences and the confidence of those who have worked with us.'}
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendationLetters.map((letter, i) => (
              <StaggerItem key={i}>
                <div className="group relative p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-amber-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 border border-gray-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={(letter as any).imageUrl ?? `https://flagcdn.com/w80/${letter.countryCode}.png`}
                        alt={letter.organization}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="info" className="text-[10px]">
                          <Globe className="w-3 h-3" />
                          {letter.type}
                        </Badge>
                      </div>
                      <h3 className="text-base font-bold text-gray-900 leading-tight">
                        {letter.organization}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                    {locale === 'fr' ? letter.description.fr : letter.description.en}
                  </p>

                  {/* Download Button */}
                  <a
                    href={letter.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 text-white text-sm font-medium hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-md hover:shadow-lg group-hover:shadow-xl"
                  >
                    <Download className="w-4 h-4" />
                    {locale === 'fr' ? 'Voir la lettre' : 'View letter'}
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Category Filters */}
      <section className="relative py-8 border-y border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === null
                  ? 'bg-brand-50 text-brand-600 border border-brand-200'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100 border border-transparent'
              }`}
            >
              {locale === 'fr' ? 'Tous' : 'All'}
            </button>
            {categories.map((cat: string) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-50 text-brand-600 border border-brand-200'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100 border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Cases */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((caseStudy: any, i: number) => (
              <StaggerItem key={i}>
                <GlassCard className="h-full" gradient>
                  <Badge variant="info" className="mb-4">
                    {caseStudy.category}
                  </Badge>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{caseStudy.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{caseStudy.description}</p>
                  <div className="p-3 rounded-xl bg-trust-50 border border-trust-100">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-trust-600 flex-shrink-0" />
                      <span className="text-sm text-trust-600 font-medium">{caseStudy.results}</span>
                    </div>
                  </div>
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
