import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { COMPANY_INFO } from '@/lib/content';
import { generateOrganizationJsonLd } from '@/lib/seo';
import { MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`,
  description: `${COMPANY_INFO.subtagline}. Premium Mercedes-Benz fleet, professional licensed chauffeurs, airport meet & greet, and day trips to Hallstatt, Wachau, Salzburg, Budapest, Prague, and Bratislava.`,
  metadataBase: new URL('https://viennadaytrip.com'),
  icons: {
    icon: '/images/branding/cropped-logo-BmhMpHJz.png',
    apple: '/images/branding/cropped-logo-BmhMpHJz.png',
  },
  openGraph: {
    title: `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`,
    description: COMPANY_INFO.subtagline,
    url: 'https://viennadaytrip.com',
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: 'https://viennadaytrip.com/images/destinations/hallstatt-day-trip-2.webp',
        width: 1200,
        height: 630,
        alt: 'Vienna Day Trip Private Chauffeur',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generateOrganizationJsonLd();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-gray-900 min-h-screen flex flex-col antialiased selection:bg-gold-200 selection:text-gold-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* Floating Quick Action Buttons */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
          <a
            href={COMPANY_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-13 h-13 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-emerald-400/40 group shadow-emerald-900/20"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <MessageSquare className="w-6 h-6" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold pl-0 group-hover:pl-2">
              WhatsApp
            </span>
          </a>
        </div>
      </body>
    </html>
  );
}
