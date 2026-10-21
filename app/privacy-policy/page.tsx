import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { COMPANY_INFO } from '@/lib/content';

export const metadata = constructMetadata({
  title: 'Privacy Policy | Vienna Day Trip',
  description: 'Understand how Vienna Day Trip collects, protects, and processes personal data in strict compliance with the General Data Protection Regulation (GDPR).',
  canonicalUrl: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-luxury-black text-gray-200 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2 border-b border-white/10 pb-6">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Data Protection & GDPR
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-400">
            Last Updated: 2026. How we protect and respect your personal information.
          </p>
        </div>

        <div className="bg-luxury-dark border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8 text-sm text-gray-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white">1. Controller Overview</h2>
            <p>
              The responsible data controller for this website and chauffeur service is Harmeet Singh Cheema (Vienna Day Trip), Lechnerstraße 2-4, 1030 Vienna, Austria. Email: {COMPANY_INFO.email}.
            </p>
          </div>

          <div className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="font-serif text-xl font-bold text-white">2. What Data We Collect & Why</h2>
            <p>
              When you submit a quote request, communicate via WhatsApp, or book a private chauffeur, we collect the necessary personal data to deliver the transport contract (Article 6(1)(b) GDPR):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Contact details: Name, email address, telephone / WhatsApp number.</li>
              <li>Trip details: Pickup location, destination, flight numbers, pickup dates, times, and luggage quantity.</li>
              <li>Special requirements: Child safety seat requests or accessibility notes.</li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="font-serif text-xl font-bold text-white">3. Data Retention & Sharing</h2>
            <p>
              We do not sell, rent, or monetize your personal information. Data is shared exclusively with your assigned chauffeur for the purpose of executing your journey, and with tax/accounting advisors where required by Austrian commercial law (§ 132 BAO).
            </p>
          </div>

          <div className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="font-serif text-xl font-bold text-white">4. Your Rights Under GDPR</h2>
            <p>
              As an EU data subject, you have the right to request access to, rectification of, or erasure of your personal data, as well as the right to data portability and restriction of processing. Contact us anytime at <a href={`mailto:${COMPANY_INFO.email}`} className="text-gold underline">{COMPANY_INFO.email}</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
