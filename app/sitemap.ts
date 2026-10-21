import { MetadataRoute } from 'next';
import blogsData from '@/lib/blogs-data.json';
import { DAY_TRIPS, SERVICES } from '@/lib/content';

const BASE_URL = 'https://viennadaytrip.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Primary static routes
  const staticRoutes = [
    '',
    '/about-vienna-day-trip',
    '/our-services',
    '/our-fleet',
    '/b2b-solutions',
    '/tour-pricing',
    '/booking',
    '/contact-us-i',
    '/blog',
    '/privacy-policy',
    '/cancellation-refund-policy',
    '/imprint',
    '/zell-am-see-and-kaprun',
    '/customized-day-trips',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Day Trip Routes
  const dayTripRoutes = DAY_TRIPS.map((trip) => ({
    url: `${BASE_URL}/${trip.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Service Routes
  const serviceRoutes = SERVICES.map((srv) => ({
    url: `${BASE_URL}/${srv.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Blog Post Routes
  const blogRoutes = blogsData.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dayTripRoutes, ...serviceRoutes, ...blogRoutes];
}
