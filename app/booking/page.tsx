import React from 'react';
import BookingWidget from '@/components/booking/BookingWidget';
import { constructMetadata } from '@/lib/seo';
import FAQSection from '@/components/sections/FAQSection';

export const metadata = constructMetadata({
  title: 'Book Online | Private Chauffeur & Day Trip Reservations',
  description: 'Book your private Mercedes chauffeur transfer, airport pick-up, or day trip from Vienna online. Immediate fixed quote calculation and 24/7 confirmation.',
  canonicalUrl: '/booking',
});

export default function BookingPage() {
  return (
    <div className="pt-28 pb-20 bg-luxury-black text-gray-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Online Reservation Engine
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wide">
            Book Your Chauffeur
          </h1>
          <p className="text-gray-300 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Select your service type, date, time, and vehicle below. Transparent fixed quotes with zero hidden charges.
          </p>
        </div>

        <BookingWidget />

        <div className="pt-12">
          <FAQSection />
        </div>
      </div>
    </div>
  );
}
