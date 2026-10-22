import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Calendar, Tag, ChevronLeft, ArrowRight, Share2, MessageSquare } from 'lucide-react';
import blogsData from '@/lib/blogs-data.json';
import { constructMetadata } from '@/lib/seo';
import CTASection from '@/components/sections/CTASection';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogsData.slice(0, 50).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: 'Article Not Found | Vienna Day Trip',
    };
  }

  return constructMetadata({
    title: `${post.title} | Travel Guide`,
    description: post.excerpt,
    image: post.featuredImage || '/images/destinations/hallstatt-day-trip-2.webp',
    canonicalUrl: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogsData
    .filter((p) => p.id !== post.id && p.categories.some((c) => post.categories.includes(c)))
    .slice(0, 3);

  return (
    <div className="pt-24 bg-luxury-black text-gray-200 min-h-screen">
      {/* Article Hero */}
      <article className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* Title & Metadata */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {post.categories.map((c) => (
              <span
                key={c}
                className="text-[10px] uppercase tracking-wider font-semibold bg-gold/15 text-gold border border-gold/30 px-3 py-1 rounded-full"
              >
                {c}
              </span>
            ))}
            <span className="text-xs text-gray-400 flex items-center gap-1 ml-2">
              <Calendar className="w-3.5 h-3.5 text-gold" />
              <span>{post.date}</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wide leading-tight">
            {post.title}
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic border-l-2 border-gold pl-4 py-1">
            {post.excerpt}
          </p>
        </div>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative w-full h-72 sm:h-[450px] rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* HTML Article Content */}
        <div 
          className="prose prose-invert prose-gold max-w-none text-gray-300 text-sm sm:text-base leading-relaxed space-y-4 pt-6 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:mb-1 [&_strong]:text-white [&_a]:text-gold [&_a]:underline hover:[&_a]:text-gold-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Bottom Actions */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Share this guide:</span>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`Check out this travel guide: https://viennadaytrip.com/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600/80 hover:bg-emerald-500 text-white text-xs px-3 py-1.5 rounded flex items-center gap-1 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Share via WhatsApp</span>
            </a>
          </div>

          <Link
            href="/#booking-section"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-400 text-luxury-dark text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg shadow"
          >
            <span>Book a Chauffeur for this Route</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-black/60 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                Keep Reading
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Related Travel Guides
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-luxury-dark border border-white/10 rounded-xl p-5 space-y-3 hover:border-gold/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] text-gold uppercase font-semibold">
                      {rel.categories[0]}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-white line-clamp-2">
                      <Link href={`/blog/${rel.slug}`} className="hover:text-gold transition-colors">
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-gray-400 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="text-xs text-gold font-medium hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  );
}
