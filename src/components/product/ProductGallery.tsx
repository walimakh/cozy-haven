import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from '../common/icons';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToImage = (index: number) => {
    if (scrollRef.current) {
      const imageWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({ left: imageWidth * index, behavior: 'smooth' });
    }
    setActiveImageIndex(index);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const imageWidth = scrollRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / imageWidth);
      if (newIndex !== activeImageIndex && newIndex >= 0 && newIndex < images.length) {
        setActiveImageIndex(newIndex);
      }
    }
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-square bg-cream flex items-center justify-center rounded-xl">
        <p className="text-charcoal/50">No image available</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Mobile: Swipeable Gallery */}
      <div className="md:hidden relative">
        {/* Scroll arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => scrollToImage(Math.max(0, activeImageIndex - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-md"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 text-charcoal" />
            </button>
            <button
              onClick={() => scrollToImage(Math.min(images.length - 1, activeImageIndex + 1))}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-md"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 text-charcoal" />
            </button>
          </>
        )}

        {/* Swipeable images */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 snap-start aspect-square bg-cream rounded-xl overflow-hidden"
            >
              <img
                src={image}
                alt={`${productName} - View ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="flex gap-2 justify-center mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToImage(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeImageIndex ? 'bg-terracotta' : 'bg-charcoal/20'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Desktop: Main Image + Thumbnails */}
      <div className="hidden md:block">
        {/* Main Image Display */}
        <div className="w-full aspect-square bg-cream rounded-xl overflow-hidden mb-4 group">
          <img
            src={images[activeImageIndex]}
            alt={`${productName} - View ${activeImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Thumbnail Strip */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`
                relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden
                border-2 transition-all duration-200
                ${
                  index === activeImageIndex
                    ? 'border-terracotta shadow-md'
                    : 'border-transparent hover:border-sage'
                }
              `}
              aria-label={`View image ${index + 1}`}
              aria-pressed={index === activeImageIndex}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Active indicator overlay */}
              {index === activeImageIndex && (
                <div className="absolute inset-0 bg-terracotta/10 pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Image counter for accessibility */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Viewing image {activeImageIndex + 1} of {images.length}
      </div>
    </div>
  );
}
