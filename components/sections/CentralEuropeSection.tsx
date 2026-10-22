'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RouteCard {
  title: string;
  from: string;
  image: string;
  href: string;
}

const ROUTE_CARDS: RouteCard[] = [
  {
    title: 'Vienna Airport Pick & Drop-off',
    from: 'FROM VIENNA',
    image: '/images/destinations/Airport-transfer-vienna.png',
    href: '/airport-transfer-vienna'
  },
  {
    title: 'Vienna Sightseeing Tour',
    from: 'FROM VIENNA',
    image: '/images/destinations/1024px-Wien_-_Schloss_Belvedere_oberes_1.jpg.webp',
    href: '/vienna-sightseeing-tour'
  },
  {
    title: 'Wachau Valley Trip',
    from: 'FROM VIENNA',
    image: '/images/destinations/unnamed-1.jpg',
    href: '/wachau-valley-trip'
  },
  {
    title: 'Hallstatt Tour',
    from: 'FROM VIENNA',
    image: '/images/destinations/hallstatt-day-trip-2.webp',
    href: '/hallstatt-day-trip-from-vienna'
  },
  {
    title: 'Salzburg Day Trip',
    from: 'FROM VIENNA',
    image: '/images/destinations/Salzburg.webp',
    href: '/salzburg-day-trip'
  },
  {
    title: 'Budapest Day Trip',
    from: 'FROM VIENNA',
    image: '/images/destinations/pexels-dominikagregus-732057-scaled.webp',
    href: '/budapest-day-trip'
  },
  {
    title: 'Prague Day Trip',
    from: 'FROM VIENNA',
    image: '/images/destinations/unnamed.jpg',
    href: '/prague-day-trip'
  },
  {
    title: 'Bratislava Day Trip',
    from: 'FROM VIENNA',
    image: '/images/destinations/Bratislava-Castle.jpg',
    href: '/bratislava-day-trip'
  }
];

export default function CentralEuropeSection() {
  return (
    <section className="py-20 bg-white text-gray-900 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-wide">
            Explore Central Europe from Vienna
          </h2>
          <p className="text-xs sm:text-sm text-gold-800 font-medium">
            Choose from day trips to Hallstatt, Salzburg, Budapest, Prague, Bratislava, and Wachau Valley
          </p>
        </div>

        {/* Central Europe Map Graphic */}
        <div className="max-w-4xl mx-auto mb-6 bg-black rounded-2xl overflow-hidden shadow-xl border border-gray-900 relative">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
            <Image
              src="/images/destinations/Central-Europe-from-vienna.png"
              alt="Central Europe Day Trips from Vienna Map"
              fill
              className="object-contain p-2 sm:p-4"
              priority
            />
          </div>
        </div>

        {/* Caption below map */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-1">
          <Link
            href="/customized-day-trips"
            className="font-serif text-sm sm:text-base font-bold text-gold-800 hover:text-gold-900 transition-colors inline-block"
          >
            Signature Day Trips from Vienna
          </Link>
          <p className="text-xs text-gray-600 leading-relaxed">
            Door-to-door private day tours across Austria and Central Europe with a dedicated chauffeur. Travel in absolute comfort with customized itineraries.
          </p>
        </div>

        {/* 8 Day Trip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROUTE_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Info */}
                <div className="p-4 space-y-1.5">
                  <span className="text-[10px] tracking-wider uppercase text-gray-500 font-semibold block">
                    {card.from}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-gray-900 line-clamp-1 group-hover:text-gold-800 transition-colors">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 pt-0">
                <Link
                  href={card.href}
                  className="block w-full text-center py-2 px-4 rounded-full bg-[#BFA37C] hover:bg-[#a88d67] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Explore Tour
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
