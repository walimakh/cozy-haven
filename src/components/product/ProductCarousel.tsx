import { Star, ShoppingCart } from 'lucide-react';
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
  const handleQuickAdd = (productId: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onAddToCart) {
      onAddToCart(productId);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-[32px] font-bold text-charcoal mb-2">{title}</h2>
          {subtitle && (
            <p className="text-[16px] text-charcoal/70">{subtitle}</p>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
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
                <div className="p-4 space-y-2">
                  <h3 className="text-[16px] font-semibold text-charcoal line-clamp-2">
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
                    <span className="text-[12px] text-charcoal/60">
                      ({product.reviewCount})
                    </span>
                  </div>

                  {/* Price */}
                  <p className="text-[18px] font-semibold text-charcoal">
                    ${product.price.toFixed(2)}
                  </p>

                  {/* Material */}
                  <p className="text-[12px] text-charcoal/60">{product.specifications.material}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
