import React from 'react';
import { Compass, Clock, Car, UserCheck } from 'lucide-react';

const CORE_PILLARS = [
  {
    icon: Car,
    title: "Luxury Mercedes Fleet",
    description: "Immaculate Mercedes-Benz E-Class, S-Class, V-Class, and VIP Sprinters with leather seating, climate control, and Wi-Fi."
  },
  {
    icon: Compass,
    title: "Vienna & Alpine Expertise",
    description: "English-speaking licensed chauffeurs with deep local knowledge of scenic mountain routes, wine regions, and historic landmarks."
  },
  {
    icon: UserCheck,
    title: "Discreet VIP Service",
    description: "Complete privacy and professional discretion guaranteed for corporate executives, celebrities, dignitaries, and families."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock airport transfers, early morning departures, late night returns, and live dispatch assistance."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-[#faf9f6] border-t border-gray-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
            The Vienna Day Trip Difference
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gray-900 tracking-wide">
            Premium Chauffeur Experience Across Europe
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            From seamless airport pickups to unforgettable cross-border day tours, we deliver unmatched punctuality, comfort, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200/90 hover:border-gold-400 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl hover:shadow-gold/10 group"
              >
                <div className="w-13 h-13 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700 mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 group-hover:text-gold-700 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
