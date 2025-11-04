import { Star } from 'lucide-react';
import type { Product } from '../../types/data';

interface ProductInfoProps {
  product: Product;
}

// Star Rating Component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 ${
            star <= Math.round(rating)
              ? 'fill-terracotta text-terracotta'
              : 'fill-none text-charcoal/20'
          }`}
        />
      ))}
    </div>
  );
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const {
    name,
    price,
    rating,
    reviewCount,
    description,
    specifications,
  } = product;

  const inStock = true; // TODO: Add inStock to Product type

  return (
    <div className="space-y-4">
      {/* Product Name */}
      <h1 className="text-[40px] font-bold text-charcoal leading-tight">
        {name}
      </h1>

      {/* Price */}
      <div className="text-[32px] font-semibold text-charcoal">
        ${price.toFixed(2)}
      </div>

      {/* Rating and Reviews */}
      <div className="flex items-center gap-3">
        <StarRating rating={rating} />
        <a
          href="#reviews"
          className="text-[14px] text-charcoal/70 hover:text-terracotta transition-colors duration-200"
        >
          ({reviewCount} reviews)
        </a>
      </div>

      {/* Stock Status */}
      <div className="flex items-center gap-2">
        {inStock ? (
          <>
            <div className="w-2 h-2 bg-sage rounded-full" />
            <span className="text-[14px] text-sage font-medium">In Stock</span>
          </>
        ) : (
          <>
            <div className="w-2 h-2 bg-terracotta rounded-full" />
            <span className="text-[14px] text-terracotta font-medium">
              Out of Stock
            </span>
          </>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-charcoal/10 pt-4" />

      {/* Description */}
      <div className="space-y-2">
        <h2 className="text-[18px] font-semibold text-charcoal">
          About This Product
        </h2>
        <p className="text-[16px] text-charcoal/80 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Material Highlight */}
      {specifications.material && (
        <div className="bg-sage/5 rounded-lg p-4 border border-sage/20">
          <p className="text-[14px] text-charcoal/80">
            <span className="font-semibold text-sage">Material:</span>{' '}
            {specifications.material}
          </p>
        </div>
      )}

      {/* Divider */}
      <div className="border-t border-charcoal/10" />
    </div>
  );
}
