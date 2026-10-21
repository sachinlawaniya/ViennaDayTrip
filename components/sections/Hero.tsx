import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Award, Star, Clock } from 'lucide-react';
import BookingWidget from '../booking/BookingWidget';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden bg-luxury-black">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/destinations/new-hero-image.jpeg"
          alt="Luxury Chauffeur Service Vienna"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-luxury-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-6">
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/30 text-gold text-xs tracking-widest uppercase font-semibold animate-fade-in">
          <Award className="w-3.5 h-3.5 text-gold" />
          <span>Vienna’s Premier Chauffeur & Day Trip Company</span>
        </div>

        {/* Main H1 Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wide max-w-4xl mx-auto leading-tight drop-shadow-md">
          Your Private Chauffeur in <span className="gold-text-gradient">Vienna</span> & Beyond
        </h1>

        {/* Subtitle */}
        <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
          Airport pick-up, hourly executive chauffeur service, and bespoke private day trips across Central Europe in first-class Mercedes-Benz luxury.
        </p>

        {/* Trust Stats Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-300 pt-2 pb-6">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-white">5.0 Google Rating</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>Fixed Transparent Pricing</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold" />
            <span>Flight Monitoring Included</span>
          </div>
        </div>

        {/* Interactive Booking Widget Embedded */}
        <div className="pt-2">
          <BookingWidget />
        </div>
      </div>
    </section>
  );
}
