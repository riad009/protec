import { getDictionary, Locale } from '@/lib/dictionary';
import { Metadata } from 'next';
import SurveillancePageClient from './SurveillancePageClient';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.surveillance.hero.title + ' ' + dict.surveillance.hero.titleHighlight,
    description: dict.surveillance.hero.subtitle,
  };
}

export default async function SurveillancePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  return <SurveillancePageClient dict={dict} locale={locale} />;
}
