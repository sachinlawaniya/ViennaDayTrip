import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Briefcase, Check, ArrowRight } from 'lucide-react';
import { FLEET_VEHICLES } from '@/lib/content';

export default function FleetSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
              First-Class Fleet
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gray-900 tracking-wide">
              Travel in Pure Luxury & Comfort
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every vehicle in our fleet is maintained to the highest Mercedes-Benz standards, thoroughly sanitized before every ride, and stocked with chilled Austrian spring water.
            </p>
          </div>

          <Link
            href="/our-fleet"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold-800 hover:text-gold-900 font-bold transition-colors shrink-0"
          >
            <span>View Full Fleet Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLEET_VEHICLES.map((car) => (
            <div
              key={car.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-gold-400 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative w-full h-56 bg-gray-100 overflow-hidden border-b border-gray-100">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-gray-200 text-[11px] text-gray-900 font-bold shadow-sm">
                    {car.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-gold-800 transition-colors">
                      {car.name}
                    </h3>
                  </div>

                  {/* Passenger & Luggage Specs */}
                  <div className="flex items-center gap-5 text-xs text-gray-700 pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-gold-600" />
                      <span className="font-medium">Up to {car.passengers} Passengers</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-gold-600" />
                      <span className="font-medium">Up to {car.luggage} Bags</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs leading-relaxed">
                    {car.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-1.5 pt-2">
                    {car.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] text-gray-600">
                        <Check className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action */}
              <div className="p-6 pt-0 mt-4 border-t border-gray-100">
                <Link
                  href="/#booking-section"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#faf9f6] hover:bg-gold-500 hover:text-luxury-dark text-gray-800 text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg border border-gray-300 hover:border-gold-500 transition-all shadow-sm"
                >
                  <span>Book This Vehicle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
