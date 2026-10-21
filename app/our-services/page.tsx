import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, ShieldCheck, Clock, Plane, Car, Compass, Shield } from 'lucide-react';
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
    <div className="pt-24 bg-luxury-black text-gray-200">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-black to-luxury-dark text-center border-b border-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Comprehensive Chauffeur Solutions
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wide">
            Our Services
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            From punctual airport meet-and-greets to full-day multi-country excursions, every service is delivered with exemplary professionalism, discretion, and luxury.
          </p>
        </div>
      </section>

      {/* Primary Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Core Chauffeur Services
          </h2>
          <p className="text-xs text-gray-400">
            Tailored for business executives, international holidaymakers, and diplomatic delegations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv, idx) => {
            const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
            return (
              <div
                key={srv.id}
                className="bg-luxury-dark border border-gold/30 rounded-2xl p-8 hover:border-gold/70 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold bg-white/5 px-2.5 py-1 rounded">
                      24/7 Available
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-gold/90 font-medium mt-1">
                      {srv.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {srv.shortDescription}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {srv.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                        <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/${srv.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs text-gold font-semibold uppercase tracking-wider hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/#booking-section"
                    className="bg-white/5 hover:bg-gold hover:text-luxury-dark text-white text-xs font-semibold px-4 py-2 rounded-lg border border-gold/30 hover:border-gold transition-all"
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
      <section className="py-20 bg-black/60 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold">
              Explore with Us
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Private Day Trips from Vienna
            </h2>
            <p className="text-xs text-gray-400">
              Cross-border journeys and alpine adventures in luxury Mercedes vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DAY_TRIPS.map((trip) => (
              <div
                key={trip.id}
                className="bg-luxury-dark border border-white/10 rounded-xl overflow-hidden hover:border-gold/50 transition-all flex flex-col justify-between group"
              >
                <div className="relative w-full h-44 bg-black/50">
                  <Image
                    src={trip.cardImage}
                    alt={trip.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-gold font-semibold">
                    {trip.duration}
                  </div>
                </div>

                <div className="p-4 space-y-2 flex-grow">
                  <h3 className="font-serif text-base font-bold text-white group-hover:text-gold transition-colors">
                    {trip.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 line-clamp-2">
                    {trip.shortDescription}
                  </p>
                </div>

                <div className="p-4 pt-0">
                  <Link
                    href={`/${trip.slug}`}
                    className="block text-center w-full bg-white/5 hover:bg-gold hover:text-luxury-dark text-xs text-white font-medium py-2 rounded border border-white/10 hover:border-gold transition-colors"
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
