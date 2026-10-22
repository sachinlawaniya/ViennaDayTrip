'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Clock, ChevronDown, Menu, X, ArrowRight, Star } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '@/lib/content';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Bar - Cinematic Dark Glass with Gold Accents */}
      <div 
        className={`bg-black/50 backdrop-blur-md text-gray-200 border-b border-white/10 text-xs py-2 px-4 transition-all duration-300 ${
          isScrolled ? 'hidden md:block' : 'block'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <a 
              href={COMPANY_INFO.phoneHref} 
              className="flex items-center gap-1.5 hover:text-gold transition-colors font-medium tracking-wide text-gray-100"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span className="font-semibold">{COMPANY_INFO.phoneFormatted}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden sm:flex items-center gap-1.5 hover:text-gold transition-colors text-gray-300"
            >
              <Mail className="w-3.5 h-3.5 text-gold" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-gold" />
              <span>24/7 Private Chauffeur &amp; Transfers</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-medium">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white font-bold text-xs">5.0</span>
              <span className="text-gray-300 text-[11px]">on Google</span>
            </div>
            <a
              href={COMPANY_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-0.5 rounded text-[11px] font-semibold transition-colors flex items-center gap-1 shadow-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Sleek Dark Glass Overlay */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-md shadow-2xl py-3 border-b border-white/10' 
            : 'bg-black/30 backdrop-blur-sm py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full border border-gold/60 overflow-hidden bg-black flex items-center justify-center p-1 shadow-sm group-hover:border-gold transition-colors">
              <Image
                src="/images/branding/cropped-logo-BmhMpHJz.png"
                alt="Vienna Day Trip Logo"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-widest text-white group-hover:text-gold transition-colors">
                VIENNA DAY TRIP
              </span>
              <span className="text-[10px] tracking-widest text-gold uppercase font-medium -mt-1">
                Luxury Chauffeur &amp; Tours
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              if (link.submenu) {
                return (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 text-sm font-medium tracking-wide py-2 transition-colors ${
                        isActive ? 'text-gold font-bold border-b-2 border-gold' : 'text-gray-100 hover:text-gold'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-gold" />
                    </Link>

                    {/* Submenu Dropdown */}
                    <div 
                      className={`absolute top-full left-0 w-72 bg-[#1c1613]/98 backdrop-blur-md border border-[#3d3128] rounded-xl shadow-2xl py-2 transition-all duration-200 transform ${
                        servicesDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="px-4 py-2 border-b border-white/10 text-[11px] uppercase tracking-wider text-gold font-bold bg-black/40">
                        Chauffeur Services &amp; Day Trips
                      </div>
                      <div className="max-h-[70vh] overflow-y-auto py-1">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`block px-4 py-2 text-xs transition-colors hover:bg-white/10 hover:text-gold ${
                              pathname === sub.href ? 'text-gold font-bold bg-white/5' : 'text-gray-200'
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    isActive ? 'text-gold font-bold border-b-2 border-gold' : 'text-gray-100 hover:text-gold'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/#booking-section"
              className="hidden sm:inline-flex items-center gap-2 bg-[#c8a96b] hover:bg-[#bfa37c] text-[#1a1612] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <span>Book Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden text-white hover:text-gold p-2 rounded-lg border border-white/20 focus:outline-none bg-black/40"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Slide-out */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#1a1512]/98 border-b border-white/10 shadow-2xl max-h-[85vh] overflow-y-auto px-5 py-6 text-white">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="border-b border-white/10 pb-2">
                {link.submenu ? (
                  <div>
                    <div className="text-sm font-bold text-gold tracking-wide py-1 flex items-center justify-between">
                      <span>{link.name}</span>
                    </div>
                    <div className="pl-3 mt-1 flex flex-col gap-2 border-l-2 border-gold/40">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={`text-xs py-1 transition-colors ${
                            pathname === sub.href ? 'text-gold font-bold' : 'text-gray-300 hover:text-gold'
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block text-sm font-medium py-1 transition-colors ${
                      pathname === link.href ? 'text-gold font-bold' : 'text-gray-200 hover:text-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/#booking-section"
                className="w-full text-center bg-[#c8a96b] hover:bg-[#bfa37c] text-[#1a1612] font-bold text-xs uppercase tracking-wider py-3 rounded-full shadow-md"
              >
                Book Now / Get a Quote
              </Link>
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center justify-center gap-2 text-white border border-white/20 py-2.5 rounded-full text-xs font-semibold hover:border-gold"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call {COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
