import React from 'react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Cancellation & Refund Policy | Vienna Day Trip',
  description: 'Read the official cancellation, amendment, refund, and no-show policies for Vienna Day Trip chauffeur services and day tours.',
  canonicalUrl: '/cancellation-refund-policy',
});

export default function CancellationPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-luxury-black text-gray-200 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2 border-b border-white/10 pb-6">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Terms & Conditions
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Cancellation & Refund Policy
          </h1>
          <p className="text-xs text-gray-400">
            Effective Date: 2026. Standard policies for all transfers and tours.
          </p>
        </div>

        <div className="bg-luxury-dark border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8 text-sm text-gray-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white">1. General Terms</h2>
            <p>
              By confirming a booking with Vienna Day Trip, the customer acknowledges and agrees to the following cancellation, amendment, refund, and no-show terms. These terms apply to all private airport transfers, hourly chauffeur hires, and regional day trips unless specifically agreed otherwise in writing.
            </p>
          </div>

          <div className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="font-serif text-xl font-bold text-white">2. Free Cancellation Period</h2>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong className="text-white">Airport & City Transfers:</strong> Free cancellation up to <strong className="text-gold">12 hours</strong> prior to scheduled pickup time.
              </li>
              <li>
                <strong className="text-white">Hourly Chauffeur Bookings & Day Trips:</strong> Free cancellation up to <strong className="text-gold">24 hours</strong> prior to scheduled departure.
              </li>
              <li>
                <strong className="text-white">Refund Processing:</strong> In the event of a timely cancellation, any pre-paid amounts will be refunded within 5 to 7 business days to the original payment method.
              </li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="font-serif text-xl font-bold text-white">3. Late Cancellations & No-Shows</h2>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                Cancellations made within 24 hours of departure for day trips or within 12 hours for transfers may incur a 50% to 100% cancellation charge to cover vehicle dispatch and reserved chauffeur scheduling.
              </li>
              <li>
                <strong className="text-white">No-Shows:</strong> If a passenger fails to arrive at the agreed meeting point within the complimentary waiting window (60 minutes for flights, 20 minutes for city addresses) without contacting dispatch, the reservation is treated as a no-show and charged in full.
              </li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="font-serif text-xl font-bold text-white">4. Flight Delays & Schedule Adjustments</h2>
            <p>
              Flight delays do not count as client cancellations. We monitor all commercial flights entering Vienna International Airport (VIE). If your incoming flight is delayed, your chauffeur's schedule is automatically updated without late penalties.
            </p>
          </div>

          <div className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="font-serif text-xl font-bold text-white">5. Force Majeure & Severe Weather</h2>
            <p>
              In rare situations of extreme alpine snowstorms, road closures, or governmental travel restrictions, tours may be rescheduled without penalty or refunded in full.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
