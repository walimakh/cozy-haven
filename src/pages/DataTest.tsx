import React from 'react';
import {
  products,
  collections,
  categories,
  reviews,
  materials,
  getBestsellers,
  getProductsByCategory,
  getReviewsByProductId,
} from '../data';

// Simple page to test that all mock data loads correctly
const DataTest: React.FC = () => {
  return (
    <div className="min-h-screen bg-warm-cream p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-h1 font-bold text-deep-brown mb-8">
          Mock Data Test Page
        </h1>

        {/* Products Test */}
        <section className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-h2 font-semibold text-deep-brown mb-4">
            Products ({products.length} total)
          </h2>
          <div className="space-y-2">
            <p className="text-body text-warm-charcoal">
              ✓ Total Products: {products.length}
            </p>
            <p className="text-body text-warm-charcoal">
              ✓ Bestsellers: {getBestsellers().length}
            </p>
            <p className="text-body text-warm-charcoal">
              ✓ Sheets: {getProductsByCategory('Sheets').length}
            </p>
            <p className="text-body text-warm-charcoal">
              ✓ Duvets: {getProductsByCategory('Duvets').length}
            </p>
            <p className="text-body text-warm-charcoal">
              ✓ Sample Product: {products[0].name} - ${products[0].price}
            </p>
          </div>
        </section>

        {/* Collections Test */}
        <section className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-h2 font-semibold text-deep-brown mb-4">
            Collections ({collections.length} total)
          </h2>
          <div className="space-y-2">
            {collections.map((collection) => (
              <p key={collection.id} className="text-body text-warm-charcoal">
                ✓ {collection.name} - {collection.featuredProductIds.length}{' '}
                featured products
              </p>
            ))}
          </div>
        </section>

        {/* Categories Test */}
        <section className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-h2 font-semibold text-deep-brown mb-4">
            Categories ({categories.length} total)
          </h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <p key={category.id} className="text-body text-warm-charcoal">
                ✓ {category.name} - {category.productCount} products
              </p>
            ))}
          </div>
        </section>

        {/* Reviews Test */}
        <section className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-h2 font-semibold text-deep-brown mb-4">
            Reviews ({reviews.length} total)
          </h2>
          <div className="space-y-2">
            <p className="text-body text-warm-charcoal">
              ✓ Total Reviews: {reviews.length}
            </p>
            <p className="text-body text-warm-charcoal">
              ✓ Reviews for {products[0].name}:{' '}
              {getReviewsByProductId(products[0].id).length}
            </p>
            <p className="text-body text-warm-charcoal">
              ✓ Sample Review: "{reviews[0].title}" - {reviews[0].rating} stars
              by {reviews[0].reviewerName}
            </p>
          </div>
        </section>

        {/* Materials Test */}
        <section className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-h2 font-semibold text-deep-brown mb-4">
            Materials ({materials.length} total)
          </h2>
          <div className="space-y-2">
            {materials.map((material) => (
              <p key={material.id} className="text-body text-warm-charcoal">
                ✓ {material.name} - {material.benefits.length} benefits listed
              </p>
            ))}
          </div>
        </section>

        {/* Success Message */}
        <div className="p-6 bg-sage-green text-white rounded-lg text-center">
          <p className="text-h3 font-semibold">
            ✅ All Mock Data Loaded Successfully!
          </p>
          <p className="text-body mt-2">
            Epic 4 Complete - Ready for Epic 5 (Homepage Development)
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataTest;
