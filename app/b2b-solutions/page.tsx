import React from 'react';
import Link from 'next/link';
import { Building2, Briefcase, Globe, Hotel, ShieldCheck, Check, ArrowRight, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export const metadata = constructMetadata({
  title: 'B2B Solutions & Chauffeur Partnerships | Vienna Day Trip',
  description: 'Corporate chauffeur partnerships for luxury hotels, travel agents, event organizers, and embassies in Vienna. Priority dispatch, net invoicing, and fixed corporate rates.',
  canonicalUrl: '/b2b-solutions',
});

const PARTNER_TYPES = [
  {
    icon: Hotel,
    title: "5-Star & Boutique Hotels",
    description: "Provide your guests with seamless airport transfers and bespoke day tours arranged via our dedicated hotel concierge desk."
  },
  {
    icon: Globe,
    title: "Travel Agencies & DMCs",
    description: "Reliable ground transportation partner in Austria with guaranteed commission structures, white-label meet & greets, and 24/7 coordination."
  },
  {
    icon: Briefcase,
    title: "Corporate Roadshows & Executives",
    description: "Fixed corporate accounts, monthly consolidated invoicing, and executive chauffeur service for international business travelers."
  },
  {
    icon: Building2,
    title: "Embassies & Diplomatic Delegations",
    description: "Confidential transportation, motorcade convoys, and security-trained chauffeurs for high-level summits and state visits."
  }
];

const B2B_BENEFITS = [
  "Guaranteed priority fleet dispatch during peak seasons",
  "Dedicated 24/7 B2B account manager and fast-response hotline",
  "Consolidated monthly invoicing (SEPA, wire transfer, corporate credit cards)",
  "Discreet, impeccably attired English and German-speaking chauffeurs",
  "Custom white-label name signs with partner or client corporate logos",
  "Comprehensive liability insurance covering all passengers"
];

const B2B_FAQS = [
  {
    question: "How do we set up a corporate B2B account?",
    answer: "Simply contact our B2B team via email or phone. We will set up your corporate profile with your preferred billing terms and special corporate rates within 24 hours."
  },
  {
    question: "Do you offer commissions for travel agents and hotel concierges?",
    answer: "Yes, we provide attractive, transparent commission models or net negotiated rates for verified travel agents, tour operators, and concierge desks."
  },
  {
    question: "Can you accommodate last-minute bookings?",
    answer: "Yes, our central dispatch operates 24/7 and we maintain reserved contingency fleet capacity for registered B2B partners."
  }
];

export default function B2BSolutionsPage() {
  return (
    <div className="pt-24 bg-luxury-black text-gray-200">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-black to-luxury-dark text-center border-b border-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Corporate & Agency Partnerships
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wide">
            Partners & B2B Solutions
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Looking for a dependable chauffeur partner in Vienna for your valued guests, executives, or travel clients? We deliver uncompromising service excellence.
          </p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Partnership Ecosystem
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Who We Work With
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNER_TYPES.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="bg-luxury-dark border border-gold/25 hover:border-gold/70 rounded-2xl p-6 transition-all space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/60 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold">
              The Partner Advantage
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Why Partner With Vienna Day Trip
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {B2B_BENEFITS.map((benefit, i) => (
              <div
                key={i}
                className="bg-luxury-dark border border-white/10 rounded-xl p-5 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-xs text-gray-300 leading-relaxed font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Partner Inquiry Box */}
          <div className="bg-gradient-to-r from-luxury-dark via-black to-luxury-dark border border-gold/40 rounded-2xl p-8 text-center space-y-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Become a Corporate or Travel Partner
            </h3>
            <p className="text-xs text-gray-400 max-w-lg mx-auto">
              Send us your business details or reach out directly to set up your corporate account.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${COMPANY_INFO.email}?subject=B2B%20Partnership%20Inquiry%20-%20Vienna%20Day%20Trip`}
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-400 text-luxury-black font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email B2B Team</span>
              </a>
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-2 border border-white/20 hover:border-gold text-white text-xs font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call {COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="B2B & Partner FAQs"
        subtitle="Common questions from corporate accounts and travel agencies"
        faqs={B2B_FAQS}
      />

      <CTASection />
    </div>
  );
}
