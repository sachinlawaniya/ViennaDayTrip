import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { DAY_TRIPS } from '@/lib/content';

export default function DayTripsSection() {
  return (
    <section className="py-24 bg-luxury-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Signature Itineraries
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-wide">
            Explore Central Europe from Vienna
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover fairytale alpine lakes, UNESCO world heritage sites, and grand imperial capitals with our private day trips. Relax as your personal chauffeur handles navigation, mountain roads, and parking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DAY_TRIPS.slice(0, 6).map((trip) => (
            <div
              key={trip.id}
              className="bg-luxury-dark border border-gold/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-gold/15 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Destination Image */}
                <div className="relative w-full h-60 bg-black/50 overflow-hidden">
                  <Image
                    src={trip.cardImage}
                    alt={trip.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {trip.badge && (
                    <div className="absolute top-3 right-3 bg-gold text-luxury-black font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                      {trip.badge}
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-gray-200">
                    <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span>{trip.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      <span>Private Tour</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors">
                    {trip.title}
                  </h3>
                  <p className="text-xs text-gold/90 font-medium">
                    {trip.subtitle}
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {trip.shortDescription}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-semibold text-gray-300 block mb-1">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1">
                      {trip.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="text-[11px] text-gray-400 flex items-start gap-1.5">
                          <span className="text-gold">•</span>
                          <span className="line-clamp-1">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 mt-2 flex items-center gap-3">
                <Link
                  href={`/${trip.slug}`}
                  className="flex-1 text-center bg-white/5 hover:bg-gold hover:text-luxury-dark text-white text-xs font-semibold py-2.5 rounded-lg border border-gold/30 hover:border-gold transition-all"
                >
                  View Itinerary
                </Link>
                <Link
                  href="/#booking-section"
                  className="px-4 py-2.5 bg-gold text-luxury-dark hover:bg-gold-400 rounded-lg text-xs font-bold transition-colors"
                  title="Book now"
                >
                  Book
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/our-services"
            className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-luxury-dark px-8 py-3 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all"
          >
            <span>View All Day Trips & Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
