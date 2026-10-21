import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck, Clock, Award, Star } from 'lucide-react';
import { COMPANY_INFO, FOOTER_LINKS } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-luxury-black text-gray-300 border-t border-gold/30 pt-16 pb-8 relative overflow-hidden">
      {/* Background Subtle Luxury Watermark */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none">
        <span className="font-serif text-[180px] font-bold text-gold">VIENNA</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full border border-gold/40 overflow-hidden bg-black flex items-center justify-center p-1">
                <Image
                  src="/images/branding/cropped-logo-BmhMpHJz-270x270.png"
                  alt="Vienna Day Trip Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-xl font-bold tracking-widest text-white">
                VIENNA DAY TRIP
              </span>
            </Link>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Vienna’s premier licensed private chauffeur and day-trip company. Experience bespoke transfers, hourly executive hire, and luxury day tours across Austria and Central Europe.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-gold/30 rounded-lg p-3">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="font-bold text-white ml-1 text-xs">5.0 / 5.0</span>
                </div>
                <span className="text-[11px] text-gray-400 mt-0.5">Verified Google Reviews</span>
              </div>
            </div>

            <div className="space-y-2 text-xs pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={COMPANY_INFO.phoneHref} className="hover:text-gold transition-colors font-medium">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gold transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Chauffeur Services */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-gold uppercase mb-4">
              Chauffeur Services
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_LINKS.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-gold transition-colors block py-0.5">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Day Trips from Vienna */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-gold uppercase mb-4">
              Day Trips
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_LINKS.destinations.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-gold transition-colors block py-0.5">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Trust & Legal */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-gold uppercase mb-4">
              Information & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_LINKS.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-gold transition-colors block py-0.5">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/b2b-solutions" className="text-gray-400 hover:text-gold transition-colors block py-0.5">
                  B2B & Travel Agents
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-gold transition-colors block py-0.5">
                  Travel Blog & Guides
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/5 space-y-2 text-[11px] text-gray-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>Licensed Austrian Chauffeurs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold" />
                <span>24/7 Operations & Dispatch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Vienna Day Trip. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cancellation-refund-policy" className="hover:text-gold transition-colors">
              Cancellation Policy
            </Link>
            <Link href="/imprint" className="hover:text-gold transition-colors">
              Imprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
