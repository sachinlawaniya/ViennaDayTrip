import React from 'react';
import DestinationDetailView from '@/components/destinations/DestinationDetailView';
import { DAY_TRIPS } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

const trip = DAY_TRIPS.find(t => t.id === 'customized')!;

export const metadata = constructMetadata({
  title: 'Customized Day Trips From Vienna | Bespoke European Chauffeur Tours',
  description: 'Design your custom private day trip across Austria, Czechia, Slovakia, Hungary, or Germany. Tailored departure times, personal driver, and flexible stops.',
  image: trip.heroImage,
  canonicalUrl: `/${trip.slug}`,
});

export default function CustomizedPage() {
  if (!trip) return notFound();
  return <DestinationDetailView trip={trip} />;
}
