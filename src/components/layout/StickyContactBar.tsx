'use client';

import { useState, useEffect } from 'react';
import { Phone, FileText } from 'lucide-react';

interface StickyContactBarProps {
  locale: string;
  quoteLabel: string;
  callLabel: string;
}

export default function StickyContactBar({ locale, quoteLabel, callLabel }: StickyContactBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-2 p-3">
          <a href="tel:+41787083877"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-trust-50 border border-trust-100 text-trust-600 rounded-xl text-sm font-medium">
            <Phone className="w-4 h-4" />
            {callLabel}
          </a>
          <a href={`/${locale}/devis`}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-brand-600 to-brand-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-brand-600/20">
            <FileText className="w-4 h-4" />
            {quoteLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
