import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { COMPANY_INFO } from '@/lib/content';

export const metadata = constructMetadata({
  title: 'Imprint (Impressum) | Vienna Day Trip',
  description: 'Legal imprint, business registration details, VAT ID, and regulatory authority disclosures for Vienna Day Trip in accordance with Austrian law (§ 5 ECG).',
  canonicalUrl: '/imprint',
});

export default function ImprintPage() {
  return (
    <div className="pt-28 pb-20 bg-luxury-black text-gray-200 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2 border-b border-white/10 pb-6">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Legal Disclosures (Impressum)
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Imprint
          </h1>
          <p className="text-xs text-gray-400">
            Information according to § 5 E-Commerce Act (ECG) and media disclosures.
          </p>
        </div>

        <div className="bg-luxury-dark border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 text-sm text-gray-300 leading-relaxed">
          <div className="space-y-1">
            <h2 className="font-serif text-lg font-bold text-white">Service Provider</h2>
            <p className="font-medium text-gold">Harmeet Singh Cheema</p>
            <p>Vienna Day Trip Chauffeur & Limousine Services</p>
            <p>Lechnerstraße 2-4</p>
            <p>1030 Vienna, Austria</p>
          </div>

          <div className="space-y-1 border-t border-white/10 pt-4">
            <h3 className="font-serif text-base font-bold text-white">Contact Information</h3>
            <p>Telephone: <a href={COMPANY_INFO.phoneHref} className="text-gold hover:underline">{COMPANY_INFO.phoneFormatted}</a></p>
            <p>Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-gold hover:underline">{COMPANY_INFO.email}</a></p>
            <p>Website: <a href="https://viennadaytrip.com" className="text-gold hover:underline">https://viennadaytrip.com</a></p>
          </div>

          <div className="space-y-1 border-t border-white/10 pt-4">
            <h3 className="font-serif text-base font-bold text-white">Registration & Regulatory Details</h3>
            <p><strong className="text-white">Business Purpose:</strong> Taxi & Limousine Service (Personenbeförderungsgewerbe)</p>
            <p><strong className="text-white">VAT Identification Number (UID):</strong> ATU80955236</p>
            <p><strong className="text-white">GLN (Global Location Number):</strong> 9110025257769</p>
            <p><strong className="text-white">GISA Number:</strong> 9110025257769</p>
            <p><strong className="text-white">Supervisory Authority:</strong> Magistrat der Stadt Wien (MBA 3)</p>
            <p><strong className="text-white">Chamber Membership:</strong> Wirtschaftskammer Wien (WKO), Fachgruppe Beförderungsgewerbe mit Personenkraftwagen</p>
            <p><strong className="text-white">Applicable Trade Law:</strong> Austrian Trade Regulation (Gewerbeordnung - GewO), accessible at <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-gold underline">www.ris.bka.gv.at</a></p>
          </div>

          <div className="space-y-2 border-t border-white/10 pt-4 text-xs text-gray-400">
            <h3 className="font-serif text-base font-bold text-white">Online Dispute Resolution</h3>
            <p>
              The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-gold underline">https://ec.europa.eu/consumers/odr</a>. We are not obliged or willing to participate in dispute resolution proceedings before a consumer arbitration board.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
