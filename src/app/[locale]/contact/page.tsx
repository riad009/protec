import { getDictionary, Locale } from '@/lib/dictionary';
import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.contactPage.hero.title + ' ' + dict.contactPage.hero.titleHighlight,
    description: dict.contactPage.hero.subtitle,
  };
}

export default async function ContactPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  return <ContactPageClient dict={dict} locale={locale} />;
}
