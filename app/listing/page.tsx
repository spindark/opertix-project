'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Share2, MessageCircle, Phone, MapPin, Calendar, Clock, CheckCircle2, Shield, TrendingUp, Users, Award, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import ImageGallery from '@/components/image-gallery';
import StickyPurchaseCard from '@/components/sticky-purchase-card';
import SellerProfile from '@/components/seller-profile';

export default function ListingDetail() {
  const [isSaved, setIsSaved] = useState(false);

  // Sample listing data
  const listing = {
    id: 1,
    title: 'Coldplay Music of The Spheres Jakarta - CAT 1',
    category: 'Concert',
    price: 'Rp 2.500.000',
    originalPrice: 'Rp 3.000.000',
    rating: 4.9,
    reviews: 248,
    saved: 456,
    views: 1200,
    location: 'Jakarta Convention Center (JCC), Jakarta',
    eventDate: '15 November 2024',
    eventTime: '19:00 - 23:30',
    availability: '2 Tiket Tersedia',
    images: [
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1763074/pexels-photo-1763074.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1763073/pexels-photo-1763073.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    seller: {
      name: 'Ticket Master Indonesia',
      rating: 4.9,
      reviews: 1250,
      responseTime: '<1 jam',
      verified: true,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      followers: 5200,
      joinDate: 'Maret 2022',
    },
    description: 'Tiket konser Coldplay "Music of The Spheres" di Jakarta Convention Center kategori 1. Posisi premium dengan view terbaik ke panggung. Tiket original dari operator resmi.',
    transferMethod: 'E-Ticket (Instant)',
    refundPolicy: 'Non-refundable - Pastikan data event sesuai sebelum membeli',
    highlights: [
      'Tiket dari operator resmi',
      'Kategori 1 - View terbaik',
      'E-transfer instant',
      'Penjual terverifikasi sejak 2022',
    ],
  };

  const seller = listing.seller;

  return (
    <>
      <main className="min-h-screen bg-white pt-20 pb-32">
        <div className="container-padded">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8 flex-wrap">
            <Link href="/" className="hover:text-violet-600 transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/#listings" className="hover:text-violet-600 transition-colors">
              Listings
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Concert</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <ImageGallery images={listing.images} title={listing.title} />

              {/* Basic Info */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-100 text-violet-700 rounded-full text-xs font-bold">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-700" />
                        {listing.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {listing.availability}
                      </span>
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mt-4 mb-3">
                      {listing.title}
                    </h1>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-lg font-bold text-gray-900">{listing.rating}</span>
                      <span className="text-gray-600">({listing.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => setIsSaved(!isSaved)}
                      className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isSaved
                          ? 'bg-rose-100 border-rose-300 text-rose-600'
                          : 'bg-gray-100 border-gray-300 text-gray-600 hover:border-rose-300 hover:bg-rose-50'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                    </button>
                    <button className="w-11 h-11 rounded-full bg-gray-100 border border-gray-300 text-gray-600 hover:border-blue-300 hover:bg-blue-50 flex items-center justify-center transition-all duration-300">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: Calendar, label: 'Tanggal Event', value: listing.eventDate },
                  { icon: Clock, label: 'Waktu', value: listing.eventTime },
                  { icon: MapPin, label: 'Lokasi', value: listing.location },
                  { icon: TrendingUp, label: 'Dilihat', value: `${listing.views} kali` },
                  { icon: Heart, label: 'Disimpan', value: `${listing.saved} kali` },
                  { icon: Users, label: 'Transfer', value: listing.transferMethod },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-200/50 hover:border-gray-300 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        <div className="min-w-0">
                          <div className="text-xs text-gray-600 font-medium mb-0.5">{item.label}</div>
                          <div className="text-sm font-semibold text-gray-900 line-clamp-2">{item.value}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Deskripsi</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{listing.description}</p>
                <div className="space-y-2">
                  {listing.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seller Profile */}
              <SellerProfile seller={seller} />

              {/* Important Information */}
              <div className="space-y-4 p-6 bg-blue-50/60 border border-blue-200/50 rounded-3xl">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Informasi Penting</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Verifikasi data event sebelum membeli (nama, tanggal, lokasi, kategori tempat duduk)</li>
                      <li>• Pastikan e-ticket/voucher dapat diakses segera setelah pembayaran</li>
                      <li>• Hubungi penjual jika ada permasalahan</li>
                      <li>• Kebijakan refund: Non-refundable - tidak ada pengembalian dana</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Related Listings */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Listing Serupa</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <Link
                      key={i}
                      href="#"
                      className="group rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-square hover:shadow-elevation-4 transition-shadow"
                    >
                      <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:text-gray-600 transition-colors">
                        + Listing
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sticky Purchase Card */}
            <div className="hidden lg:block">
              <StickyPurchaseCard listing={listing} />
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Purchase Card - Fixed Bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-elevation-5 z-40 p-4">
        <StickyPurchaseCard listing={listing} mobile />
      </div>
    </>
  );
}
