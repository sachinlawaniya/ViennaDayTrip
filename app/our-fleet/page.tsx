import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Briefcase, Check, ShieldCheck, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { FLEET_VEHICLES, COMPANY_INFO } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import CTASection from '@/components/sections/CTASection';

export const metadata = constructMetadata({
  title: 'Our Fleet | Luxury Mercedes Sedans, Vans & Armored Vehicles',
  description: 'View our executive fleet in Vienna: Mercedes-Benz E-Class, S-Class, V-Class luxury MPV, 16-seat Sprinter minibus, and certified armored security vehicles.',
  canonicalUrl: '/our-fleet',
});

export default function FleetPage() {
  return (
    <div className="pt-24 bg-luxury-black text-gray-200">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-black to-luxury-dark text-center border-b border-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Executive Vehicle Standards
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wide">
            Our Fleet
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Every vehicle in our fleet represents the pinnacle of German automotive engineering, meticulously maintained, sanitized before each trip, and driven by licensed professional chauffeurs.
          </p>
        </div>
      </section>

      {/* Fleet Vehicles Detailed Listing */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {FLEET_VEHICLES.map((vehicle, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={vehicle.id}
              className={`bg-luxury-dark border border-gold/30 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10 flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-10 items-center`}
            >
              {/* Image Frame */}
              <div className="w-full lg:w-1/2 relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-black/60 border border-white/10 group">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold/40 text-xs text-gold font-semibold">
                  {vehicle.category}
                </div>
              </div>

              {/* Specs & Description */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                    {vehicle.category}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mt-1">
                    {vehicle.name}
                  </h2>
                </div>

                <div className="flex items-center gap-6 text-xs sm:text-sm text-gray-300 py-3 border-y border-white/10">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gold" />
                    <span>Up to {vehicle.passengers} Passengers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-gold" />
                    <span>Up to {vehicle.luggage} Luggage Bags</span>
                  </div>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {vehicle.description}
                </p>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                    Key Features & Amenities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400">
                    {vehicle.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/#booking-section"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-luxury-black font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow transition-all"
                  >
                    <span>Reserve {vehicle.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`https://wa.me/436642035445?text=Hello,%20I%20am%20interested%20in%20reserving%20the%20${encodeURIComponent(vehicle.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-xs px-5 py-3 rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <CTASection />
    </div>
  );
}
