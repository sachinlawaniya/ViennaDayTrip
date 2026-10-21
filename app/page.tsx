import React from 'react';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import DayTripsSection from '@/components/sections/DayTripsSection';
import FleetSection from '@/components/sections/FleetSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Private Chauffeur Vienna | Luxury Transfers & Day Trips Across Europe',
  description: 'Book executive private transfers, airport pick-ups, hourly chauffeur hire, and private day trips from Vienna to Hallstatt, Wachau Valley, Salzburg, and Budapest in Mercedes luxury.',
  canonicalUrl: '/',
});

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <DayTripsSection />
      <FleetSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
