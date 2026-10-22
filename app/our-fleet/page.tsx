import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Briefcase, Check, ArrowRight, MessageSquare } from 'lucide-react';
import { FLEET_VEHICLES } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import CTASection from '@/components/sections/CTASection';

export const metadata = constructMetadata({
  title: 'Our Fleet | Luxury Mercedes Sedans, Vans & Armored Vehicles',
  description: 'View our executive fleet in Vienna: Mercedes-Benz E-Class, S-Class, V-Class luxury MPV, 16-seat Sprinter minibus, and certified armored security vehicles.',
  canonicalUrl: '/our-fleet',
});

export default function FleetPage() {
  return (
    <div className="pt-24 bg-[#faf9f6] text-gray-800">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-white to-[#faf9f6] text-center border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
            Executive Vehicle Standards
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-wide">
            Our Fleet
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
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
              className={`bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl p-6 sm:p-10 flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-10 items-center`}
            >
              {/* Image Frame */}
              <div className="w-full lg:w-1/2 relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 group">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gray-200 text-xs text-gray-900 font-bold shadow-sm">
                  {vehicle.category}
                </div>
              </div>

              {/* Specs & Description */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
                    {vehicle.category}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gray-900 mt-1">
                    {vehicle.name}
                  </h2>
                </div>

                <div className="flex items-center gap-6 text-xs sm:text-sm text-gray-700 py-3 border-y border-gray-100">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gold-600" />
                    <span className="font-medium">Up to {vehicle.passengers} Passengers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-gold-600" />
                    <span className="font-medium">Up to {vehicle.luggage} Luggage Bags</span>
                  </div>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {vehicle.description}
                </p>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block">
                    Key Features & Amenities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                    {vehicle.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/#booking-section"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 text-luxury-dark font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-md transition-all border border-gold-400/40"
                  >
                    <span>Reserve {vehicle.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`https://wa.me/436642035445?text=Hello,%20I%20am%20interested%20in%20reserving%20the%20${encodeURIComponent(vehicle.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3 rounded-lg shadow-sm transition-colors"
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
