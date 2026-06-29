'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="space-y-4">
        {/* Main image */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-gray-200 group shadow-elevation-4">
          <img
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-elevation-3 flex items-center justify-center hover:bg-white hover:shadow-elevation-4 transition-all group/btn"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-gray-900 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-elevation-3 flex items-center justify-center hover:bg-white hover:shadow-elevation-4 transition-all group/btn"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-gray-900 group-hover/btn:-translate-x-0.5 transition-transform" />
          </button>

          {/* Fullscreen button */}
          <button
            onClick={() => setIsFullscreen(true)}
            className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm shadow-elevation-2 flex items-center justify-center hover:bg-white hover:shadow-elevation-3 transition-all"
            aria-label="Fullscreen"
          >
            <Maximize2 className="w-4.5 h-4.5 text-gray-900" />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 right-4">
            <div className="px-3 py-1.5 bg-gray-900/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Loading indicator for main image */}
          <div className="absolute bottom-4 left-4 flex gap-1">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'bg-white w-4'
                    : 'bg-white/40 w-1 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 border-2 ${
                index === currentIndex
                  ? 'border-violet-500 shadow-elevation-3'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Fullscreen image */}
          <div className="max-w-6xl w-full max-h-[80vh] flex items-center justify-center">
            <img
              src={images[currentIndex]}
              alt={`${title} - Fullscreen`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Navigation */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="text-white font-semibold px-4 py-2 bg-white/10 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
