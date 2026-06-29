'use client';

import { MessageCircle, Star, Award, Users, CheckCircle2, TrendingUp, Calendar } from 'lucide-react';

interface SellerProfileProps {
  seller: {
    name: string;
    rating: number;
    reviews: number;
    responseTime: string;
    verified: boolean;
    avatar: string;
    followers: number;
    joinDate: string;
  };
}

export default function SellerProfile({ seller }: SellerProfileProps) {
  const stats = [
    { icon: Star, label: 'Rating', value: seller.rating, unit: '/5' },
    { icon: TrendingUp, label: 'Reviews', value: seller.reviews, unit: '' },
    { icon: Users, label: 'Followers', value: `${(seller.followers / 1000).toFixed(1)}K`, unit: '' },
  ];

  return (
    <div className="space-y-6 p-6 bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-200/50 rounded-3xl">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-900">Tentang Penjual</h2>

      {/* Seller Info */}
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <img
            src={seller.avatar}
            alt={seller.name}
            className="w-20 h-20 rounded-2xl object-cover shadow-elevation-2"
          />
          {seller.verified && (
            <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center shadow-elevation-2">
              <CheckCircle2 className="w-4 h-4 text-white fill-white" />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{seller.name}</h3>
              {seller.verified && (
                <div className="flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-600">Terverifikasi Sejak {seller.joinDate}</span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-4 mt-3">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex items-center gap-1.5">
                  <Icon className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-bold text-gray-900">
                    {stat.value}
                    <span className="text-gray-600 font-normal">{stat.unit}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        {[
          {
            icon: Star,
            label: 'Rating Penjual',
            value: seller.rating,
            color: 'from-amber-100 to-orange-100/50 text-amber-700',
          },
          {
            icon: Award,
            label: 'Terjual',
            value: `${seller.reviews}+`,
            color: 'from-emerald-100 to-green-100/50 text-emerald-700',
          },
          {
            icon: Calendar,
            label: 'Response Time',
            value: seller.responseTime,
            color: 'from-blue-100 to-cyan-100/50 text-blue-700',
          },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className={`p-3 rounded-2xl bg-gradient-to-br ${stat.color} border border-gray-200/50`}>
              <div className="flex items-center gap-2 mb-1">
                <Icon className="w-4 h-4 opacity-70" />
                <span className="text-xs font-medium opacity-80">{stat.label}</span>
              </div>
              <div className="text-lg font-bold">{stat.value}</div>
            </div>
          );
        })}
      </div>

      {/* Description */}
      <div className="p-4 bg-white/60 rounded-2xl border border-gray-200/50">
        <p className="text-sm text-gray-700 leading-relaxed">
          Penjual profesional dan terpercaya dengan pengalaman menjual tiket sejak 2022. Selalu memberikan service terbaik dan merespons dengan cepat. Kepuasan pelanggan adalah prioritas utama kami.
        </p>
      </div>

      {/* CTA Button */}
      <button className="w-full py-3 px-4 rounded-2xl bg-white border-2 border-gray-300 text-gray-900 font-semibold hover:border-violet-300 hover:bg-violet-50/50 transition-all duration-300 flex items-center justify-center gap-2.5 group shadow-elevation-1 hover:shadow-elevation-2">
        <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-violet-600 transition-colors" />
        Hubungi Penjual
      </button>

      {/* More from seller */}
      <div className="text-center">
        <button className="text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors">
          Lihat listing lainnya dari penjual ini →
        </button>
      </div>
    </div>
  );
}
