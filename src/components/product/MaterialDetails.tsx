import { Check, Leaf } from 'lucide-react';
import type { Product } from '../../types/data';
import { getMaterialByName } from '../../data/materials';

interface MaterialDetailsProps {
  product: Product;
}

export default function MaterialDetails({ product }: MaterialDetailsProps) {
  const material = getMaterialByName(product.specifications.material);

  if (!material) {
    return null;
  }

  // Show top 4 benefits
  const topBenefits = material.benefits.slice(0, 4);

  return (
    <section className="py-16 bg-sage/5">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <img
              src={material.textureImage}
              alt={`${material.name} texture closeup`}
              className="w-full aspect-square object-cover rounded-xl shadow-lg"
            />
            {material.sustainability && (
              <div className="absolute top-4 right-4 bg-sage text-white px-4 py-2 rounded-full flex items-center gap-2">
                <Leaf className="h-4 w-4" />
                <span className="text-[12px] font-semibold">Sustainable</span>
              </div>
            )}
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-[32px] font-bold text-charcoal mb-2">
                Why {material.name}?
              </h2>
              <p className="text-[16px] text-charcoal/80 leading-relaxed">
                {material.description.split('.')[0]}.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {topBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-sage rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold text-charcoal">
                      {benefit.title}
                    </p>
                    <p className="text-[14px] text-charcoal/70 mt-1">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Learn More Link */}
            <button
              onClick={() => alert('Would navigate to material detail page')}
              className="text-[14px] text-terracotta hover:text-terracotta/80 font-semibold transition-colors duration-200"
            >
              Learn more about {material.name} →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
