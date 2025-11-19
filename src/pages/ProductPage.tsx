import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Layout from '../components/layout/Layout';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import SizeSelector from '../components/product/SizeSelector';
import ColorSelector from '../components/product/ColorSelector';
import AddToCartSection from '../components/product/AddToCartSection';
import ProductDetailsAccordion from '../components/product/ProductDetailsAccordion';
import MaterialDetails from '../components/product/MaterialDetails';
import ProductCarousel from '../components/product/ProductCarousel';
import ReviewsSection from '../components/product/ReviewsSection';
import { products } from '../data/products';
import { reviews } from '../data/reviews';
import { collections } from '../data/collections';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { itemCount, addToCart } = useCart();

  // Use route param or default to first product
  const productId = id || 'sheet-001';
  const product = products.find((p) => p.id === productId);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  if (!product) {
    return (
      <Layout cartItemCount={itemCount}>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-charcoal text-[18px]">Product not found</p>
        </div>
      </Layout>
    );
  }

  // Get product reviews
  const productReviews = reviews.filter((r) => r.productId === product.id);

  // Get related products (same category, different product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Get "complete the set" products (matching collection or complementary items)
  const completeSetProducts = products
    .filter((p) => p.collectionId === product.collectionId && p.id !== product.id)
    .slice(0, 4);

  // Get collection name for subtitle
  const collection = product.collectionId
    ? collections.find((c) => c.id === product.collectionId)
    : null;

  // Handlers
  const handleAddToCart = (quantity: number) => {
    if (!selectedSize || !selectedColor) {
      return; // Validation is handled in AddToCartSection
    }
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  const handleAddToWishlist = () => {
    console.log('Added to wishlist:', product.id);
    // Wishlist functionality will be implemented in TASK-041
  };

  const handleQuickAdd = (productId: string) => {
    const quickProduct = products.find((p) => p.id === productId);
    if (quickProduct) {
      const defaultSize = quickProduct.availableSizes?.[0] || 'Queen';
      const defaultColor = quickProduct.availableColors?.[0] || 'White';
      addToCart(quickProduct, 1, defaultSize, defaultColor);
    }
  };

  return (
    <Layout cartItemCount={itemCount}>
      {/* Product Main Section */}
      <section className="bg-white py-8 md:py-12">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Left Column: Product Gallery */}
            <ProductGallery images={product.images} productName={product.name} />

            {/* Right Column: Product Info & Selectors */}
            <div className="space-y-6">
              <ProductInfo product={product} />

              {/* Size Selector */}
              {product.availableSizes && product.availableSizes.length > 0 && (
                <SizeSelector
                  sizes={product.availableSizes}
                  selectedSize={selectedSize}
                  onSizeChange={setSelectedSize}
                />
              )}

              {/* Color Selector */}
              {product.availableColors && product.availableColors.length > 0 && (
                <ColorSelector
                  colors={product.availableColors.map((color) => ({
                    name: color,
                    hex:
                      color === 'White' ? '#FFFFFF' :
                      color === 'Ivory' ? '#F5F0E8' :
                      color === 'Sage' ? '#A8B5A0' :
                      color === 'Stone Gray' ? '#8B8680' :
                      color === 'Terracotta' ? '#D4A59A' :
                      color === 'Charcoal' ? '#4A4543' :
                      color === 'Navy' ? '#2C3E50' :
                      color === 'Blush' ? '#F5CBA7' : '#FFFFFF'
                  }))}
                  selectedColor={selectedColor}
                  onColorChange={setSelectedColor}
                />
              )}

              {/* Add to Cart Section */}
              <AddToCartSection
                selectedSize={selectedSize}
                selectedColor={selectedColor}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
                inStock={true}
              />

              {/* Product Details Accordions */}
              <div className="pt-6 border-t border-charcoal/10">
                <ProductDetailsAccordion product={product} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Details Section */}
      <MaterialDetails product={product} />

      {/* Complete the Set Section */}
      {completeSetProducts.length > 0 && (
        <ProductCarousel
          title="Complete the Set"
          subtitle={collection ? `Perfectly paired items from the ${collection.name} collection` : 'Perfectly paired items for your bedroom'}
          products={completeSetProducts}
          onAddToCart={handleQuickAdd}
          showQuickAdd={true}
        />
      )}

      {/* Reviews Section */}
      <ReviewsSection
        reviews={productReviews}
        averageRating={product.rating}
        productId={product.id}
      />

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <ProductCarousel
          title="You Might Also Like"
          subtitle="More beautiful bedding in this category"
          products={relatedProducts}
          onAddToCart={handleQuickAdd}
          showQuickAdd={false}
        />
      )}
    </Layout>
  );
}
