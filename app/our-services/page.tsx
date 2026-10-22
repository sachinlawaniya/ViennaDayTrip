import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Clock, Plane, Compass, Shield } from 'lucide-react';
import { SERVICES, DAY_TRIPS } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export const metadata = constructMetadata({
  title: 'Our Services | Private Chauffeur & Transfers Vienna',
  description: 'Explore our complete suite of private transportation services: Vienna Airport pick-up & drop-off, hourly chauffeur hire, city sightseeing, and private day tours.',
  canonicalUrl: '/our-services',
});

const SERVICE_ICONS = [Plane, Clock, Compass, Shield];

export default function OurServicesPage() {
  return (
    <div className="pt-24 bg-[#faf9f6] text-gray-800">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-white to-[#faf9f6] text-center border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
            Comprehensive Chauffeur Solutions
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-wide">
            Our Services
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            From punctual airport meet-and-greets to full-day multi-country excursions, every service is delivered with exemplary professionalism, discretion, and luxury.
          </p>
        </div>
      </section>

      {/* Primary Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
            Core Chauffeur Services
          </h2>
          <p className="text-xs text-gray-500">
            Tailored for business executives, international holidaymakers, and diplomatic delegations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv, idx) => {
            const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
            return (
              <div
                key={srv.id}
                className="bg-white border border-gray-200/90 rounded-2xl p-8 hover:border-gold-400 transition-all flex flex-col justify-between group shadow-md hover:shadow-xl"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-600 font-bold bg-gray-100 px-2.5 py-1 rounded">
                      24/7 Available
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-gold-800 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-gold-800 font-semibold mt-1">
                      {srv.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {srv.shortDescription}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {srv.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
                        <Check className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/${srv.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs text-gold-800 font-bold uppercase tracking-wider hover:text-gold-900 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/#booking-section"
                    className="bg-[#faf9f6] hover:bg-gold-500 hover:text-luxury-dark text-gray-900 text-xs font-bold px-4 py-2 rounded-lg border border-gray-300 hover:border-gold-500 transition-all shadow-sm"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Signature Day Trips Grid */}
      <section className="py-20 bg-white border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
              Explore with Us
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
              Private Day Trips from Vienna
            </h2>
            <p className="text-xs text-gray-500">
              Cross-border journeys and alpine adventures in luxury Mercedes vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DAY_TRIPS.map((trip) => (
              <div
                key={trip.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gold-400 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="relative w-full h-44 bg-gray-100">
                  <Image
                    src={trip.cardImage}
                    alt={trip.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-gold font-bold">
                    {trip.duration}
                  </div>
                </div>

                <div className="p-4 space-y-2 flex-grow">
                  <h3 className="font-serif text-base font-bold text-gray-900 group-hover:text-gold-800 transition-colors">
                    {trip.title}
                  </h3>
                  <p className="text-[11px] text-gray-600 line-clamp-2">
                    {trip.shortDescription}
                  </p>
                </div>

                <div className="p-4 pt-0">
                  <Link
                    href={`/${trip.slug}`}
                    className="block text-center w-full bg-[#faf9f6] hover:bg-gold-500 hover:text-luxury-dark text-xs text-gray-800 font-bold py-2 rounded border border-gray-200 hover:border-gold-500 transition-colors"
                  >
                    View Tour Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </div>
  );
}
