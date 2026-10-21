import React from 'react';
import ServiceDetailView from '@/components/services/ServiceDetailView';
import { SERVICES } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

const service = SERVICES.find(s => s.id === 'hourly-chauffeur')!;

export const metadata = constructMetadata({
  title: 'Hourly Chauffeur Service Vienna | Private Driver on Standby',
  description: 'Hire a dedicated private chauffeur by the hour in Vienna. Perfect for executive roadshows, shopping sprees, embassies, and flexible city meetings in Mercedes-Benz luxury.',
  image: service.heroImage,
  canonicalUrl: `/${service.slug}`,
});

export default function HourlyChauffeurPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
