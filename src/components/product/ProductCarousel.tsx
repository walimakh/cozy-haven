import { useRef } from 'react';
import { Star, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';
import type { Product } from '../../types/data';

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
  onAddToCart?: (productId: string) => void;
  showQuickAdd?: boolean;
}

export default function ProductCarousel({
  title,
  subtitle,
  products,
  onAddToCart,
  showQuickAdd = false,
}: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 200; // Approximate card width on mobile
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleQuickAdd = (productId: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onAddToCart) {
      onAddToCart(productId);
    }
  };

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-[24px] md:text-[32px] font-bold text-charcoal mb-2">{title}</h2>
          {subtitle && (
            <p className="text-[14px] md:text-[16px] text-charcoal/70">{subtitle}</p>
          )}
        </div>

        {/* Product Carousel/Grid */}
        <div className="relative">
          {/* Mobile scroll arrows */}
          {products.length > 2 && (
            <>
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-md md:hidden"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5 text-charcoal" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-md md:hidden"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5 text-charcoal" />
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 md:gap-6 md:overflow-visible"
          >
            {products.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="flex-shrink-0 w-[70%] md:w-auto snap-start"
              >
                <Card
                  padding="none"
                  className="group cursor-pointer"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden rounded-t-xl">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Quick Add Button (shows on hover if enabled) */}
                  {showQuickAdd && (
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Button
                        variant="primary"
                        size="small"
                        onClick={(e) => handleQuickAdd(product.id, e)}
                        className="w-full"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Quick Add
                      </Button>
                    </div>
                  )}
                  </div>

                  {/* Product Info */}
                  <div className="p-3 md:p-4 space-y-1 md:space-y-2">
                    <h3 className="text-[14px] md:text-[16px] font-semibold text-charcoal line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-3 w-3 ${
                              star <= Math.round(product.rating)
                                ? 'fill-terracotta text-terracotta'
                                : 'fill-none text-charcoal/20'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] md:text-[12px] text-charcoal/60">
                        ({product.reviewCount})
                      </span>
                    </div>

                    {/* Price */}
                    <p className="text-[16px] md:text-[18px] font-semibold text-charcoal">
                      ${product.price.toFixed(2)}
                    </p>

                    {/* Material - hide on mobile for space */}
                    <p className="hidden md:block text-[12px] text-charcoal/60">{product.specifications.material}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
