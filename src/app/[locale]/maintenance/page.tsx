import { getDictionary, Locale } from '@/lib/dictionary';
import { Metadata } from 'next';
import MaintenancePageClient from './MaintenancePageClient';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.maintenancePage.hero.title + ' ' + dict.maintenancePage.hero.titleHighlight,
    description: dict.maintenancePage.hero.subtitle,
  };
}

export default async function MaintenancePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  return <MaintenancePageClient dict={dict} locale={locale} />;
}
