'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu, X, Phone, Globe, Bell, Camera, Wrench,
  Users, MessageSquare, FileText, ShieldCheck,
} from 'lucide-react';
import Button from '@/components/ui/Button';

interface HeaderProps {
  dict: any;
  locale: string;
}

const navIcons: Record<string, any> = {
  alarm: Bell, surveillance: Camera, services: Wrench,
  references: Users, contact: MessageSquare,
};

export default function Header({ dict, locale }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navItems = [
    { href: `/${locale}/alarme`, label: dict.nav.alarm, key: 'alarm' },
    { href: `/${locale}/videosurveillance`, label: dict.nav.surveillance, key: 'surveillance' },
    { href: `/${locale}/maintenance`, label: dict.nav.services, key: 'services' },
    { href: `/${locale}/references`, label: dict.nav.references, key: 'references' },
    { href: `/${locale}/contact`, label: dict.nav.contact, key: 'contact' },
  ];

  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const localePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-sm'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href={`/${locale}`} className="flex items-center gap-2 group">
              <Image
                src="/images/logo-protecsys.png"
                alt="PROTECSYS - Video Security Alarm System Solutions"
                width={240}
                height={60}
                className="h-12 md:h-14 w-auto object-contain"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.key} href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 whitespace-nowrap ${
                      isActive ? 'text-brand-600 bg-brand-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}>
                    {item.label}
                    {isActive && <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-600 rounded-full" />}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link href={localePath}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Globe className="w-4 h-4" />
                {dict.nav.language}
              </Link>
              <a href="tel:+41787083877"
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-trust-600 hover:text-trust-500 rounded-lg hover:bg-trust-50 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+41 78 708 38 77</span>
              </a>
              <Button href={`/${locale}/devis`} size="sm" variant="primary">
                <FileText className="w-4 h-4" />
                {dict.nav.quote}
              </Button>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - CSS transition only */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/20" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white border-l border-gray-200 shadow-2xl">
            <div className="flex flex-col h-full p-6 pt-20">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const Icon = navIcons[item.key];
                  const isActive = pathname === item.href;
                  return (
                    <Link key={item.key} href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 ${
                        isActive ? 'text-brand-600 bg-brand-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}>
                      {Icon && <Icon className="w-5 h-5" />}
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="my-6 h-px bg-gray-200" />
              <Link href={localePath}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200">
                <Globe className="w-5 h-5" />
                {locale === 'fr' ? 'English' : 'Français'}
              </Link>
              <div className="flex-1" />
              <div className="flex flex-col gap-3">
                <a href="tel:+41787083877"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-trust-50 text-trust-600 border border-trust-100 rounded-xl font-medium">
                  <Phone className="w-5 h-5" />
                  +41 78 708 38 77
                </a>
                <Button href={`/${locale}/devis`} size="lg" className="w-full justify-center">
                  <FileText className="w-5 h-5" />
                  {dict.nav.quote}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
