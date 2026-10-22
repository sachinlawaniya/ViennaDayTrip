'use client';

import React from 'react';

const RIBBON_ITEMS = [
  'Chauffeur Service',
  'Airport Transfer',
  'Day Trips from Vienna',
  'Limousine Service',
  'Private Chauffeur',
  'Executive Travel',
  'Austria & Central Europe',
  'VIP Mercedes Fleet'
];

export default function MarqueeRibbon() {
  return (
    <div className="w-full bg-[#1e1713] text-[#f2e6d6] py-3.5 border-y border-[#3d3128] overflow-hidden select-none relative z-20">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Double repeat for continuous infinite loop */}
        {[...RIBBON_ITEMS, ...RIBBON_ITEMS, ...RIBBON_ITEMS, ...RIBBON_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center mx-5 sm:mx-8">
            <span className="font-serif tracking-widest text-xs sm:text-sm font-semibold uppercase text-[#e6d5bf] hover:text-gold transition-colors">
              {item}
            </span>
            <span className="ml-5 sm:ml-8 text-gold text-xs sm:text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
