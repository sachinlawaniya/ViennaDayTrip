import React from 'react';
import DestinationDetailView from '@/components/destinations/DestinationDetailView';
import { DAY_TRIPS } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

const trip = DAY_TRIPS.find(t => t.id === 'zell-am-see')!;

export const metadata = constructMetadata({
  title: 'Vienna to Zell am See and Kaprun | Private Transfer & Alpine Tour',
  description: 'Direct door-to-door private transfer and tour from Vienna to Zell am See and Kaprun. Travel in luxury with ample luggage space for ski and alpine equipment.',
  image: trip.heroImage,
  canonicalUrl: `/${trip.slug}`,
});

export default function ZellAmSeePage() {
  if (!trip) return notFound();
  return <DestinationDetailView trip={trip} />;
}
