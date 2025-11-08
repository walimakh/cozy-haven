import { type FC, useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { products } from '../../data';
import type { Product } from '../../types/data';

interface CartRecommendationsProps {
  onQuickAdd?: (product: Product) => void;
}

export const CartRecommendations: FC<CartRecommendationsProps> = ({ onQuickAdd }) => {
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

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
    <div className="py-16 border-t border-cream">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-charcoal mb-8">You Might Also Need</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-6">
          {recommendations.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden border border-cream hover:shadow-lg transition-all group"
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Quick Add Button Overlay */}
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
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
              <div className="p-4">
                <h3 className="font-semibold text-charcoal mb-2 line-clamp-2 group-hover:text-terracotta transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${i < Math.floor(product.rating) ? 'text-terracotta' : 'text-charcoal/20'}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-charcoal/60">({product.reviewCount})</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline justify-between">
                  <p className="text-xl font-bold text-charcoal">${product.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleQuickAdd(product)}
                    className="text-sm text-terracotta hover:text-charcoal transition-colors font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Banner */}
        <div className="mt-12 bg-cream/50 rounded-xl p-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-terracotta mb-2">14 Days</p>
              <p className="text-sm text-charcoal/70">Risk-Free Trial</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-sage mb-2">Free Shipping</p>
              <p className="text-sm text-charcoal/70">Orders Over $100</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-charcoal mb-2">14 Days</p>
              <p className="text-sm text-charcoal/70">Easy Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
