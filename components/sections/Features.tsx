import React from 'react';
import { Shield, Clock, Compass, Award, Car, UserCheck } from 'lucide-react';
import { TRUST_FEATURES } from '@/lib/content';

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
    <section className="py-20 bg-luxury-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            The Vienna Day Trip Difference
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-wide">
            Premium Chauffeur Experience Across Europe
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            From seamless airport pickups to unforgettable cross-border day tours, we deliver unmatched punctuality, comfort, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-gold/20 hover:border-gold/60 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/5 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
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
