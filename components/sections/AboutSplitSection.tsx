'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function AboutSplitSection() {
  return (
    <section className="bg-[#776457] py-20 px-6 sm:px-12 lg:px-16 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Column Content */}
        <div className="flex-1 space-y-6">
          <div className="inline-block bg-[#c9b18c] text-white font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-md tracking-wider uppercase shadow-sm">
            NEW CUSTOMER OFFER
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Vienna Day Trip – Private Day Trips &amp; Chauffeur Tours from Vienna
          </h2>

          <p className="text-gray-100 text-sm sm:text-base leading-relaxed opacity-95">
            Vienna Day Trip is Vienna&apos;s premier private day trip and chauffeur service. Book a private day trip from Vienna to Hallstatt, Salzburg, Budapest or Bratislava with an expert local chauffeur. Trusted by international travellers for over 7 years.
          </p>

          <ul className="space-y-3.5 pt-2">
            <li className="flex items-center gap-3 text-sm sm:text-base">
              <span className="w-6 h-6 rounded-full bg-[#c9b18c] text-white flex items-center justify-center shrink-0 text-xs shadow-sm">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span>Available for Vienna airport transfers, city limousine &amp; day trips</span>
            </li>
            <li className="flex items-center gap-3 text-sm sm:text-base">
              <span className="w-6 h-6 rounded-full bg-[#c9b18c] text-white flex items-center justify-center shrink-0 text-xs shadow-sm">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span>Licensed, English-speaking drivers with modern vehicles</span>
            </li>
            <li className="flex items-center gap-3 text-sm sm:text-base">
              <span className="w-6 h-6 rounded-full bg-[#c9b18c] text-white flex items-center justify-center shrink-0 text-xs shadow-sm">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span>Free cancellation up to 24 hours before pickup</span>
            </li>
          </ul>

          <div className="pt-4">
            <Link
              href="/#booking-section"
              className="inline-block bg-[#c9b18c] hover:bg-[#30221D] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
            >
              BOOK YOUR VIENNA LIMOUSINE
            </Link>
            <p className="text-xs text-gray-200 opacity-80 mt-3">
              *Terms Applied • New Customers Only • Contact us for pricing
            </p>
          </div>
        </div>

        {/* Right Column Image */}
        <div className="flex-1 w-full relative">
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <Image
              src="/images/destinations/daniel-klaffke-pVoYP5q16ms-unsplash-scaled.jpg"
              alt="Scenic European destination on a private chauffeur day trip from Vienna"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
