import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 bg-luxury-black text-gray-200 min-h-screen flex items-center justify-center text-center">
      <div className="max-w-md mx-auto px-4 space-y-6">
        <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-widest text-gold font-semibold">
          404 - Page Not Found
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
          Journey Destination Not Found
        </h1>

        <p className="text-sm text-gray-400">
          The page or route you are looking for has been relocated or is no longer available.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-400 text-luxury-dark font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/our-services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-gold text-white text-xs font-semibold px-6 py-3 rounded-lg"
          >
            <span>View All Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
