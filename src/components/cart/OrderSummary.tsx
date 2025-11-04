import { type FC, useState } from 'react';
import { Lock, Truck, ShieldCheck, Package } from 'lucide-react';
import Button from '../common/Button';

interface OrderSummaryProps {
  subtotal: number;
  itemCount: number;
}

export const OrderSummary: FC<OrderSummaryProps> = ({ subtotal, itemCount }) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);

  // Calculate shipping (free over $100)
  const shippingCost = subtotal >= 100 ? 0 : 12.99;
  const isFreeShipping = subtotal >= 100;

  // Calculate tax (8% mock rate)
  const taxRate = 0.08;
  const tax = subtotal * taxRate;

  // Calculate total
  const total = subtotal + shippingCost + tax - promoDiscount;

  const handleApplyPromo = () => {
    // Mock promo code validation
    if (promoCode.toLowerCase() === 'cozy10') {
      setPromoDiscount(subtotal * 0.1); // 10% off
      setPromoApplied(true);
    } else if (promoCode.toLowerCase() === 'welcome20') {
      setPromoDiscount(subtotal * 0.2); // 20% off
      setPromoApplied(true);
    } else {
      alert('Invalid promo code');
    }
  };

  return (
    <div className="bg-white rounded-xl border border-cream p-6 sticky top-24 h-fit">
      {/* Title */}
      <h2 className="text-2xl font-bold text-charcoal mb-6">Order Summary</h2>

      {/* Item Count */}
      <div className="text-sm text-charcoal/60 mb-4">
        {itemCount} {itemCount === 1 ? 'item' : 'items'} in cart
      </div>

      {/* Pricing Breakdown */}
      <div className="space-y-3 mb-6 pb-6 border-b border-cream">
        {/* Subtotal */}
        <div className="flex justify-between text-charcoal">
          <span>Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between text-charcoal">
          <span>Shipping</span>
          {isFreeShipping ? (
            <span className="font-semibold text-sage">FREE</span>
          ) : (
            <span className="font-semibold">${shippingCost.toFixed(2)}</span>
          )}
        </div>

        {/* Free Shipping Progress */}
        {!isFreeShipping && (
          <div className="bg-cream/50 rounded-lg p-3 text-sm">
            <p className="text-charcoal/70">
              Add <span className="font-semibold text-terracotta">${(100 - subtotal).toFixed(2)}</span> more for{' '}
              <span className="font-semibold">FREE shipping</span>
            </p>
          </div>
        )}

        {/* Tax */}
        <div className="flex justify-between text-charcoal">
          <span>Estimated Tax</span>
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </div>

        {/* Promo Discount */}
        {promoApplied && promoDiscount > 0 && (
          <div className="flex justify-between text-sage">
            <span>Promo Discount ({promoCode})</span>
            <span className="font-semibold">-${promoDiscount.toFixed(2)}</span>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="flex justify-between items-baseline mb-6 pb-6 border-b border-cream">
        <span className="text-lg font-semibold text-charcoal">Total</span>
        <span className="text-3xl font-bold text-charcoal">${total.toFixed(2)}</span>
      </div>

      {/* Promo Code */}
      {!promoApplied && (
        <div className="mb-6">
          <label htmlFor="promo-code" className="block text-sm font-medium text-charcoal mb-2">
            Promo Code
          </label>
          <div className="flex gap-2 items-stretch">
            <input
              id="promo-code"
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter code"
              className="flex-1 px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
            />
            <Button variant="secondary" size="medium" onClick={handleApplyPromo} className="shrink-0">
              Apply
            </Button>
          </div>
          <p className="text-xs text-charcoal/50 mt-2">Try: COZY10 or WELCOME20</p>
        </div>
      )}

      {/* Checkout Button */}
      <Button variant="primary" size="large" className="w-full mb-4" icon={<Lock className="w-5 h-5" />} iconPosition="left">
        Proceed to Checkout
      </Button>

      {/* Trust Badges */}
      <div className="space-y-3 pt-6 border-t border-cream">
        <div className="flex items-center gap-3 text-sm text-charcoal/70">
          <Truck className="w-5 h-5 text-sage" />
          <span>Free shipping over $100</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-charcoal/70">
          <ShieldCheck className="w-5 h-5 text-sage" />
          <span>100-Night Sleep Trial</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-charcoal/70">
          <Package className="w-5 h-5 text-sage" />
          <span>Easy Returns within 100 days</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-charcoal/70">
          <Lock className="w-5 h-5 text-sage" />
          <span>Secure Checkout</span>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="pt-6 border-t border-cream mt-6">
        <p className="text-xs text-charcoal/50 mb-3 text-center">We accept</p>
        <div className="flex justify-center gap-3 items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" className="h-6 opacity-60" />
          <img
            src="https://cdn-icons-png.flaticon.com/512/349/349228.png"
            alt="Mastercard"
            className="h-6 opacity-60"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/349/349230.png"
            alt="American Express"
            className="h-6 opacity-60"
          />
          <img src="https://cdn-icons-png.flaticon.com/512/888/888870.png" alt="PayPal" className="h-6 opacity-60" />
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968382.png"
            alt="Apple Pay"
            className="h-6 opacity-60"
          />
        </div>
      </div>
    </div>
  );
};
