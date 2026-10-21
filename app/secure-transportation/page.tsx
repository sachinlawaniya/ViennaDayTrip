import React from 'react';
import ServiceDetailView from '@/components/services/ServiceDetailView';
import { SERVICES } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

const service = SERVICES.find(s => s.id === 'secure-transportation')!;

export const metadata = constructMetadata({
  title: 'Secure Transportation Vienna | Armored Vehicles & VIP Close Protection',
  description: 'Discreet and certified secure transportation services in Vienna and across Central Europe. Tactical close-protection chauffeurs, B6/B7 armored vehicles, and diplomatic protocols.',
  image: service.heroImage,
  canonicalUrl: `/${service.slug}`,
});

export default function SecureTransportationPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
