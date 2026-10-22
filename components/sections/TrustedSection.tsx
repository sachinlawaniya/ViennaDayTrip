'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';

const GOOGLE_REVIEWS = [
  {
    name: 'Palwinderjit Singh',
    initials: 'PS',
    avatarBg: 'bg-rose-500',
    stars: 5,
    text: 'We used Vienna Day Trip for our family trip from Vienna to Hallstatt. The Mercedes van was immaculate, water and wifi provided, and our driver was polite, knowledgeable and patient. Best chauffeur service in Austria!'
  },
  {
    name: 'sara picó',
    initials: 'SP',
    avatarBg: 'bg-blue-600',
    stars: 5,
    text: 'Everything was perfect! Punctual airport pickup at Vienna Airport (VIE) holding a name sign. Stress-free ride to the hotel. Highly recommend them for any Vienna transfer.'
  },
  {
    name: 'Gurj Singh',
    initials: 'GS',
    avatarBg: 'bg-amber-600',
    stars: 5,
    text: 'Booked a full day tour from Vienna to Salzburg and back. The chauffeur took us through scenic lakes and mountains. Superb vehicle comfort and spotless service.'
  },
  {
    name: 'Santosh Ranabhat',
    initials: 'SR',
    avatarBg: 'bg-orange-500',
    stars: 5,
    text: 'Professional chauffeur, great communication via WhatsApp, transparent pricing with no surprises. Will definitely book again next time I am in Vienna.'
  }
];

export default function TrustedSection() {
  return (
    <section className="py-20 bg-white text-gray-900 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. SECTION TITLE */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-wide">
            Trusted by International Travelers
          </h2>
        </div>

        {/* 2. REVIEWS CARDS ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {GOOGLE_REVIEWS.map((review, i) => (
            <div
              key={i}
              className="bg-[#faf9f6] rounded-xl p-5 border border-gray-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-full ${review.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-sm`}>
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 leading-tight">
                        {review.name}
                      </h4>
                      <div className="flex text-amber-400 mt-0.5">
                        {[...Array(review.stars)].map((_, idx) => (
                          <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Google G icon */}
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-4">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Write a review button */}
        <div className="flex justify-center mb-16">
          <a
            href="https://g.page/r/viennadaytrip/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-2.5 rounded-full bg-[#BFA37C] hover:bg-[#a88d67] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
          >
            Write a review
          </a>
        </div>

        {/* 3. WKO CHAMBER OF COMMERCE BADGE */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[#8e7a68] font-semibold mb-4">
            Official Member of the Austrian Economic Chamber
          </p>
          <div className="flex justify-center">
            <div className="relative w-48 h-16 sm:w-56 sm:h-20">
              <Image
                src="/images/destinations/ChatGPT-Image-Apr-9-2026-12_38_49-PM.png"
                alt="WKO Wirtschaftskammer Österreich Official Member"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* 4. THREE BRAND PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto mb-16">
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-gray-900">
              Luxury Fleet
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
              Premium Mercedes vehicles with professional, multilingual chauffeurs. In addition, our fleet is maintained to the highest standards for comfort and safety.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-gray-900">
              Vienna Expertise
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
              Over 7 years of trusted, licensed service in Vienna. Furthermore, our chauffeurs have extensive knowledge of Austria and Central Europe.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-gray-900">
              Discreet Service
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
              Tailored travel for VIPs, executives, and private clients. Therefore, we ensure privacy, reliability and personalised experiences.
            </p>
          </div>
        </div>

        {/* 5. TWO FEATURED LARGE SERVICE BANNERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          
          {/* Card 1: Airport Transfer Service */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-72 sm:h-80 group">
            <Image
              src="/images/destinations/Airport-transfer-vienna.png"
              alt="Airport Transfer Service Vienna"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Airport Transfer Service
              </h3>
              <p className="text-xs text-gray-200 line-clamp-2 max-w-md">
                Stress-free Vienna airport transfers with professional drivers tracking your flight and ensuring a smooth ride.
              </p>
              <div className="pt-2">
                <Link
                  href="/airport-transfer-vienna"
                  className="inline-block px-5 py-2 rounded-full bg-[#BFA37C] hover:bg-[#a88d67] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow"
                >
                  Explore Tour
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Vienna Sightseeing */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-72 sm:h-80 group">
            <Image
              src="/images/destinations/1024px-Wien_-_Schloss_Belvedere_oberes_1.jpg.webp"
              alt="Vienna Sightseeing Tour"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Vienna Sightseeing
              </h3>
              <p className="text-xs text-gray-200 line-clamp-2 max-w-md">
                Discover Vienna’s iconic palaces, Ringstrasse monuments and cultural treasures in ultimate comfort with a dedicated chauffeur.
              </p>
              <div className="pt-2">
                <Link
                  href="/vienna-sightseeing-tour"
                  className="inline-block px-5 py-2 rounded-full bg-[#BFA37C] hover:bg-[#a88d67] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow"
                >
                  Explore Tour
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Link
            href="/our-services"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-800 hover:text-gold-700 uppercase tracking-widest border-b border-gray-400 hover:border-gold-700 pb-1 transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
