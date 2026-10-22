import React from 'react';
import Hero from '@/components/sections/Hero';
import MarqueeRibbon from '@/components/sections/MarqueeRibbon';
import TrustedSection from '@/components/sections/TrustedSection';
import CentralEuropeSection from '@/components/sections/CentralEuropeSection';
import ExperienceAccordion from '@/components/sections/ExperienceAccordion';
import AboutSplitSection from '@/components/sections/AboutSplitSection';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Private Chauffeur Vienna | Luxury Transfers & Day Trips Across Europe',
  description: 'Book executive private transfers, airport pick-ups, hourly chauffeur hire, and private day trips from Vienna to Hallstatt, Wachau Valley, Salzburg, and Budapest in Mercedes luxury.',
  canonicalUrl: '/',
});

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero with Belvedere backdrop, gold eyebrow, white title, and white booking card */}
      <Hero />

      {/* 2. Dark bronze marquee ribbon ticker */}
      <MarqueeRibbon />

      {/* 3. Trusted by International Travelers, Reviews, WKO badge, 3 Pillars, and 2 Featured Service Cards */}
      <TrustedSection />

      {/* 4. Explore Central Europe from Vienna, Map graphic, and 8 Route Cards */}
      <CentralEuropeSection />

      {/* 5. Facts: Premium Chauffeur Experience Across Europe (Obsidian Black Accordion) */}
      <ExperienceAccordion />

      {/* 6. About Vienna Day Trip – Private Day Trips & Chauffeur Tours (Warm Bronze Split Section) */}
      <AboutSplitSection />
    </div>
  );
}
