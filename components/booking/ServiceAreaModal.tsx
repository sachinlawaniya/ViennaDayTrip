'use client';

import React from 'react';
import { AlertTriangle, X, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/content';

interface ServiceAreaModalProps {
  isOpen: boolean;
  onClose: () => void;
  locationEntered?: string;
}

export default function ServiceAreaModal({ isOpen, onClose, locationEntered }: ServiceAreaModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-luxury-black border border-gold/40 rounded-xl max-w-md w-full p-6 text-center shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-4 text-amber-400">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <h3 className="font-serif text-lg font-bold text-white mb-2">
          Service Area Notice
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {locationEntered ? (
            <span>
              We noticed you entered <strong className="text-gold">{locationEntered}</strong>. Standard online booking is configured for pickups and drop-offs in the Vienna metropolitan area, Lower Austria, and major regional day trip corridors.
            </span>
          ) : (
            <span>
              Standard online instant pricing is optimized for Vienna and surrounding regions.
            </span>
          )}
        </p>

        <p className="text-xs text-gray-400 mb-6">
          For custom long-distance routes across Austria, Germany, or Central Europe, our dispatchers provide tailor-made fixed quotes within 15 minutes!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={COMPANY_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={COMPANY_INFO.phoneHref}
            className="inline-flex items-center justify-center gap-2 border border-gold/40 hover:bg-gold/10 text-gold text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call +43 664 2035445</span>
          </a>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10">
          <button
            onClick={onClose}
            className="text-xs text-gray-400 hover:text-white underline"
          >
            Continue with request anyway
          </button>
        </div>
      </div>
    </div>
  );
}
