import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Check, ShieldCheck, ArrowRight, Phone, MessageSquare, Calendar } from 'lucide-react';
import { DayTrip } from '@/lib/types';
import { COMPANY_INFO, FLEET_VEHICLES } from '@/lib/content';
import FAQSection from '../sections/FAQSection';
import CTASection from '../sections/CTASection';

export default function DestinationDetailView({ trip }: { trip: DayTrip }) {
  return (
    <div className="pt-24 bg-luxury-black text-gray-200">
      {/* Destination Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={trip.heroImage}
            alt={trip.title}
            fill
            priority
            className="object-cover object-center filter brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs tracking-wider uppercase font-semibold">
            <span>Private Day Trip from Vienna</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide">
            {trip.title}
          </h1>

          <p className="text-gray-200 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {trip.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300 pt-3">
            <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <Clock className="w-4 h-4 text-gold" />
              <span>Duration: {trip.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Distance: {trip.distance}</span>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#booking-section"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-luxury-black font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-lg shadow-xl"
            >
              <span>Book This Day Trip</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/436642035445?text=Hello,%20I%20am%20interested%20in%20the%20${encodeURIComponent(trip.title)}%20from%20Vienna.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs px-6 py-3 rounded-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left 2 Cols: Overview, Highlights, Timeline */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                Tour Overview
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                About the {trip.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {trip.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white/5 border border-gold/30 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="font-serif text-xl font-bold text-white">
                Tour Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trip.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-200">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary Timeline */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                  Sample Schedule
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Your Journey Itinerary
                </h3>
                <p className="text-xs text-gray-400">
                  Times are completely flexible and can be customized to your preferred pace.
                </p>
              </div>

              <div className="relative border-l-2 border-gold/30 ml-4 pl-6 space-y-8">
                {trip.itinerary.map((step, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-luxury-black border-2 border-gold group-hover:bg-gold transition-colors" />

                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h4 className="font-serif text-sm sm:text-base font-bold text-white group-hover:text-gold transition-colors">
                          {step.title}
                        </h4>
                        {step.duration && (
                          <span className="text-[10px] bg-white/10 text-gold px-2 py-0.5 rounded">
                            {step.duration}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What is Included */}
            <div className="bg-luxury-dark border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="font-serif text-lg font-bold text-white">
                What's Included in Your Private Tour
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                {trip.included.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Quick Booking Box & Recommended Vehicles */}
          <div className="space-y-8">
            <div className="bg-luxury-dark border border-gold/40 rounded-2xl p-6 space-y-5 sticky top-28 shadow-2xl">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                  Instant Reservation
                </span>
                <h4 className="font-serif text-lg font-bold text-white mt-1">
                  Book {trip.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Fixed private tour rate. Zero hidden fees.
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-gray-300">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Duration:</span>
                  <span className="font-medium text-white">{trip.duration}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Type:</span>
                  <span className="font-medium text-white">100% Private</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Pickup:</span>
                  <span className="font-medium text-white">Any Vienna Hotel / Address</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Vehicle:</span>
                  <span className="font-medium text-white">Mercedes E, S, V-Class</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <Link
                  href="/#booking-section"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-luxury-black font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow transition-all"
                >
                  <span>Select Date & Book</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/436642035445?text=Hello,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20${encodeURIComponent(trip.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-xs py-2.5 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </a>

                <a
                  href={COMPANY_INFO.phoneHref}
                  className="w-full inline-flex items-center justify-center gap-2 border border-white/10 hover:border-gold/40 text-gray-300 hover:text-white text-xs py-2.5 rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>Call {COMPANY_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination FAQs */}
      <FAQSection
        title={`${trip.title} FAQs`}
        subtitle="Common questions about this private day trip route"
        faqs={trip.faqs}
      />

      {/* Bottom CTA */}
      <CTASection
        title={`Ready to explore ${trip.title}?`}
        subtitle="Book online or speak with our concierge dispatch team to personalize your itinerary."
      />
    </div>
  );
}
