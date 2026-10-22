import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { REVIEWS } from '@/lib/content';

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
            Client Testimonials
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gray-900 tracking-wide">
            Trusted by International Travelers
          </h2>
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-gray-900 text-base">5.0 / 5.0</span>
            <span className="text-gray-500 text-xs">based on verified Google reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-200/90 rounded-2xl p-7 shadow-md hover:shadow-xl hover:border-gold-400 transition-all duration-300 relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-500 font-medium">{review.date}</span>
                </div>

                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-gray-900">
                    {review.author}
                  </h4>
                  <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Verified Traveler Review</span>
                  </span>
                </div>

                <div className="text-[11px] font-bold text-gray-600 uppercase tracking-wider bg-[#faf9f6] px-2.5 py-1 rounded border border-gray-200">
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
