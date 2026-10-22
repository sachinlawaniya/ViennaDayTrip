import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/content';

export default function CTASection({
  title = "Ready to Experience Vienna in First-Class Comfort?",
  subtitle = "Contact our reservation desk 24/7 or submit your route online for an immediate fixed-price quote."
}) {
  return (
    <section className="py-24 bg-gradient-to-b from-[#faf9f6] via-white to-[#faf9f6] border-t border-gray-200/80 relative overflow-hidden text-center">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c9b18c_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
          Luxury Travel Across Austria & Beyond
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-wide max-w-2xl mx-auto">
          {title}
        </h2>

        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#booking-section"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-600 hover:to-gold-500 text-luxury-dark font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-md hover:shadow-gold/30 transition-all transform hover:-translate-y-0.5 border border-gold-400/40"
          >
            <span>Book Your Chauffeur Online</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={COMPANY_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3.5 rounded-lg transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Instant Chat</span>
          </a>

          <a
            href={COMPANY_INFO.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-gold-500 hover:bg-gold-50 text-gold-900 text-xs font-bold px-6 py-3.5 rounded-lg transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4 text-gold-600" />
            <span>Call {COMPANY_INFO.phoneFormatted}</span>
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-gold-600" />
            <span>Average quote reply time: 15 mins</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Guaranteed fixed transparent rates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
