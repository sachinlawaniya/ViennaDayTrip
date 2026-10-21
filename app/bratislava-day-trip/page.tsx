import React from 'react';
import DestinationDetailView from '@/components/destinations/DestinationDetailView';
import { DAY_TRIPS } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

const trip = DAY_TRIPS.find(t => t.id === 'bratislava')!;

export const metadata = constructMetadata({
  title: 'Bratislava Day Trip from Vienna | 1-Hour Private Chauffeur Tour',
  description: 'Visit Slovakia’s charming capital Bratislava, just 1 hour from Vienna by private car. Discover Bratislava Castle, UFO Bridge, and the medieval Old Town.',
  image: trip.heroImage,
  canonicalUrl: `/${trip.slug}`,
});

export default function BratislavaPage() {
  if (!trip) return notFound();
  return <DestinationDetailView trip={trip} />;
}
