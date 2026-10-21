import React from 'react';
import DestinationDetailView from '@/components/destinations/DestinationDetailView';
import { DAY_TRIPS } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

const trip = DAY_TRIPS.find(t => t.id === 'hallstatt')!;

export const metadata = constructMetadata({
  title: 'Hallstatt Day Trip from Vienna | Private Chauffeur Tour',
  description: 'Book a luxury private day trip from Vienna to Hallstatt. Door-to-door hotel pickup in Mercedes-Benz, scenic Salzkammergut lakes, and 4 hours of leisure time in fairytale Hallstatt.',
  image: trip.heroImage,
  canonicalUrl: `/${trip.slug}`,
});

export default function HallstattPage() {
  if (!trip) return notFound();
  return <DestinationDetailView trip={trip} />;
}
