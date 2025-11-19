import { type FC, useState, useRef } from 'react';
import { Plus, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../../data';
import type { Product } from '../../types/data';

interface CartRecommendationsProps {
  onQuickAdd?: (product: Product) => void;
}

export const CartRecommendations: FC<CartRecommendationsProps> = ({ onQuickAdd }) => {
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / 2;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Get "Complete the Set" products (substantial bedding items for upsell)
  // Static product IDs for UX demonstration - duvet, pillows, blanket, topper
  const recommendations = products
    .filter((p) => ['duvet-001', 'pillow-002', 'blanket-001', 'topper-001'].includes(p.id))
    .slice(0, 4);

  const handleQuickAdd = (product: Product) => {
    setAddedItems((prev) => new Set(prev).add(product.id));
    onQuickAdd?.(product);

    // Reset after 2 seconds
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 2000);
  };

  const isAdded = (productId: string) => addedItems.has(productId);

  return (
    <div className="py-8 md:py-16 border-t border-cream">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Section Title */}
        <h2 className="text-xl md:text-3xl font-bold text-charcoal mb-4 md:mb-8">You Might Also Need</h2>

        {/* Product Grid/Scroll */}
        <div className="relative">
          {/* Mobile scroll arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-md md:hidden"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-charcoal" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-md md:hidden"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-charcoal" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 md:gap-6 md:overflow-visible"
          >
          {recommendations.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[calc(50%-8px)] md:w-auto snap-start bg-white rounded-xl overflow-hidden border border-cream hover:shadow-lg transition-all group"
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Quick Add Button Overlay - desktop only */}
                <div className="hidden md:flex absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center">
                  <button
                    onClick={() => handleQuickAdd(product)}
                    disabled={isAdded(product.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      isAdded(product.id)
                        ? 'bg-sage text-white cursor-default'
                        : 'bg-white text-charcoal hover:bg-terracotta hover:text-white'
                    }`}
                  >
                    {isAdded(product.id) ? (
                      <>
                        <Check className="w-5 h-5 inline mr-2" />
                        Added!
                      </>
                    ) : (
                      <>
                        <Plus className="w-5 h-5 inline mr-2" />
                        Quick Add
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3 md:p-4">
                <h3 className="text-sm md:text-base font-semibold text-charcoal mb-1 md:mb-2 line-clamp-2 group-hover:text-terracotta transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xs md:text-sm ${i < Math.floor(product.rating) ? 'text-terracotta' : 'text-charcoal/20'}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-charcoal/60">({product.reviewCount})</span>
                </div>

                {/* Price and Add Button */}
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <p className="text-lg md:text-xl font-bold text-charcoal">${product.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleQuickAdd(product)}
                    className="text-xs md:text-sm text-terracotta hover:text-charcoal transition-colors font-medium min-h-[44px] md:min-h-0 flex items-center justify-center md:justify-start"
                  >
                    {isAdded(product.id) ? (
                      <>
                        <Check className="w-4 h-4 inline mr-1" />
                        Added!
                      </>
                    ) : (
                      'Add to Cart'
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Benefits Banner */}
        <div className="mt-8 md:mt-12 bg-cream/50 rounded-xl p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
            <div className="flex md:block items-center justify-between md:justify-center">
              <p className="text-lg md:text-3xl font-bold text-terracotta md:mb-2">14 Days</p>
              <p className="text-xs md:text-sm text-charcoal/70">Risk-Free Trial</p>
            </div>
            <div className="flex md:block items-center justify-between md:justify-center">
              <p className="text-lg md:text-3xl font-bold text-sage md:mb-2">Free Shipping</p>
              <p className="text-xs md:text-sm text-charcoal/70">Orders Over $100</p>
            </div>
            <div className="flex md:block items-center justify-between md:justify-center">
              <p className="text-lg md:text-3xl font-bold text-charcoal md:mb-2">14 Days</p>
              <p className="text-xs md:text-sm text-charcoal/70">Easy Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
