import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import QuantitySelector from '../common/QuantitySelector';
import type { Product } from '../../types/data';

interface CartItemProps {
  item: {
    product: Product;
    quantity: number;
    selectedSize: string;
    selectedColor: string;
  };
  onQuantityChange: (productId: string, newQuantity: number) => void;
  onRemove: (productId: string) => void;
}

export const CartItem: FC<CartItemProps> = ({ item, onQuantityChange, onRemove }) => {
  const { product, quantity, selectedSize, selectedColor } = item;
  const subtotal = product.price * quantity;

  return (
    <div className="flex gap-3 md:gap-6 py-4 md:py-6 border-b border-cream">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="flex-shrink-0">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-lg hover:opacity-90 transition-opacity"
        />
      </Link>

      {/* Product Details */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Product Name & Remove Button */}
        <div className="flex justify-between items-start mb-1 md:mb-2">
          <div className="min-w-0 flex-1 pr-2">
            <Link
              to={`/product/${product.id}`}
              className="text-sm md:text-lg font-semibold text-charcoal hover:text-terracotta transition-colors line-clamp-2"
            >
              {product.name}
            </Link>
            <p className="text-xs md:text-sm text-charcoal/60 mt-0.5 md:mt-1 hidden md:block">SKU: {product.id.toUpperCase()}</p>
          </div>
          <button
            onClick={() => onRemove(product.id)}
            className="text-charcoal/60 hover:text-terracotta transition-colors p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Remove item"
          >
            <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Size & Color */}
        <div className="flex gap-3 md:gap-4 text-xs md:text-sm text-charcoal/70 mb-2 md:mb-4">
          <div>
            <span className="font-medium">Size:</span> {selectedSize}
          </div>
          <div>
            <span className="font-medium">Color:</span> {selectedColor}
          </div>
        </div>

        {/* Mobile Layout: Stack price and quantity */}
        <div className="md:hidden space-y-3 mt-auto">
          {/* Price */}
          <div className="text-sm font-semibold text-charcoal">
            ${product.price.toFixed(2)}
          </div>

          {/* Quantity and Subtotal row */}
          <div className="flex items-center justify-between">
            <QuantitySelector
              value={quantity}
              onChange={(newQuantity) => onQuantityChange(product.id, newQuantity)}
              min={1}
              max={10}
            />
            <div className="text-right">
              <p className="text-base font-bold text-charcoal">${subtotal.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Price, Quantity, Subtotal in row */}
        <div className="hidden md:flex items-end justify-between mt-auto">
          <div className="flex items-center gap-6">
            {/* Unit Price */}
            <div className="text-sm">
              <span className="text-charcoal/60">Price: </span>
              <span className="font-semibold text-charcoal">${product.price.toFixed(2)}</span>
            </div>

            {/* Quantity Selector */}
            <div>
              <QuantitySelector
                value={quantity}
                onChange={(newQuantity) => onQuantityChange(product.id, newQuantity)}
                min={1}
                max={10}
              />
            </div>
          </div>

          {/* Subtotal */}
          <div className="text-right">
            <p className="text-sm text-charcoal/60 mb-1">Subtotal</p>
            <p className="text-xl font-bold text-charcoal">${subtotal.toFixed(2)}</p>
          </div>
        </div>

        {/* Save for Later - hidden on mobile for space */}
        <button className="hidden md:block text-sm text-sage hover:text-terracotta transition-colors mt-3 self-start">
          Save for Later
        </button>
      </div>
    </div>
  );
};
