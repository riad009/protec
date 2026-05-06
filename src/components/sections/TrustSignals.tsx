'use client';

import { ShieldCheck, FileX, Award, MapPin } from 'lucide-react';

interface TrustSignalsProps {
  dict: any;
}

export default function TrustSignals({ dict }: TrustSignalsProps) {
  const items = [
    { icon: Award, label: dict.trust.ndaa, color: 'text-trust-600' },
    { icon: FileX, label: dict.trust.noContract, color: 'text-brand-600' },
    { icon: ShieldCheck, label: dict.trust.warranty, color: 'text-amber-500' },
    { icon: MapPin, label: dict.trust.swiss, color: 'text-brand-600' },
  ];

  return (
    <section className="relative py-8 border-y border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <span className="text-sm font-medium text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
