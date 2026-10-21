import React from 'react';
import Image from 'next/image';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { COMPANY_INFO, REVIEWS } from '@/lib/content';

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-luxury-dark border-t border-gold/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Client Testimonials
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-wide">
            Trusted by International Travelers
          </h2>
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-white text-base">5.0 / 5.0</span>
            <span className="text-gray-400 text-xs">based on verified Google reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-luxury-black border border-gold/25 rounded-2xl p-6 shadow-xl relative flex flex-col justify-between hover:border-gold/60 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-500">{review.date}</span>
                </div>

                <p className="text-gray-300 text-xs leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">
                    {review.author}
                  </h4>
                  <span className="text-[10px] text-gold flex items-center gap-1 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    <span>Verified Traveler Review</span>
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  Google
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
