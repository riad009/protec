import { getDictionary, Locale } from '@/lib/dictionary';
import { Metadata } from 'next';
import AlarmPageClient from './AlarmPageClient';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.alarm.hero.title + ' ' + dict.alarm.hero.titleHighlight,
    description: dict.alarm.hero.subtitle,
  };
}

export default async function AlarmPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  return <AlarmPageClient dict={dict} locale={locale} />;
}
