import { type FC } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { products } from '../../data';

export const EmptyCart: FC = () => {
  // Get 4 bestselling products to show
  const suggestedProducts = products
    .filter((p) => p.rating >= 4.7)
    .slice(0, 4);

  return (
    <div className="max-w-4xl mx-auto text-center py-16">
      {/* Empty Icon */}
      <div className="mb-6 flex justify-center">
        <div className="w-32 h-32 rounded-full bg-cream flex items-center justify-center">
          <ShoppingBag className="w-16 h-16 text-charcoal/30" strokeWidth={1.5} />
        </div>
      </div>

      {/* Message */}
      <h1 className="text-4xl font-bold text-charcoal mb-4">Your cart is dreaming of cozy bedding</h1>
      <p className="text-lg text-charcoal/70 mb-8 max-w-md mx-auto">
        Fill it with premium sheets, pillows, and duvets for the perfect night's sleep.
      </p>

      {/* CTA Button */}
      <Link to="/">
        <Button variant="primary" size="large">
          Start Shopping
        </Button>
      </Link>

      {/* Suggested Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-charcoal mb-8">Bestsellers to Get You Started</h2>
        <div className="grid grid-cols-4 gap-6">
          {suggestedProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-white rounded-xl overflow-hidden border border-cream hover:shadow-lg transition-all"
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
              <div className="p-4">
                <h3 className="font-semibold text-charcoal mb-2 group-hover:text-terracotta transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? 'text-terracotta' : 'text-charcoal/20'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-charcoal/60">({product.reviewCount})</span>
                </div>
                <p className="text-xl font-bold text-charcoal">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
