import React from 'react';
import DestinationDetailView from '@/components/destinations/DestinationDetailView';
import { DAY_TRIPS } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

const trip = DAY_TRIPS.find(t => t.id === 'wachau')!;

export const metadata = constructMetadata({
  title: 'Wachau Valley Day Trip from Vienna | Melk Abbey & Danube Wine Tour',
  description: 'Private day trip from Vienna to the Wachau Valley. Visit baroque Melk Abbey, medieval Dürnstein Castle ruins, terraced vineyards, and authentic Austrian wine tastings.',
  image: trip.heroImage,
  canonicalUrl: `/${trip.slug}`,
});

export default function WachauPage() {
  if (!trip) return notFound();
  return <DestinationDetailView trip={trip} />;
}
