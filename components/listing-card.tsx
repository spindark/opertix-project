'use client';

import { Heart, MapPin, Calendar, Star, CheckCircle2, Shield, Zap } from 'lucide-react';
import { useState } from 'react';

interface ListingCardProps {
  category: string;
  categoryColor: string;
  title: string;
  location: string;
  date: string;
  price: string;
  rating?: number;
  reviews?: number;
  image: string;
  verified?: boolean;
  availability?: string;
}

export default function ListingCard({
  category,
  categoryColor,
  title,
  location,
  date,
  price,
  rating,
  reviews,
  image,
  verified = true,
  availability,
}: ListingCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-full flex flex-col cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card container with premium shadow */}
      <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-100/50 shadow-elevation-2 hover:shadow-elevation-5 transition-all duration-500 flex flex-col h-full">
        {/* Image Container with overlay effects */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-[5/4] flex-shrink-0">
          {/* Actual image */}
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            loading="lazy"
          />

          {/* Premium gradient overlays */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-60'
            }`}
          />

          {/* Category Badge - premium positioned */}
          <div className="absolute top-4 left-4 z-20">
            <span
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest backdrop-blur-md border border-white/30 shadow-elevation-3 transition-all duration-300 ${
                categoryColor
              } ${isHovered ? 'scale-105 shadow-elevation-4' : ''}`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
              {category}
            </span>
          </div>

          {/* Wishlist button - premium design */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsSaved(!isSaved);
            }}
            className={`absolute top-4 right-4 z-20 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md border border-white/40 shadow-elevation-3 transition-all duration-300 group/heart ${
              isSaved
                ? 'bg-rose-500/90 border-rose-400'
                : 'bg-white/90 hover:bg-white hover:border-white/60'
            }`}
            aria-label="Add to wishlist"
          >
            <Heart
              className={`w-5 h-5 transition-all duration-300 ${
                isSaved
                  ? 'text-white fill-white scale-110'
                  : 'text-gray-700 group-hover/heart:text-rose-500 group-hover/heart:scale-110'
              }`}
              strokeWidth={2}
            />
          </button>

          {/* Availability badge - bottom right */}
          {availability && (
            <div className="absolute bottom-4 right-4 z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/90 text-white rounded-xl text-xs font-semibold backdrop-blur-sm border border-emerald-400/50 shadow-elevation-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {availability}
              </div>
            </div>
          )}

          {/* Hover action overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center backdrop-blur-sm transition-all duration-300 pointer-events-none ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/95 rounded-full font-semibold text-gray-900 shadow-elevation-4 hover:shadow-elevation-5 group-hover:scale-105 transition-transform duration-300">
              <Zap className="w-4 h-4 text-violet-600" />
              Lihat Detail
            </div>
          </div>
        </div>

        {/* Content section - premium spacing */}
        <div className="flex flex-col flex-1 p-5 space-y-4">
          {/* Title with premium typography */}
          <div className="flex-1">
            <h3
              className={`text-base font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-violet-700 transition-colors duration-300 ${
                isHovered ? 'translate-y-0' : 'translate-y-0'
              }`}
            >
              {title}
            </h3>
          </div>

          {/* Location and date - elegant metadata */}
          <div className="flex flex-col gap-2.5 py-3 border-t border-b border-gray-100/70">
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <MapPin className="w-4 h-4 flex-shrink-0 text-gray-400" strokeWidth={1.8} />
              <span className="line-clamp-1">{location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <Calendar className="w-4 h-4 flex-shrink-0 text-gray-400" strokeWidth={1.8} />
              <span>{date}</span>
            </div>
          </div>

          {/* Seller trust indicator */}
          {verified && (
            <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50/60 rounded-xl border border-emerald-200/40">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" strokeWidth={2} />
              <span className="text-xs font-semibold text-emerald-700">Penjual Terverifikasi</span>
            </div>
          )}

          {/* Rating and Price - conversion focused */}
          <div className="flex items-center justify-between pt-2">
            {/* Rating */}
            {rating && (
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-gray-300 text-gray-300'
                      }`}
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-700">
                  {rating}
                  {reviews && <span className="text-gray-500 font-normal"> ({reviews})</span>}
                </span>
              </div>
            )}

            {/* Price - premium styling */}
            <div className="text-right">
              <div className="text-xs text-gray-500 font-medium mb-0.5">Mulai dari</div>
              <div className="text-xl font-bold gradient-text">{price}</div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={(e) => e.stopPropagation()}
            className="w-full mt-auto py-3 px-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5 active:translate-y-0 group-hover:scale-105 origin-bottom"
          >
            Pesan Sekarang
          </button>
        </div>
      </div>

      {/* Optional: Premium corner accent */}
      <div className="absolute -top-1 -right-1 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-violet-400/40 rounded-br-lg" />
      </div>
    </div>
  );
}
