import Link from 'next/link';
import { ArrowRight, Flame, SparklesIcon } from 'lucide-react';
import ListingCard from './listing-card';

const listings = [
  {
    id: 1,
    category: 'Concert',
    categoryColor: 'bg-violet-600/90 text-white',
    title: 'Coldplay Music of The Spheres Jakarta',
    location: 'Jakarta, Indonesia',
    date: '15 Nov 2024',
    price: 'Rp 2.500.000',
    rating: 4.9,
    reviews: 248,
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1000',
    verified: true,
    availability: '2 Tiket Tersedia',
  },
  {
    id: 2,
    category: 'Movie',
    categoryColor: 'bg-blue-600/90 text-white',
    title: 'Nonton IMAX Oppenheimer',
    location: 'Bandung',
    date: '23 Mei 2024',
    price: 'Rp 150.000',
    rating: 4.8,
    reviews: 156,
    image: 'https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1000',
    verified: true,
    availability: '5 Tiket Tersedia',
  },
  {
    id: 3,
    category: 'Vacation',
    categoryColor: 'bg-emerald-600/90 text-white',
    title: 'Tiket Universal Studio Singapore',
    location: 'Singapore',
    date: '2 Jun 2024',
    price: 'Rp 950.000',
    rating: 4.9,
    reviews: 342,
    image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1000',
    verified: true,
    availability: '3 Tiket Tersedia',
  },
  {
    id: 4,
    category: 'Concert',
    categoryColor: 'bg-rose-600/90 text-white',
    title: 'Bruno Mars Live in Jakarta',
    location: 'Jakarta',
    date: '13 Sep 2024',
    price: 'Rp 1.750.000',
    rating: 4.8,
    reviews: 195,
    image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1000',
    verified: true,
    availability: '1 Tiket Tersedia',
  },
];

export default function TrendingSection() {
  return (
    <section id="listings" className="section-spacing bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-violet-100/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-100/15 to-transparent blur-3xl" />
      </div>

      <div className="container-padded relative z-10">
        {/* Section header - premium design */}
        <div className="mb-16">
          <div className="flex items-start justify-between gap-4 mb-6">
            {/* Left: Title and subtitle */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500/80 to-amber-500/80 flex items-center justify-center shadow-elevation-2">
                  <Flame className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest letter-spacing">
                  Trending This Week
                </span>
              </div>

              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2">
                  Listing Terpopuler
                </h2>
                <p className="text-lg text-gray-600 font-light">
                  Tiket favorit dengan rating tertinggi yang paling banyak dicari minggu ini
                </p>
              </div>
            </div>

            {/* Right: CTA */}
            <Link
              href="#"
              className="hidden sm:inline-flex items-center gap-2.5 px-5 py-3 text-sm font-semibold text-violet-600 border border-violet-200/50 rounded-2xl hover:bg-violet-50/60 hover:border-violet-300 transition-premium shadow-elevation-1 hover:shadow-elevation-2 flex-shrink-0 group"
            >
              Lihat semua
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Underline accent */}
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-purple-400 rounded-full opacity-60" />
        </div>

        {/* Cards grid - responsive with premium spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
          {listings.map((listing, index) => (
            <div
              key={listing.id}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both',
              }}
            >
              <ListingCard {...listing} />
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-10 flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-500 rounded-2xl shadow-elevation-3 hover:shadow-elevation-4 hover:-translate-y-0.5 active:translate-y-0 transition-premium"
          >
            <SparklesIcon className="w-4 h-4" />
            Jelajahi Semua Listing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Trust section below cards */}
        <div className="mt-16 pt-12 border-t border-gray-100/50">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: '✓',
                title: 'Pembayaran Aman',
                desc: 'Semua transaksi dilindungi dengan enkripsi end-to-end',
              },
              {
                icon: '⚡',
                title: 'Proses Cepat',
                desc: 'Dari membeli hingga menerima tiket hanya 5 menit',
              },
              {
                icon: '⭐',
                title: 'Penjual Terpilih',
                desc: 'Hanya penjual terverifikasi dengan rating tertinggi',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-200/40 group hover:border-violet-200/50 transition-premium"
              >
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
