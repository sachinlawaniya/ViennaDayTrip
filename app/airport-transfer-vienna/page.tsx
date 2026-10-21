import React from 'react';
import ServiceDetailView from '@/components/services/ServiceDetailView';
import { SERVICES } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

const service = SERVICES.find(s => s.id === 'airport-transfer')!;

export const metadata = constructMetadata({
  title: 'Vienna Airport Pick & Drop-off | Private Airport Chauffeur (VIE)',
  description: 'Fixed-rate private transfers to and from Vienna International Airport (Schwechat VIE). Real-time flight tracking, 60 minutes free waiting time, and meet & greet in arrivals.',
  image: service.heroImage,
  canonicalUrl: `/${service.slug}`,
});

export default function AirportTransferPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
