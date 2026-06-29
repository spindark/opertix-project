import Link from 'next/link';
import { Ticket, Twitter, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Marketplace: ['Jual Tiket', 'Beli Tiket', 'Cara Kerja', 'Biaya Layanan'],
  Kategori: ['Konser & Musik', 'Film & Bioskop', 'Olahraga', 'Perjalanan & Wisata'],
  Perusahaan: ['Tentang Kami', 'Blog', 'Karir', 'Kontak'],
  Bantuan: ['Pusat Bantuan', 'Kebijakan Privasi', 'Syarat & Ketentuan', 'FAQ'],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-gray-300">
      {/* CTA Banner */}
      <div className="border-b border-gray-800/50 backdrop-blur-sm">
        <div className="container-padded py-12 lg:py-16">
          <div className="relative rounded-3xl bg-gradient-to-br from-violet-600/95 via-purple-600/90 to-purple-800/95 p-8 lg:p-12 overflow-hidden shadow-elevation-5">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white blur-3xl" />
            </div>

            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                  Punya tiket yang mau dijual?
                </h3>
                <p className="text-violet-200 text-base leading-relaxed opacity-95">
                  Dapatkan pembeli dalam hitungan menit. Aman, cepat, dan terpercaya.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-violet-700 font-semibold text-sm rounded-2xl hover:shadow-glow-violet-lg hover:-translate-y-0.5 transition-premium shadow-elevation-4"
                >
                  Mulai Jual Sekarang
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold text-sm rounded-2xl hover:bg-white/20 border border-white/30 transition-premium shadow-elevation-2 hover:shadow-elevation-3 hover:-translate-y-0.5"
                >
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-padded py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center shadow-elevation-3">
                <Ticket className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-base font-bold text-white">Opertix</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 font-light">
              Marketplace terpercaya untuk jual beli tiket non-refundable di Indonesia. Aman, cepat, transparan.
            </p>
            <div className="flex gap-2.5">
              {[Twitter, Instagram, Facebook].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-gray-800/60 flex items-center justify-center hover:bg-violet-600 transition-premium shadow-elevation-1 hover:shadow-glow-violet group"
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" strokeWidth={1.8} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold text-gray-200 uppercase tracking-widest mb-4 letter-spacing">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-violet-400 transition-premium font-light"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 font-light">
            &copy; 2024 Opertix. All rights reserved. Built with care for the resale community.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400 font-light">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-glow-violet" />
            Semua sistem berjalan normal
          </div>
        </div>
      </div>
    </footer>
  );
}
