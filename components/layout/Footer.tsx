'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck, Clock, Star, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, FOOTER_LINKS } from '@/lib/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#FAF6F0] text-gray-800 border-t border-[#e2d5c3]">
      {/* 1. TOP HIGHLIGHTS BAR - Warm Sand #F5EDE0 */}
      <div className="bg-[#F5EDE0] py-8 border-b border-[#e2d5c3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            {/* Address */}
            <div className="flex items-center justify-center md:justify-start gap-4 p-3 bg-white/60 rounded-xl border border-[#e2d5c3]/60 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#c9b18c]/20 text-[#8e723e] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#8e723e]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 block">
                  Office Address
                </span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-gray-900 hover:text-gold-800 transition-colors"
                >
                  {COMPANY_INFO.address.full}
                </a>
              </div>
            </div>

            {/* Phones */}
            <div className="flex items-center justify-center md:justify-start gap-4 p-3 bg-white/60 rounded-xl border border-[#e2d5c3]/60 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#c9b18c]/20 text-[#8e723e] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#8e723e]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 block">
                  24/7 Phone &amp; WhatsApp
                </span>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="text-xs sm:text-sm font-semibold text-gray-900 hover:text-gold-800 transition-colors"
                >
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center md:justify-start gap-4 p-3 bg-white/60 rounded-xl border border-[#e2d5c3]/60 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#c9b18c]/20 text-[#8e723e] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#8e723e]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 block">
                  Email Inquiries
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-xs sm:text-sm font-semibold text-gray-900 hover:text-gold-800 transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT - Warm Soft Cream */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: About Vienna Day Trip */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full border border-gold-400 overflow-hidden bg-black flex items-center justify-center p-1 shadow-sm">
                <Image
                  src="/images/branding/cropped-logo-BmhMpHJz.png"
                  alt="Vienna Day Trip Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-lg font-bold tracking-widest text-gray-900">
                VIENNA DAY TRIP
              </span>
            </Link>

            <p className="text-gray-600 text-xs leading-relaxed">
              At Vienna Day Trip, we provide premium private chauffeur services based in Vienna. Working with embassies, top hotels, corporate clients and international travelers, we are known for punctuality, discretion and first-class Mercedes-Benz vehicles.
            </p>

            <div className="pt-2">
              <span className="text-[11px] text-gray-500 block uppercase tracking-wider font-semibold">
                Official WKO Member
              </span>
              <p className="text-xs text-gray-700 font-medium">
                Austrian Economic Chamber Registered Chauffeur Service
              </p>
            </div>
          </div>

          {/* Column 2: Chauffeur Services */}
          <div>
            <h4 className="font-serif text-xs font-bold tracking-widest text-gray-900 uppercase mb-4 border-b border-[#e2d5c3] pb-2">
              Chauffeur Services
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_LINKS.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-gold-800 transition-colors block py-0.5">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Day Trips */}
          <div>
            <h4 className="font-serif text-xs font-bold tracking-widest text-gray-900 uppercase mb-4 border-b border-[#e2d5c3] pb-2">
              Day Trips from Vienna
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_LINKS.destinations.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-gold-800 transition-colors block py-0.5">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links & Legal */}
          <div>
            <h4 className="font-serif text-xs font-bold tracking-widest text-gray-900 uppercase mb-4 border-b border-[#e2d5c3] pb-2">
              Quick Links &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_LINKS.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-gold-800 transition-colors block py-0.5">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/our-fleet" className="text-gray-600 hover:text-gold-800 transition-colors block py-0.5">
                  Our Luxury Fleet
                </Link>
              </li>
              <li>
                <Link href="/tour-pricing" className="text-gray-600 hover:text-gold-800 transition-colors block py-0.5">
                  Fixed Pricing Guide
                </Link>
              </li>
              <li>
                <Link href="/b2b-solutions" className="text-gray-600 hover:text-gold-800 transition-colors block py-0.5">
                  B2B &amp; Travel Agents
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gold-800 transition-colors block py-0.5">
                  Austria Travel Blog
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 3. BOTTOM COPYRIGHT BAR - Dark Bronze */}
      <div className="bg-[#1c1613] text-gray-400 py-5 text-xs border-t border-[#30221d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Vienna Day Trip. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cancellation-refund-policy" className="hover:text-gold-400 transition-colors">
              Cancellation Policy
            </Link>
            <Link href="/imprint" className="hover:text-gold-400 transition-colors">
              Imprint
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold-500 hover:text-black flex items-center justify-center transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
