import React from 'react';
import DestinationDetailView from '@/components/destinations/DestinationDetailView';
import { DAY_TRIPS } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

const trip = DAY_TRIPS.find(t => t.id === 'budapest')!;

export const metadata = constructMetadata({
  title: 'Budapest Day Trip from Vienna | Private Cross-Border Chauffeur',
  description: 'Private day trip from Vienna to Budapest. Cross into Hungary in executive comfort to see Fisherman’s Bastion, Buda Castle, Chain Bridge, and the Hungarian Parliament.',
  image: trip.heroImage,
  canonicalUrl: `/${trip.slug}`,
});

export default function BudapestPage() {
  if (!trip) return notFound();
  return <DestinationDetailView trip={trip} />;
}
