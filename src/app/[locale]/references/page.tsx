import { getDictionary, Locale } from '@/lib/dictionary';
import { Metadata } from 'next';
import ReferencesPageClient from './ReferencesPageClient';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.referencesPage.hero.title + ' ' + dict.referencesPage.hero.titleHighlight,
    description: dict.referencesPage.hero.subtitle,
  };
}

export default async function ReferencesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  return <ReferencesPageClient dict={dict} locale={locale} />;
}
