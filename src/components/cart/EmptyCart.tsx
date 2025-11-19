import { type FC, useRef } from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { products } from '../../data';

export const EmptyCart: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Get 4 bestselling products to show
  const suggestedProducts = products
    .filter((p) => p.rating >= 4.7)
    .slice(0, 4);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / 2;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto text-center py-8 md:py-16 px-4 md:px-0">
      {/* Empty Icon */}
      <div className="mb-4 md:mb-6 flex justify-center">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-cream flex items-center justify-center">
          <ShoppingBag className="w-12 h-12 md:w-16 md:h-16 text-charcoal/30" strokeWidth={1.5} />
        </div>
      </div>

      {/* Message */}
      <h1 className="text-2xl md:text-4xl font-bold text-charcoal mb-3 md:mb-4">Your cart is dreaming of cozy bedding</h1>
      <p className="text-base md:text-lg text-charcoal/70 mb-6 md:mb-8 max-w-md mx-auto">
        Fill it with premium sheets, pillows, and duvets for the perfect night's sleep.
      </p>

      {/* CTA Button */}
      <Link to="/">
        <Button variant="primary" size="large" className="min-h-[48px]">
          Start Shopping
        </Button>
      </Link>

      {/* Suggested Products */}
      <div className="mt-10 md:mt-16">
        <h2 className="text-xl md:text-2xl font-bold text-charcoal mb-4 md:mb-8">Bestsellers to Get You Started</h2>

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
            {suggestedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="flex-shrink-0 w-[calc(50%-8px)] md:w-auto snap-start group bg-white rounded-xl overflow-hidden border border-cream hover:shadow-lg transition-all"
              >
                {/* Product Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-3 md:p-4">
                  <h3 className="text-sm md:text-base font-semibold text-charcoal mb-1 md:mb-2 group-hover:text-terracotta transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-xs md:text-sm ${i < Math.floor(product.rating) ? 'text-terracotta' : 'text-charcoal/20'}`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-xs md:text-sm text-charcoal/60">({product.reviewCount})</span>
                  </div>
                  <p className="text-lg md:text-xl font-bold text-charcoal">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
