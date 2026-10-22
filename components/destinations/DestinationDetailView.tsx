import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Check, ShieldCheck, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { DayTrip } from '@/lib/types';
import { COMPANY_INFO } from '@/lib/content';
import FAQSection from '../sections/FAQSection';
import CTASection from '../sections/CTASection';

export default function DestinationDetailView({ trip }: { trip: DayTrip }) {
  return (
    <div className="pt-24 bg-[#faf9f6] text-gray-800">
      {/* Destination Hero Banner */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={trip.heroImage}
            alt={trip.title}
            fill
            priority
            className="object-cover object-center filter brightness-90 contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-[#faf9f6]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-gold-400/60 text-gold-900 text-xs tracking-wider uppercase font-bold shadow-sm">
            <span>Private Day Trip from Vienna</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-wide">
            {trip.title}
          </h1>

          <p className="text-gray-700 text-sm sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            {trip.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-800 pt-3">
            <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gray-200 shadow-sm font-medium">
              <Clock className="w-4 h-4 text-gold-600" />
              <span>Duration: {trip.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gray-200 shadow-sm font-medium">
              <MapPin className="w-4 h-4 text-gold-600" />
              <span>Distance: {trip.distance}</span>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#booking-section"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 text-luxury-dark font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-md hover:shadow-gold/30 transition-all border border-gold-400/40"
            >
              <span>Book This Day Trip</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/436642035445?text=Hello,%20I%20am%20interested%20in%20the%20${encodeURIComponent(trip.title)}%20from%20Vienna.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3.5 rounded-lg shadow-sm transition-colors"
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
              <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
                Tour Overview
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                About the {trip.title}
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                {trip.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-gray-900">
                Tour Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trip.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <Check className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary Timeline */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
                  Sample Schedule
                </span>
                <h3 className="font-serif text-2xl font-bold text-gray-900">
                  Your Journey Itinerary
                </h3>
                <p className="text-xs text-gray-500">
                  Times are completely flexible and can be customized to your preferred pace.
                </p>
              </div>

              <div className="relative border-l-2 border-gold-400/40 ml-4 pl-6 space-y-8">
                {trip.itinerary.map((step, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-2 border-gold-600 group-hover:bg-gold-500 transition-colors shadow-sm" />

                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h4 className="font-serif text-sm sm:text-base font-bold text-gray-900 group-hover:text-gold-800 transition-colors">
                          {step.title}
                        </h4>
                        {step.duration && (
                          <span className="text-[10px] bg-gold-50 text-gold-800 font-bold px-2 py-0.5 rounded border border-gold-200">
                            {step.duration}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What is Included */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-gray-900">
                What's Included in Your Private Tour
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
                {trip.included.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Quick Booking Box */}
          <div className="space-y-8">
            <div className="bg-white border border-gray-200/90 rounded-2xl p-6 space-y-5 sticky top-28 shadow-xl">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-[10px] uppercase tracking-widest text-gold-700 font-bold">
                  Instant Reservation
                </span>
                <h4 className="font-serif text-lg font-bold text-gray-900 mt-1">
                  Book {trip.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Fixed private tour rate. Zero hidden fees.
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-gray-700">
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500">Duration:</span>
                  <span className="font-bold text-gray-900">{trip.duration}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500">Type:</span>
                  <span className="font-bold text-gray-900">100% Private</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500">Pickup:</span>
                  <span className="font-bold text-gray-900">Any Vienna Hotel / Address</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500">Vehicle:</span>
                  <span className="font-bold text-gray-900">Mercedes E, S, V-Class</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <Link
                  href="/#booking-section"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 text-luxury-dark font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-md transition-all border border-gold-400/40"
                >
                  <span>Select Date & Book</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/436642035445?text=Hello,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20${encodeURIComponent(trip.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 rounded-lg transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </a>

                <a
                  href={COMPANY_INFO.phoneHref}
                  className="w-full inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gold-500 text-gray-700 hover:text-gray-900 text-xs font-semibold py-2.5 rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-600" />
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
