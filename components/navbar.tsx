'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Ticket, Bell } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-premium ${
        scrolled
          ? 'glass shadow-elevation-3'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-padded">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center shadow-elevation-3 group-hover:shadow-glow-violet transition-premium">
              <Ticket className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-base font-bold tracking-tight text-gray-900">
              Opertix
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {['Beranda', 'Listings', 'Kategori', 'Tentang Kami'].map((item) => (
              <Link
                key={item}
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-violet-700 rounded-xl hover:bg-violet-50/80 transition-premium"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-2.5">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-violet-500 transition-colors" />
              <input
                type="text"
                placeholder="Cari konser, film..."
                className="pl-9 pr-4 py-2.5 text-sm bg-gray-50/60 border border-gray-200/60 rounded-2xl w-56 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-300 focus:bg-white transition-premium placeholder:text-gray-400"
              />
            </div>
            <button className="p-2.5 rounded-xl text-gray-500 hover:text-violet-600 hover:bg-violet-50/80 transition-premium shadow-elevation-1 hover:shadow-elevation-2">
              <Bell className="w-4 h-4" />
            </button>
            <Link
              href="#"
              className="btn-primary"
            >
              Jual Tiket
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2.5 rounded-xl text-gray-600 hover:bg-gray-100/80 transition-premium"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-100/50 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col gap-1">
              {['Beranda', 'Listings', 'Kategori', 'Tentang Kami'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-violet-600 hover:bg-violet-50/60 rounded-xl transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="pt-3 px-4 flex flex-col gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari event..."
                    className="pl-9 pr-4 py-2.5 text-sm bg-gray-50/60 border border-gray-200/60 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-300 focus:bg-white transition-premium"
                  />
                </div>
                <Link
                  href="#"
                  className="btn-primary w-full text-center"
                >
                  Jual Tiket
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
