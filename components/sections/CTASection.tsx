import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/content';

export default function CTASection({
  title = "Ready to Experience Vienna in First-Class Comfort?",
  subtitle = "Contact our reservation desk 24/7 or submit your route online for an immediate fixed-price quote."
}) {
  return (
    <section className="py-20 bg-gradient-to-b from-luxury-dark to-black border-t border-gold/30 relative overflow-hidden text-center">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c9b18c_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <span className="text-xs uppercase tracking-widest text-gold font-semibold">
          Luxury Travel Across Austria & Beyond
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide max-w-2xl mx-auto">
          {title}
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#booking-section"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-luxury-black font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-xl hover:shadow-gold/20 transition-all transform hover:-translate-y-0.5"
          >
            <span>Book Your Chauffeur Online</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={COMPANY_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-700/90 hover:bg-emerald-600 text-white font-semibold text-xs px-6 py-3.5 rounded-lg transition-colors border border-emerald-500/30"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Instant Chat</span>
          </a>

          <a
            href={COMPANY_INFO.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gold/40 hover:bg-gold/10 text-gold text-xs font-semibold px-6 py-3.5 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call {COMPANY_INFO.phoneFormatted}</span>
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-gold" />
            <span>Average quote reply time: 15 mins</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>Guaranteed fixed transparent rates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
