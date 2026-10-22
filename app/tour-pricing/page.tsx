import React from 'react';
import { Check } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import BookingWidget from '@/components/booking/BookingWidget';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export const metadata = constructMetadata({
  title: 'Chauffeur & Tour Pricing | Transparent Rates | Vienna Day Trip',
  description: 'Fixed and transparent chauffeur rates in Vienna. Zero hidden fees, no surge pricing, complimentary flight tracking, and parking included.',
  canonicalUrl: '/tour-pricing',
});

const PRICING_PILLARS = [
  {
    title: "100% Fixed Rates",
    desc: "The price you are quoted is exactly what you pay. No unexpected meter increases in traffic or surge pricing."
  },
  {
    title: "All Highway Vignettes Included",
    desc: "Austrian, Czech, Hungarian, and Slovak highway tolls, parking fees, and road taxes are always fully covered."
  },
  {
    title: "Free Waiting Time",
    desc: "60 minutes complimentary waiting time at Vienna Airport (VIE) after touchdown, and 15 minutes for city hotel pickups."
  },
  {
    title: "Free Cancellation",
    desc: "Cancel free of charge up to 24 hours prior to scheduled departure. Zero cancellation penalties."
  }
];

export default function TourPricingPage() {
  return (
    <div className="pt-24 bg-[#faf9f6] text-gray-800">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-white to-[#faf9f6] text-center border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
            Transparent Pricing Policy
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-wide">
            Tour & Chauffeur Pricing
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            We believe luxury travel should be clear, honest, and reliable. Every quote includes your dedicated licensed chauffeur, pristine Mercedes vehicle, all tolls, and onboard amenities.
          </p>
        </div>
      </section>

      {/* Pricing Pillars */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PILLARS.map((p, i) => (
            <div key={i} className="bg-white border border-gray-200/90 rounded-2xl p-6 space-y-2.5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700 font-bold">
                <Check className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-base font-bold text-gray-900">{p.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-white border-t border-gray-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
              Get an Instant Fixed Quote
            </h2>
            <p className="text-xs text-gray-500">
              Select your service type, date, and vehicle below to receive an exact fixed quote.
            </p>
          </div>
          <BookingWidget />
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </div>
  );
}
