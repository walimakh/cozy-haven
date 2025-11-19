import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { CartItem } from '../components/cart/CartItem';
import { OrderSummary } from '../components/cart/OrderSummary';
import { CartRecommendations } from '../components/cart/CartRecommendations';
import { EmptyCart } from '../components/cart/EmptyCart';
import { useCart } from '../context/CartContext';
import type { Product } from '../types/data';

export const CartPage: FC = () => {
  const { items, itemCount, subtotal, updateQuantity, removeFromCart, addToCart } = useCart();

  // Handle quantity change
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  // Handle remove item
  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };

  // Handle quick add from recommendations
  const handleQuickAdd = (product: Product) => {
    // Add with default selections
    const defaultSize = product.availableSizes?.[0] || 'Queen';
    const defaultColor = product.availableColors?.[0] || 'White';
    addToCart(product, 1, defaultSize, defaultColor);
  };

  // Show empty cart if no items
  if (items.length === 0) {
    return (
      <Layout cartItemCount={itemCount}>
        <EmptyCart />
      </Layout>
    );
  }

  return (
    <Layout cartItemCount={itemCount}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-6 md:py-12">
        {/* Breadcrumb / Back Link */}
        <Link to="/" className="inline-flex items-center text-charcoal/70 hover:text-terracotta transition-colors mb-6 md:mb-8">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Continue Shopping
        </Link>

        {/* Page Title */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-charcoal mb-2">Shopping Cart</h1>
          <p className="text-sm md:text-base text-charcoal/60">
            {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {/* Mobile: Single Column, Desktop: Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16">
          {/* Cart Items */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl border border-cream p-4 md:p-6">
              {items.map((item) => (
                <CartItem
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                  item={item}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemoveItem}
                />
              ))}
            </div>

            {/* Continue Shopping Link - hidden on mobile, shown on desktop */}
            <div className="hidden md:block mt-6 text-center">
              <Link to="/" className="text-terracotta hover:text-charcoal transition-colors font-medium">
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <OrderSummary subtotal={subtotal} itemCount={itemCount} />
          </div>
        </div>

        {/* Recommendations Section */}
        <CartRecommendations onQuickAdd={handleQuickAdd} />
      </div>
    </Layout>
  );
};
