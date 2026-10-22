'use client';

import React from 'react';
import Image from 'next/image';
import BookingWidget from '../booking/BookingWidget';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image: Belvedere Palace & Mercedes Chauffeur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/destinations/new-hero-image.jpeg"
          alt="Luxury Transfers & Private Day Trips Vienna"
          fill
          priority
          className="object-cover object-center filter brightness-[0.75] contrast-[1.05]"
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-4">
        {/* Eyebrow in Gold */}
        <p className="text-xs sm:text-sm uppercase tracking-[3px] text-[#dec6a1] font-semibold font-sans drop-shadow">
          First Class Chauffeur Service in Vienna &amp; Beyond
        </p>

        {/* Main H1 Title in Crisp White Serif */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-wide max-w-4xl mx-auto leading-tight drop-shadow-md">
          Luxury Transfers &amp; Private Day Trips
        </h1>

        {/* Embedded White Booking Widget */}
        <div className="pt-4 max-w-5xl mx-auto">
          <BookingWidget />
        </div>
      </div>
    </section>
  );
}
