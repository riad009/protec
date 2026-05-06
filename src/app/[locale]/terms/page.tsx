import { getDictionary, Locale } from '@/lib/dictionary';
import TermsPageClient from './TermsPageClient';

export default async function TermsPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return <TermsPageClient dict={dict} locale={locale} />;
}
