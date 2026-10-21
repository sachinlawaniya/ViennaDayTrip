'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle, Clock } from 'lucide-react';
import { COMPANY_INFO, DAY_TRIP_ROUTES_LIST } from '@/lib/content';

export default function ContactUsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Vienna Airport Transfer');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    setIsSent(true);
  };

  const whatsappInquiry = `https://wa.me/436642035445?text=${encodeURIComponent(
    `Hello Vienna Day Trip,\nMy name is ${name || 'Traveler'}.\nI would like to inquire about: ${service}.\nMessage: ${message}`
  )}`;

  return (
    <div className="pt-24 bg-luxury-black text-gray-200 min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-black to-luxury-dark text-center border-b border-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            24/7 Concierge & Reservations
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wide">
            Contact Us & Get a Quote
          </h1>
          <p className="text-gray-300 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Have a question or looking for a customized travel itinerary? Contact our central dispatch team anytime.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details Card */}
          <div className="space-y-6">
            <div className="bg-luxury-dark border border-gold/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                  Direct Contact
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-1">
                  Vienna Day Trip Office
                </h3>
              </div>

              <div className="space-y-4 text-xs text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Headquarters:</strong>
                    <span>{COMPANY_INFO.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Phone / Hotline:</strong>
                    <a href={COMPANY_INFO.phoneHref} className="text-gold hover:underline">
                      {COMPANY_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Email Reservations:</strong>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-gold hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Operating Hours:</strong>
                    <span>24 Hours / 7 Days a Week</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href={COMPANY_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs py-3 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with Dispatch on WhatsApp</span>
                </a>

                <a
                  href={COMPANY_INFO.phoneHref}
                  className="w-full inline-flex items-center justify-center gap-2 border border-gold/40 hover:bg-gold/10 text-gold text-xs font-semibold py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +43 664 2035445</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-luxury-dark border border-gold/30 rounded-2xl p-6 sm:p-10 shadow-2xl">
              {isSent ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Thank you, {name}. Our customer support team has received your inquiry and will contact you back via email or WhatsApp within 15 minutes.
                  </p>
                  <div className="pt-4 flex justify-center gap-4">
                    <a
                      href={whatsappInquiry}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-6 py-2.5 rounded-lg"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Also Open in WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSent(false)}
                      className="text-xs text-gray-400 hover:text-white underline"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      Send an Inquiry or Quote Request
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Fill out the form below and we will get back to you with personalized options and rates.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-300">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-300">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +43 664 1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-300">Interested Service / Tour</label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                      >
                        <option value="Vienna Airport Transfer">Vienna Airport Transfer (VIE)</option>
                        <option value="Hourly Chauffeur Service">Hourly Chauffeur Service</option>
                        <option value="Vienna Sightseeing Tour">Vienna Sightseeing Tour</option>
                        {DAY_TRIP_ROUTES_LIST.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                        <option value="Secure Transportation">Secure Transportation</option>
                        <option value="B2B Corporate Partnership">B2B Corporate Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-300">Your Message / Travel Details *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please let us know your planned dates, number of passengers, luggage, or any special requests..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400">
                      We respond within 15 minutes during operating hours.
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-luxury-black font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-lg shadow transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
