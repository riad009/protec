import { getDictionary, Locale } from '@/lib/dictionary';
import { Metadata } from 'next';
import QuotePageClient from './QuotePageClient';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.quotePage.hero.title + ' ' + dict.quotePage.hero.titleHighlight,
    description: dict.quotePage.hero.subtitle,
  };
}

export default async function QuotePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  return <QuotePageClient dict={dict} locale={locale} />;
}
