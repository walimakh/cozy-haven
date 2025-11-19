import { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import Button from '../common/Button';
import QuantitySelector from '../common/QuantitySelector';

interface AddToCartSectionProps {
  selectedSize: string | null;
  selectedColor: string | null;
  onAddToCart: (quantity: number) => void;
  onAddToWishlist: () => void;
  inStock?: boolean;
}

export default function AddToCartSection({
  selectedSize,
  selectedColor,
  onAddToCart,
  onAddToWishlist,
  inStock = true,
}: AddToCartSectionProps) {
  const [quantity, setQuantity] = useState(1);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = () => {
    // Validate size and color selection
    if (!selectedSize || !selectedColor) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    // Call parent handler
    onAddToCart(quantity);

    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-4">
      {/* Quantity Selector */}
      <div className="space-y-2">
        <label className="text-[16px] font-semibold text-charcoal">
          Quantity
        </label>
        <QuantitySelector
          value={quantity}
          onChange={setQuantity}
          min={1}
          max={10}
        />
      </div>

      {/* Error Message */}
      {showError && (
        <div className="p-3 bg-terracotta/10 border border-terracotta/30 rounded-lg">
          <p className="text-[14px] text-terracotta font-medium">
            Please select a size and color before adding to cart
          </p>
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="p-3 bg-sage/10 border border-sage/30 rounded-lg">
          <p className="text-[14px] text-sage font-medium">
            Item added to cart successfully!
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        {/* Add to Cart Button */}
        <Button
          variant="primary"
          size="large"
          onClick={handleAddToCart}
          disabled={!inStock}
          className="flex-1 min-h-[48px]"
        >
          <ShoppingCart className="h-5 w-5" />
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>

        {/* Add to Wishlist Button */}
        <Button
          variant="secondary"
          size="large"
          onClick={onAddToWishlist}
          className="px-4 min-h-[48px]"
          aria-label="Add to wishlist"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-charcoal/10">
        <div className="flex items-center gap-2 text-[12px] text-charcoal/70">
          <svg
            className="h-4 w-4 text-sage"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          100-Night Trial
        </div>
        <div className="flex items-center gap-2 text-[12px] text-charcoal/70">
          <svg
            className="h-4 w-4 text-sage"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Free Shipping Over $100
        </div>
        <div className="flex items-center gap-2 text-[12px] text-charcoal/70">
          <svg
            className="h-4 w-4 text-sage"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Easy Returns
        </div>
        <div className="flex items-center gap-2 text-[12px] text-charcoal/70">
          <svg
            className="h-4 w-4 text-sage"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Secure Checkout
        </div>
      </div>
    </div>
  );
}
