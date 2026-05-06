import { getDictionary, Locale } from '@/lib/dictionary';
import HeroSection from '@/components/sections/Hero';
import TrustSignals from '@/components/sections/TrustSignals';
import ServicesOverview from '@/components/sections/ServicesOverview';
import StatsCounter from '@/components/sections/StatsCounter';
import ValueProps from '@/components/sections/ValueProps';
import Testimonials from '@/components/sections/Testimonials';
import CoverageMap from '@/components/sections/CoverageMap';
import CTABanner from '@/components/sections/CTABanner';

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <HeroSection dict={dict} locale={locale} />
      <TrustSignals dict={dict} />
      <ServicesOverview dict={dict} locale={locale} />
      <StatsCounter dict={dict} />
      <ValueProps dict={dict} />
      <Testimonials dict={dict} />
      <CoverageMap dict={dict} />
      <CTABanner dict={dict} locale={locale} />
    </>
  );
}
