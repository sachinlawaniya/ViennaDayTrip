import React from 'react';
import DestinationDetailView from '@/components/destinations/DestinationDetailView';
import { DAY_TRIPS } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

const trip = DAY_TRIPS.find(t => t.id === 'prague')!;

export const metadata = constructMetadata({
  title: 'Prague Day Trip from Vienna | Private Tour to Czech Republic',
  description: 'Private day trip from Vienna to Prague in first-class Mercedes comfort. Experience Prague Castle, Charles Bridge, Old Town Square, and the Astronomical Clock.',
  image: trip.heroImage,
  canonicalUrl: `/${trip.slug}`,
});

export default function PraguePage() {
  if (!trip) return notFound();
  return <DestinationDetailView trip={trip} />;
}
