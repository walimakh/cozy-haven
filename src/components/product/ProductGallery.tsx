import { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-square bg-cream flex items-center justify-center rounded-xl">
        <p className="text-charcoal/50">No image available</p>
      </div>
    );
  }

  return (
    <div className="w-full">
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

      {/* Image counter for accessibility */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Viewing image {activeImageIndex + 1} of {images.length}
      </div>
    </div>
  );
}
