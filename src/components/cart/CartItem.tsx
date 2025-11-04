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
    <div className="flex gap-6 py-6 border-b border-cream">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="flex-shrink-0">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-32 h-32 object-cover rounded-lg hover:opacity-90 transition-opacity"
        />
      </Link>

      {/* Product Details */}
      <div className="flex-1 flex flex-col">
        {/* Product Name & Remove Button */}
        <div className="flex justify-between items-start mb-2">
          <div>
            <Link
              to={`/product/${product.id}`}
              className="text-lg font-semibold text-charcoal hover:text-terracotta transition-colors"
            >
              {product.name}
            </Link>
            <p className="text-sm text-charcoal/60 mt-1">SKU: {product.id.toUpperCase()}</p>
          </div>
          <button
            onClick={() => onRemove(product.id)}
            className="text-charcoal/60 hover:text-terracotta transition-colors p-2"
            aria-label="Remove item"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>

        {/* Size & Color */}
        <div className="flex gap-4 text-sm text-charcoal/70 mb-4">
          <div>
            <span className="font-medium">Size:</span> {selectedSize}
          </div>
          <div>
            <span className="font-medium">Color:</span> {selectedColor}
          </div>
        </div>

        {/* Price, Quantity, Subtotal */}
        <div className="flex items-end justify-between mt-auto">
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

        {/* Save for Later (Optional) */}
        <button className="text-sm text-sage hover:text-terracotta transition-colors mt-3 self-start">
          Save for Later
        </button>
      </div>
    </div>
  );
};
