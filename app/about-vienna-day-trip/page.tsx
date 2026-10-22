import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Award, HeartHandshake, Compass } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export const metadata = constructMetadata({
  title: 'About Us | Vienna’s Trusted Chauffeur & Day Trip Company',
  description: 'Learn about Vienna Day Trip: our heritage, licensed Austrian chauffeurs, luxury Mercedes fleet, and passion for creating bespoke European travel memories.',
  canonicalUrl: '/about-vienna-day-trip',
});

const VALUES = [
  {
    icon: Award,
    title: "Uncompromising Punctuality",
    description: "Time is luxury. Our chauffeurs arrive 15 minutes before your pickup, tracking traffic and flights in real-time."
  },
  {
    icon: ShieldCheck,
    title: "Licensed Austrian Chauffeurs",
    description: "Every driver holds an official Austrian passenger transport license, background clearance, and extensive training."
  },
  {
    icon: HeartHandshake,
    title: "Personalized Hospitality",
    description: "We don't operate rigid tours. We listen to your interests, recommend authentic restaurants, and adjust the day to you."
  },
  {
    icon: Compass,
    title: "Deep Regional Knowledge",
    description: "From alpine shortcuts to picturesque Danube vineyard vistas, travel with local insiders who love Austria."
  }
];

export default function AboutPage() {
  return (
    <div className="pt-24 bg-[#faf9f6] text-gray-800">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/destinations/IMG_6709.webp"
            alt="About Vienna Day Trip"
            fill
            priority
            className="object-cover object-center filter brightness-90 contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-[#faf9f6]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
            Our Heritage & Commitment
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-wide">
            About Vienna Day Trip
          </h1>
          <p className="text-gray-700 text-sm sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Vienna's premier private chauffeur and bespoke day trip company, trusted by international travelers and corporate clients worldwide.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
              Our Story
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gray-900 tracking-wide">
              Crafting Unforgettable Journeys Across Central Europe
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Vienna Day Trip was founded with a singular mission: to provide discerning travelers with an elevated, private, and effortless alternative to crowded tour buses and rigid train schedules.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Based in the imperial heart of Vienna, we specialize in high-end airport transfers, executive hourly chauffeur services, and private day tours to Europe's most enchanting destinations—from the alpine wonderland of Hallstatt and Sound of Music sights in Salzburg, to the Wachau wine region and the historical capitals of Budapest, Prague, and Bratislava.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Our fleet exclusively consists of pristine Mercedes-Benz vehicles, driven by knowledgeable, English-speaking chauffeurs dedicated to your comfort, privacy, and safety.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold text-gold-700">5.0 ★</span>
                <span className="text-xs text-gray-500 font-medium">Google Customer Rating</span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold text-gray-900">100%</span>
                <span className="text-xs text-gray-500 font-medium">Private Tailored Tours</span>
              </div>
            </div>
          </div>

          <div className="relative h-96 sm:h-[450px] rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
            <Image
              src="/images/destinations/Salzburg-2.webp"
              alt="Vienna Day Trip Team Experience"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
              Our Philosophy
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#faf9f6] border border-gray-200/90 rounded-2xl p-6 space-y-4 hover:border-gold-400 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-gray-900">
                    {val.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </div>
  );
}
