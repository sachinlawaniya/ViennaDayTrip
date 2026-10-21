import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'viennadaytrip.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.trustindex.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/contact-us',
        destination: '/contact-us-i',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about-vienna-day-trip',
        permanent: true,
      },
      {
        source: '/hallstatt-day-trip',
        destination: '/hallstatt-day-trip-from-vienna',
        permanent: true,
      },
      {
        source: '/cancellation-policy',
        destination: '/cancellation-refund-policy',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
