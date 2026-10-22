'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Tag, ArrowRight, Search, BookOpen } from 'lucide-react';
import blogsData from '@/lib/blogs-data.json';
import CTASection from '@/components/sections/CTASection';

const CATEGORIES = ['All', 'Chauffeur', 'Services', 'Our Blog', 'Car Rent', 'General'];
const POSTS_PER_PAGE = 12;

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return blogsData.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        post.categories.some((cat: string) => cat.toLowerCase().includes(selectedCategory.toLowerCase()));
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="pt-24 bg-luxury-black text-gray-200 min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-black to-luxury-dark text-center border-b border-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Travel Guides & Local Insights
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wide">
            Vienna Day Trip Blog
          </h1>
          <p className="text-gray-300 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Expert travel advice, day trip itineraries, airport transfer comparisons, and insider tips for Austria and Central Europe.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-black/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                  selectedCategory === cat
                    ? 'bg-gold text-luxury-dark font-bold border-gold shadow'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:border-gold/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search guides & articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-black/60 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs text-gray-400 mb-8">
          Showing <span className="text-white font-medium">{filteredPosts.length}</span> articles
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10 space-y-3">
            <BookOpen className="w-10 h-10 text-gold mx-auto opacity-60" />
            <h3 className="font-serif text-lg text-white">No articles found</h3>
            <p className="text-xs text-gray-400">Try adjusting your search query or selecting "All" categories.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-luxury-dark border border-white/10 hover:border-gold/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative w-full h-52 bg-black/60 overflow-hidden">
                    <Image
                      src={post.featuredImage || '/images/destinations/hallstatt-day-trip-2.webp'}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] text-gold font-semibold uppercase tracking-wider">
                      {post.categories[0] || 'Guide'}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] text-gray-400">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      <span>{post.date}</span>
                    </div>

                    <h2 className="font-serif text-lg font-bold text-white group-hover:text-gold transition-colors line-clamp-2 leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs text-gold font-semibold uppercase tracking-wider hover:text-white transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage((p) => Math.max(1, p - 1));
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className="px-3.5 py-1.5 rounded-lg border border-white/10 text-xs text-gray-300 disabled:opacity-30 hover:border-gold"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, idx) => {
              const pNum = idx + 1;
              if (
                pNum === 1 ||
                pNum === totalPages ||
                (pNum >= currentPage - 2 && pNum <= currentPage + 2)
              ) {
                return (
                  <button
                    key={pNum}
                    type="button"
                    onClick={() => {
                      setCurrentPage(pNum);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all ${
                      currentPage === pNum
                        ? 'bg-gold text-luxury-dark'
                        : 'bg-white/5 text-gray-300 border border-white/10 hover:border-gold'
                    }`}
                  >
                    {pNum}
                  </button>
                );
              }
              if (pNum === currentPage - 3 || pNum === currentPage + 3) {
                return <span key={pNum} className="text-gray-500 text-xs">...</span>;
              }
              return null;
            })}

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => {
                setCurrentPage((p) => Math.min(totalPages, p + 1));
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className="px-3.5 py-1.5 rounded-lg border border-white/10 text-xs text-gray-300 disabled:opacity-30 hover:border-gold"
            >
              Next
            </button>
          </div>
        )}
      </section>

      <CTASection />
    </div>
  );
}
