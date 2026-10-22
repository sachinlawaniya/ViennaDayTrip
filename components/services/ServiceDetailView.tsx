import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Check, ArrowRight, Phone, MessageSquare, Star } from 'lucide-react';
import { ServiceItem } from '@/lib/types';
import { COMPANY_INFO, FLEET_VEHICLES } from '@/lib/content';
import FAQSection from '../sections/FAQSection';
import CTASection from '../sections/CTASection';

export default function ServiceDetailView({ service }: { service: ServiceItem }) {
  return (
    <div className="pt-24 bg-[#faf9f6] text-gray-800">
      {/* Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            className="object-cover object-center filter brightness-90 contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-[#faf9f6]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-gold-400/60 text-gold-900 text-xs tracking-wider uppercase font-bold shadow-sm">
            <span>Vienna Chauffeur Service</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-wide">
            {service.title}
          </h1>

          <p className="text-gray-700 text-sm sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            {service.subtitle}
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#booking-section"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 text-luxury-dark font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-md hover:shadow-gold/30 transition-all border border-gold-400/40"
            >
              <span>Book Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/436642035445?text=Hello,%20I%20am%20inquiring%20about%20your%20${encodeURIComponent(service.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3.5 rounded-lg shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
                Service Description
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                Professional & Reliable Chauffeur Standards
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-gray-900">
                What Makes Our {service.title} Superior
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <Check className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fleet Options for this Service */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-gray-900">
                Recommended Vehicles for this Service
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {FLEET_VEHICLES.slice(0, 3).map((car) => (
                  <div key={car.id} className="bg-white border border-gray-200 rounded-xl p-4 text-center space-y-2 shadow-sm">
                    <div className="relative w-full h-24 rounded-lg overflow-hidden bg-gray-100">
                      <Image src={car.image} alt={car.name} fill className="object-cover" />
                    </div>
                    <h4 className="font-serif text-xs font-bold text-gray-900">{car.name}</h4>
                    <span className="text-[10px] text-gold-800 font-bold block">{car.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200/90 rounded-2xl p-6 space-y-5 sticky top-28 shadow-xl">
              <h4 className="font-serif text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">
                Book {service.title}
              </h4>
              <p className="text-xs text-gray-500">
                Punctual, guaranteed fixed-price chauffeur service with professional English-speaking drivers.
              </p>

              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Licensed Austrian Chauffeurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>5.0 Star Rated Service</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <Link
                  href="/#booking-section"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 text-luxury-dark font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-md transition-all border border-gold-400/40"
                >
                  <span>Book Online</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={COMPANY_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 rounded-lg transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Reservation</span>
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

      {/* Service FAQs */}
      <FAQSection
        title={`${service.title} FAQs`}
        subtitle="Frequently asked questions about this service"
        faqs={service.faqs}
      />

      <CTASection />
    </div>
  );
}
