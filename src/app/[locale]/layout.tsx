import type { Metadata } from 'next';
import { getDictionary, Locale } from '@/lib/dictionary';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyContactBar from '@/components/layout/StickyContactBar';

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return {
    title: {
      default: dict.metadata.title,
      template: `%s | PROTECSYS`,
    },
    description: dict.metadata.description,
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      locale: locale === 'fr' ? 'fr_CH' : 'en_CH',
      type: 'website',
      siteName: 'PROTECSYS',
    },
    alternates: {
      canonical: `https://protecsys.ch/${locale}`,
      languages: {
        'fr-CH': '/fr',
        'en-CH': '/en',
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KT3TN39D');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'PROTECSYS Sàrl',
              description: dict.metadata.description,
              telephone: '+41787083877',
              email: 'info@protecsys.ch',
              url: 'https://protecsys.ch',
              areaServed: [
                { '@type': 'State', name: 'Canton de Genève' },
                { '@type': 'State', name: 'Canton de Vaud' },
                { '@type': 'State', name: 'Canton de Berne' },
                { '@type': 'State', name: 'Canton de Fribourg' },
                { '@type': 'State', name: 'Canton de Neuchâtel' },
                { '@type': 'State', name: 'Canton du Valais' },
                { '@type': 'State', name: 'Canton de Zug' },
              ],
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'CH',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-text-primary antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KT3TN39D"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header dict={dict} locale={locale} />
        <main className="relative">{children}</main>
        <Footer dict={dict} locale={locale} />
        <StickyContactBar
          locale={locale}
          quoteLabel={dict.nav.quote}
          callLabel={dict.nav.callNow}
        />
      </body>
    </html>
  );
}
