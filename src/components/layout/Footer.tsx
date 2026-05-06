import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ExternalLink, Building2 } from 'lucide-react';

interface FooterProps {
  dict: any;
  locale: string;
}

export default function Footer({ dict, locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Gradient top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="inline-block mb-4">
              <Image
                src="/images/logo-protecsys-white.png"
                alt="PROTECSYS - Video & Alarm Security System Solutions"
                width={240}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mt-4">
              {dict.footer.description}
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {dict.footer.services}
            </h3>
            <ul className="space-y-3">
              {[
                { href: `/${locale}/alarme`, label: dict.nav.alarm },
                { href: `/${locale}/videosurveillance`, label: dict.nav.surveillance },
                { href: `/${locale}/maintenance`, label: dict.nav.services },
                { href: `/${locale}/devis`, label: dict.nav.quote },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-400 transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-brand-400 transition-colors duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Addresses Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {locale === 'fr' ? 'Nos Bureaux' : 'Our Offices'}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white font-medium">PROTECSYS Sàrl</p>
                  <p className="text-xs text-gray-400">Rue de Lausanne 34</p>
                  <p className="text-xs text-gray-400">1201 Genève, Suisse</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white font-medium">PROTECSYS GmbH</p>
                  <p className="text-xs text-gray-400">Hinterbergstrasse 28</p>
                  <p className="text-xs text-gray-400">6312 Steinhausen, Switzerland</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {dict.footer.contact}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+41787083877"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-trust-400 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  +41 78 708 38 77
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@protecsys.ch"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-brand-400 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  info@protecsys.ch
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4" />
                Suisse 🇨🇭
              </li>
            </ul>

            {/* Quick CTA */}
            <Link
              href={`/${locale}/devis`}
              className="mt-6 flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-600 border border-brand-500 rounded-xl text-sm text-white font-medium hover:bg-brand-500 transition-all duration-300 shadow-lg shadow-brand-600/20"
            >
              {dict.common.getQuote}
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-300">
            © {currentYear} PROTECSYS GmbH. {dict.footer.allRights}.
          </p>
          <div className="flex items-center gap-6">
            <Link href={`/${locale}/terms`} className="text-xs text-gray-300 hover:text-white transition-colors duration-200">
              {dict.footer.terms || 'Terms & Conditions'}
            </Link>
            <Link href={`/${locale}/privacy`} className="text-xs text-gray-300 hover:text-white transition-colors duration-200">
              {dict.footer.privacy}
            </Link>
            <span className="text-xs text-gray-300">{dict.footer.madeIn}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
