import React from 'react';
import DestinationDetailView from '@/components/destinations/DestinationDetailView';
import { DAY_TRIPS } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

const trip = DAY_TRIPS.find(t => t.id === 'salzburg')!;

export const metadata = constructMetadata({
  title: 'Salzburg Day Trip from Vienna | Private Chauffeur Tour to Mozart’s City',
  description: 'Full-day private tour from Vienna to Salzburg in Mercedes luxury. Discover Mirabell Gardens, Mozart’s Birthplace, Hohensalzburg Fortress, and Sound of Music sights.',
  image: trip.heroImage,
  canonicalUrl: `/${trip.slug}`,
});

export default function SalzburgPage() {
  if (!trip) return notFound();
  return <DestinationDetailView trip={trip} />;
}
