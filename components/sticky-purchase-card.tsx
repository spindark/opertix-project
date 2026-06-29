'use client';

import { MessageCircle, Phone, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface PurchaseCardProps {
  listing: {
    price: string;
    originalPrice: string;
    availability: string;
    seller: {
      name: string;
      responseTime: string;
    };
  };
  mobile?: boolean;
}

export default function StickyPurchaseCard({ listing, mobile = false }: PurchaseCardProps) {
  const [isComparing, setIsComparing] = useState(false);

  const discount = 17; // Calculated from prices

  return (
    <div
      className={`${
        mobile
          ? 'flex flex-col gap-3'
          : 'sticky top-24 rounded-3xl border border-gray-200/50 bg-white shadow-elevation-4 p-6 space-y-5'
      }`}
    >
      {/* Price Section */}
      {!mobile && (
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold gradient-text">{listing.price}</span>
            <span className="text-lg text-gray-500 line-through">{listing.originalPrice}</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-100/60 border border-rose-200/50 rounded-full">
            <span className="text-xs font-bold text-rose-700">Hemat {discount}%</span>
          </div>
        </div>
      )}

      {/* Mobile Price Section */}
      {mobile && (
        <div className="flex items-end justify-between">
          <div>
            <div className="text-2xl font-bold gradient-text">{listing.price}</div>
            <div className="text-sm text-gray-500 line-through">{listing.originalPrice}</div>
          </div>
          <span className="text-xs font-bold text-rose-700 bg-rose-100/60 px-2 py-1 rounded-full">
            Hemat {discount}%
          </span>
        </div>
      )}

      {/* Availability Badge */}
      <div className="flex items-center gap-2 px-4 py-3 bg-emerald-50/60 border border-emerald-200/50 rounded-2xl">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-sm font-semibold text-emerald-700">{listing.availability}</span>
      </div>

      {/* Trust Indicators - Desktop only */}
      {!mobile && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Penjual Terverifikasi</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
            <Shield className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>Transfer Aman & Terenkripsi</span>
          </div>
        </div>
      )}

      {/* CTA Buttons */}
      <div className="space-y-3">
        {/* WhatsApp Button */}
        <button className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 group shadow-elevation-3">
          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Chat via WhatsApp
          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
        </button>

        {/* Phone Button */}
        <button className="w-full py-3.5 px-4 rounded-2xl bg-white border-2 border-blue-600 text-blue-600 font-semibold transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 group">
          <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Hubungi Penjual
        </button>
      </div>

      {/* Seller Info - Desktop only */}
      {!mobile && (
        <div className="pt-4 border-t border-gray-100/50">
          <div className="p-3 rounded-xl bg-gray-50/60">
            <div className="text-xs text-gray-600 font-medium mb-1">Penjual</div>
            <div className="font-semibold text-gray-900 mb-1">{listing.seller.name}</div>
            <div className="text-xs text-gray-600">
              Response time: <span className="font-semibold text-gray-700">{listing.seller.responseTime}</span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Notice */}
      <div className="text-xs text-gray-500 text-center pt-2 border-t border-gray-100/50">
        Dengan membeli, Anda setuju dengan syarat & ketentuan kami
      </div>
    </div>
  );
}
