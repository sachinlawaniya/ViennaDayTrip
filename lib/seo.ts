import { Metadata } from 'next';
import { COMPANY_INFO } from './content';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://viennadaytrip.com';

export function constructMetadata({
  title,
  description,
  image = '/images/destinations/Hallstatt-Day-Trip-From-Vienna.jpeg',
  canonicalUrl,
  noIndex = false,
}: {
  title: string;
  description: string;
  image?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${COMPANY_INFO.name}`;
  const resolvedUrl = canonicalUrl ? `${BASE_URL}${canonicalUrl}` : BASE_URL;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: resolvedUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: resolvedUrl,
      siteName: COMPANY_INFO.name,
      images: [
        {
          url: image.startsWith('http') ? image : `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image.startsWith('http') ? image : `${BASE_URL}${image}`],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${BASE_URL}/#organization`,
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: BASE_URL,
    logo: `${BASE_URL}/images/branding/logo.png`,
    image: `${BASE_URL}/images/destinations/Salzburg-2.webp`,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    priceRange: '€€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: 'AT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '48.2082',
      longitude: '16.3738',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: COMPANY_INFO.googleRating.toString(),
      reviewCount: COMPANY_INFO.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      COMPANY_INFO.social.facebook,
      COMPANY_INFO.social.instagram,
      COMPANY_INFO.social.tiktok,
    ],
  };
}

export function generateFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
