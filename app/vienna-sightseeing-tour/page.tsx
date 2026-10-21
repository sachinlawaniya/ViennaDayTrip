import React from 'react';
import ServiceDetailView from '@/components/services/ServiceDetailView';
import { SERVICES } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

const service = SERVICES.find(s => s.id === 'sightseeing-tour')!;

export const metadata = constructMetadata({
  title: 'Vienna Sightseeing Tour | Private Chauffeured City Tour',
  description: 'Private luxury city sightseeing tour of Vienna. Experience Schönbrunn Palace, Belvedere, Ringstraße, and St. Stephen’s Cathedral at your own relaxed pace.',
  image: service.heroImage,
  canonicalUrl: `/${service.slug}`,
});

export default function SightseeingTourPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
