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
      {/* Top Bar - Clean Luxury Ivory/Pearl */}
      <div className={`bg-[#faf9f6] text-gray-700 border-b border-gray-200/70 text-xs py-2 px-4 transition-all duration-300 ${isScrolled ? 'hidden md:block' : 'block'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <a 
              href={COMPANY_INFO.phoneHref} 
              className="flex items-center gap-1.5 hover:text-gold-700 transition-colors font-medium tracking-wide text-gray-800"
            >
              <Phone className="w-3.5 h-3.5 text-gold-600" />
              <span className="font-semibold">{COMPANY_INFO.phoneFormatted}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden sm:flex items-center gap-1.5 hover:text-gold-700 transition-colors text-gray-600"
            >
              <Mail className="w-3.5 h-3.5 text-gold-600" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-gray-500">
              <Clock className="w-3.5 h-3.5 text-gold-600" />
              <span>24/7 Private Chauffeur & Transfers</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-medium">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-gray-900 font-bold text-xs">5.0</span>
              <span className="text-gray-500 text-[11px]">on Google</span>
            </div>
            <a
              href={COMPANY_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-0.5 rounded text-[11px] font-semibold transition-colors flex items-center gap-1 shadow-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Crisp White Glass */}
      <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-200' : 'bg-white/90 backdrop-blur-sm py-4 border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full border border-gold/50 overflow-hidden bg-black flex items-center justify-center p-1 shadow-sm group-hover:border-gold transition-colors">
              <Image
                src="/images/branding/cropped-logo-BmhMpHJz-270x270.png"
                alt="Vienna Day Trip Logo"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-widest text-gray-900 group-hover:text-gold-700 transition-colors">
                VIENNA DAY TRIP
              </span>
              <span className="text-[10px] tracking-widest text-gold-700 uppercase font-medium -mt-1">
                Luxury Chauffeur & Tours
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
                        isActive ? 'text-gold-700 font-bold border-b-2 border-gold-600' : 'text-gray-700 hover:text-gold-700'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-gold-600" />
                    </Link>

                    {/* Submenu Dropdown */}
                    <div 
                      className={`absolute top-full left-0 w-72 bg-white/98 backdrop-blur-md border border-gray-200 rounded-xl shadow-2xl py-2 transition-all duration-200 transform ${
                        servicesDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="px-4 py-2 border-b border-gray-100 text-[11px] uppercase tracking-wider text-gold-800 font-bold bg-[#faf9f6]">
                        Chauffeur Services & Day Trips
                      </div>
                      <div className="max-h-[70vh] overflow-y-auto py-1">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`block px-4 py-2 text-xs transition-colors hover:bg-gold-50 hover:text-gold-800 ${
                              pathname === sub.href ? 'text-gold-800 font-bold bg-gold-50/80' : 'text-gray-700'
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
                    isActive ? 'text-gold-700 font-bold border-b-2 border-gold-600' : 'text-gray-700 hover:text-gold-700'
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
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-600 hover:to-gold-500 text-luxury-dark font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-md hover:shadow-gold/30 transition-all transform hover:-translate-y-0.5 border border-gold-400/40"
            >
              <span>Book Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden text-gray-800 hover:text-gold-700 p-2 rounded-lg border border-gray-200 focus:outline-none bg-gray-50"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Slide-out */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 border-b border-gray-200 shadow-2xl max-h-[85vh] overflow-y-auto px-5 py-6">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="border-b border-gray-100 pb-2">
                {link.submenu ? (
                  <div>
                    <div className="text-sm font-bold text-gold-800 tracking-wide py-1 flex items-center justify-between">
                      <span>{link.name}</span>
                    </div>
                    <div className="pl-3 mt-1 flex flex-col gap-2 border-l-2 border-gold/30">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={`text-xs py-1 transition-colors ${
                            pathname === sub.href ? 'text-gold-800 font-bold' : 'text-gray-600 hover:text-gold-700'
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
                      pathname === link.href ? 'text-gold-800 font-bold' : 'text-gray-800 hover:text-gold-700'
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
                className="w-full text-center bg-gold hover:bg-gold-500 text-luxury-dark font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-md"
              >
                Book Now / Get a Quote
              </Link>
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center justify-center gap-2 text-gray-800 border border-gray-300 py-2.5 rounded-lg text-xs font-semibold hover:border-gold"
              >
                <Phone className="w-4 h-4 text-gold-600" />
                <span>Call {COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
