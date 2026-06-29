'use client';

import Link from 'next/link';
import { MessageCircle, List, Sparkles, Star, ArrowRight, Ticket, Shield, Clock, TrendingUp, Users, Zap, BarChart3, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FloatingCard {
  id: string;
  type: 'ticket' | 'dashboard' | 'stat' | 'trust';
  x: number;
  y: number;
  delay: number;
  content: React.ReactNode;
  className?: string;
}

export default function HeroSection() {
  const [cards, setCards] = useState<FloatingCard[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize floating cards with staggered positions
    const floatingCards: FloatingCard[] = [
      // Ticket cards (left side)
      {
        id: 'ticket-1',
        type: 'ticket',
        x: -140,
        y: 60,
        delay: 0,
        content: (
          <div className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-4 w-56 shadow-elevation-5 border border-violet-400/30">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="text-[10px] font-bold text-violet-200 uppercase tracking-widest mb-1">CONCERT</div>
                <div className="text-sm font-bold text-white">Coldplay Jakarta</div>
                <div className="text-xs text-violet-200 mt-1">CAT 1 • GBK</div>
              </div>
              <Ticket className="w-5 h-5 text-violet-300" />
            </div>
            <div className="border-t border-violet-400/20 pt-4 flex items-end justify-between">
              <div>
                <div className="text-[9px] text-violet-300">Harga</div>
                <div className="text-lg font-bold text-white">Rp 2.5M</div>
              </div>
              <div className="text-[9px] text-violet-300">15 Nov</div>
            </div>
          </div>
        ),
      },
      {
        id: 'ticket-2',
        type: 'ticket',
        x: -180,
        y: 280,
        delay: 0.1,
        content: (
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-4 w-56 shadow-elevation-5 border border-blue-400/30">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-1">MOVIE</div>
                <div className="text-sm font-bold text-white">IMAX Oppenheimer</div>
                <div className="text-xs text-blue-200 mt-1">Bandung • 23 Mei</div>
              </div>
              <Ticket className="w-5 h-5 text-blue-300" />
            </div>
            <div className="border-t border-blue-400/20 pt-4">
              <div className="text-lg font-bold text-white">Rp 150.000</div>
            </div>
          </div>
        ),
      },
      // Dashboard preview (right side top)
      {
        id: 'dashboard-1',
        type: 'dashboard',
        x: 100,
        y: -80,
        delay: 0.2,
        content: (
          <div className="bg-white rounded-2xl shadow-elevation-5 border border-gray-100/60 overflow-hidden w-72 backdrop-blur-xs">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 border-b border-gray-200/50">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-gray-700 uppercase tracking-wider">Dashboard</div>
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                </div>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-3 border border-violet-200/50">
                  <div className="text-[10px] text-gray-500 font-medium mb-1">Listing Aktif</div>
                  <div className="text-xl font-bold text-violet-700">1.248</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-3 border border-emerald-200/50">
                  <div className="text-[10px] text-gray-500 font-medium mb-1">Transaksi</div>
                  <div className="text-xl font-bold text-emerald-700">842</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-3 border border-blue-200/50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-gray-500 font-medium">Revenue</div>
                    <div className="text-lg font-bold text-blue-700">Rp 87.4M</div>
                  </div>
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        ),
      },
      // Stats card (right side middle)
      {
        id: 'stat-1',
        type: 'stat',
        x: 140,
        y: 180,
        delay: 0.3,
        content: (
          <div className="bg-white rounded-2xl shadow-elevation-5 border border-gray-100/60 p-4 w-64 backdrop-blur-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Verified Transactions</div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
              </div>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
              <div className="h-full w-[98%] bg-gradient-to-r from-emerald-400 to-green-500 rounded-full" />
            </div>
          </div>
        ),
      },
      // Trust indicator (right side bottom)
      {
        id: 'trust-1',
        type: 'trust',
        x: 100,
        y: 380,
        delay: 0.4,
        content: (
          <div className="bg-white rounded-2xl shadow-elevation-4 border border-gray-100/60 p-3 w-64 backdrop-blur-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center flex-shrink-0">
              <Shield className="w-4.5 h-4.5 text-violet-600" />
            </div>
            <div>
              <div className="text-[9px] font-semibold text-gray-600 uppercase">Security</div>
              <div className="text-sm font-bold text-gray-900">End-to-End Encrypted</div>
            </div>
          </div>
        ),
      },
    ];

    setCards(floatingCards);
  }, []);

  // Parallax effect for cards
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-bl from-violet-300/20 via-purple-200/10 to-transparent blur-3xl animate-pulse" />

        {/* Secondary glows */}
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-violet-200/15 to-transparent blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-blue-200/10 to-transparent blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236d28d9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative container-padded w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-20 lg:py-32">
          {/* LEFT: Content Column */}
          <div className="flex flex-col gap-8 z-10 relative">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-violet-50/80 border border-violet-200/50 rounded-full w-fit shadow-elevation-2 hover:shadow-elevation-3 transition-premium backdrop-blur-xs">
              <div className="w-2 h-2 rounded-full bg-violet-500 animate-glow-pulse" />
              <span className="text-xs font-semibold text-violet-700 uppercase tracking-wide">
                Marketplace Terpercaya #1
              </span>
              <Sparkles className="w-3.5 h-3.5 text-violet-500 flex-shrink-0" />
            </div>

            {/* Main Headline - Redesigned for impact */}
            <div className="space-y-2">
              <div className="relative">
                <h1 className="text-display text-gray-900 leading-tight">
                  Daripada Hangus,
                </h1>
                <div className="inline-block mt-2">
                  <h1 className="text-display gradient-text leading-tight">
                    Jual di Opertix.
                  </h1>
                  {/* Underline accent */}
                  <div className="h-1 w-32 bg-gradient-to-r from-violet-500 to-purple-400 rounded-full mt-3 opacity-70" />
                </div>
              </div>
            </div>

            {/* Subheading */}
            <p className="text-lg text-gray-600 leading-[1.8] max-w-lg font-light">
              Platform resale tiket paling dipercaya di Indonesia. Jual dengan aman, beli dengan percaya diri.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
              <Link
                href="#"
                className="btn-primary inline-flex items-center justify-center gap-2.5 group"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Jual via WhatsApp
              </Link>
              <Link
                href="#listings"
                className="btn-secondary inline-flex items-center justify-center gap-2.5 group"
              >
                <List className="w-4 h-4" />
                Jelajahi Listings
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Social Proof Section */}
            <div className="flex flex-col gap-4 pt-4 border-t border-gray-100/50">
              {/* User avatars and count */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  {[
                    'bg-gradient-to-br from-violet-400 to-purple-500',
                    'bg-gradient-to-br from-blue-400 to-cyan-500',
                    'bg-gradient-to-br from-pink-400 to-rose-500',
                    'bg-gradient-to-br from-amber-400 to-orange-500',
                  ].map((c, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full ${c} border-2 border-white shadow-md animate-fade-in-up`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    10.000+ pengguna aktif
                  </div>
                  <div className="text-xs text-gray-500">Bergabung bulan lalu</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-3 border border-violet-200/50 text-center">
                  <div className="text-2xl font-bold text-violet-700">1.2K</div>
                  <div className="text-[10px] text-gray-600 font-medium mt-1">Listings</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-3 border border-emerald-200/50 text-center">
                  <div className="text-2xl font-bold text-emerald-700">98%</div>
                  <div className="text-[10px] text-gray-600 font-medium mt-1">Aman</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-3 border border-blue-200/50 text-center">
                  <div className="flex items-center justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-[10px] text-gray-600 font-medium">4.9/5</div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Shield, text: 'SSL Encrypted', color: 'text-green-600' },
                  { icon: Clock, text: '24/7 Support', color: 'text-blue-600' },
                  { icon: Zap, text: 'Instant Seller', color: 'text-amber-600' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full text-xs font-medium text-gray-700 border border-gray-200/50">
                    <item.icon className={`w-3.5 h-3.5 ${item.color}`} />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Floating UI Elements Column */}
          <div className="relative h-96 lg:h-[600px] hidden lg:block">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-violet-200/10 to-transparent rounded-3xl blur-2xl" />

            {/* Floating Cards Container */}
            {cards.map((card) => {
              const offsetX = (mousePosition.x - window.innerWidth / 2) * 0.02;
              const offsetY = (mousePosition.y - window.innerHeight / 2) * 0.02;

              return (
                <div
                  key={card.id}
                  className="absolute animate-fade-in-up"
                  style={{
                    left: `calc(50% + ${card.x}px + ${offsetX}px)`,
                    top: `calc(50% + ${card.y}px + ${offsetY}px)`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${card.delay}s`,
                    transition: 'all 0.3s ease-out',
                  }}
                >
                  {/* Glow effect behind card */}
                  <div
                    className={`absolute -inset-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-2xl pointer-events-none ${
                      card.type === 'ticket'
                        ? 'bg-gradient-to-r from-violet-500/20 to-purple-500/20'
                        : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10'
                    }`}
                  />

                  {/* Card */}
                  <div className="group relative">
                    {card.content}
                  </div>
                </div>
              );
            })}

            {/* Floating accent elements */}
            <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-violet-500/5 to-purple-500/5 blur-2xl pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/5 to-cyan-500/5 blur-xl pointer-events-none animate-pulse" />
          </div>

          {/* MOBILE: Simplified floating cards */}
          <div className="lg:hidden relative h-96 -mx-4">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              {/* Top card - Ticket */}
              <div className="animate-fade-in-up w-64">
                <div className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-4 shadow-elevation-5 border border-violet-400/30">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-[10px] font-bold text-violet-200 uppercase tracking-widest mb-1">CONCERT</div>
                      <div className="text-sm font-bold text-white">Coldplay Jakarta</div>
                    </div>
                    <Ticket className="w-4 h-4 text-violet-300" />
                  </div>
                  <div className="text-lg font-bold text-white">Rp 2.5M</div>
                </div>
              </div>

              {/* Middle stat */}
              <div className="animate-fade-in-up w-64" style={{ animationDelay: '0.1s' }}>
                <div className="bg-white rounded-2xl shadow-elevation-4 border border-gray-100/60 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-semibold text-gray-600 uppercase">Verified</div>
                      <div className="text-2xl font-bold text-gray-900">98%</div>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-12 w-2.5 h-2.5 text-violet-400 opacity-60 animate-fade-in pointer-events-none">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5z" />
        </svg>
      </div>
      <div className="absolute bottom-1/3 left-20 w-2 h-2 text-purple-400 opacity-40 animate-fade-in pointer-events-none" style={{ animationDelay: '0.1s' }}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5z" />
        </svg>
      </div>
    </section>
  );
}
