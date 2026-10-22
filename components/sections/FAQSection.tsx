'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQ[];
}

const DEFAULT_FAQS: FAQ[] = [
  {
    question: "How much does a private chauffeur cost in Vienna?",
    answer: "Pricing depends on distance, duration, and vehicle type. Airport transfers and hourly hires have fixed, transparent rates with zero hidden fees, flight tracking, and parking included. Contact us for an instant, guaranteed quote based on your specific route."
  },
  {
    question: "How far is Hallstatt from Vienna and can it be done in one day?",
    answer: "Hallstatt is approximately 290 km (approx. 3.5 hours drive each way) from Vienna. Our private full-day tour gives you 3.5 to 4 hours of relaxed exploration in Hallstatt with scenic stops along the way at Lake Wolfgang."
  },
  {
    question: "What happens if my flight arrives late at Vienna Airport?",
    answer: "We track your flight in real time using official aviation data. Your chauffeur automatically adjusts pickup time according to your actual touchdown, and 60 minutes of complimentary waiting time starts once the flight lands."
  },
  {
    question: "What is your cancellation and refund policy?",
    answer: "You can cancel free of charge up to 24 hours prior to your scheduled pickup time. Cancellations made within 24 hours are subject to our standard cancellation policy."
  },
  {
    question: "Are child safety seats available?",
    answer: "Yes, infant capsules, child car seats, and booster seats are provided free of charge upon request. Simply specify your child's age or weight when booking."
  },
  {
    question: "Can we customize our day trip itinerary on the day?",
    answer: "Yes! Because our tours are 100% private, you have full flexibility to pause for scenic photography, stop for Austrian coffee and pastries, or linger longer at any attraction."
  }
];

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our private chauffeur & day trip services",
  faqs = DEFAULT_FAQS
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#faf9f6] border-t border-gray-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
            Got Questions?
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gray-900 tracking-wide">
            {title}
          </h2>
          <p className="text-gray-600 text-sm">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200/90 rounded-xl overflow-hidden shadow-sm hover:border-gold-400 transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 text-gray-900 hover:text-gold-800 transition-colors focus:outline-none"
                >
                  <span className="font-serif text-sm sm:text-base font-bold">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-gold-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-fade-in bg-white">
                    {faq.answer}
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
