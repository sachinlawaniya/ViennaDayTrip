'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionItem {
  number: string;
  title: string;
  content: string;
}

const ACCORDION_ITEMS: AccordionItem[] = [
  {
    number: '01',
    title: 'Professional Chauffeurs',
    content: 'Experienced English-speaking chauffeurs trained for luxury hospitality and premium customer service. Every driver is officially licensed and possesses exhaustive route knowledge of Austria and Central Europe.'
  },
  {
    number: '02',
    title: 'Luxury Fleet',
    content: 'Travel in premium Mercedes vehicles including E-Class, S-Class, and V-Class for maximum comfort. Each vehicle features leather upholstery, rear climate control, mineral water, and onboard Wi-Fi.'
  },
  {
    number: '03',
    title: 'Fixed Transparent Pricing',
    content: 'No hidden charges. Clear upfront pricing for airport transfers, hourly bookings, and European day trips with highway tolls, flight tracking, and parking included.'
  },
  {
    number: '04',
    title: '24/7 Availability',
    content: 'Book anytime with round-the-clock chauffeur services for airports, hotels, business meetings, and private tours across Austria, Germany, the Czech Republic, Hungary, and Slovakia.'
  }
];

export default function ExperienceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[3px] text-[#C8A96B] font-semibold block font-sans">
            FACTS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-white tracking-wide leading-tight">
            Premium Chauffeur Experience Across Europe
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed pt-2 font-sans">
            Experience luxury travel with professional chauffeurs, premium vehicles, and seamless transfers designed for international travelers.
          </p>
        </div>

        {/* Accordion Wrapper */}
        <div className="space-y-4">
          {ACCORDION_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-md ${
                  isOpen
                    ? 'border-[#C8A96B] bg-white/[0.05]'
                    : 'border-[#C8A96B]/25 bg-white/[0.02] hover:border-[#C8A96B]/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 sm:px-8 py-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-sm sm:text-base text-[#C8A96B] font-bold">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-base sm:text-xl font-medium text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>

                  <span className="w-8 h-8 rounded-full border border-[#C8A96B]/40 flex items-center justify-center text-[#C8A96B] text-lg shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-0 animate-fade-in">
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed pl-10 sm:pl-12 max-w-3xl">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
