import Accordion from '../common/Accordion';
import { Package, Droplet, Truck, ShieldCheck } from 'lucide-react';
import type { Product } from '../../types/data';

interface ProductDetailsAccordionProps {
  product: Product;
}

export default function ProductDetailsAccordion({
  product,
}: ProductDetailsAccordionProps) {
  const { specifications } = product;

  return (
    <div className="space-y-0">
      {/* Product Specifications */}
      <Accordion title="Product Specifications" defaultOpen={true}>
        <div className="space-y-3">
          {specifications && (
            <div className="grid grid-cols-2 gap-3">
              {specifications.material && (
                <div>
                  <p className="text-[12px] text-charcoal/60 font-medium uppercase tracking-wide">
                    Material
                  </p>
                  <p className="text-[14px] text-charcoal mt-1">
                    {specifications.material}
                  </p>
                </div>
              )}
              {specifications.threadCount && (
                <div>
                  <p className="text-[12px] text-charcoal/60 font-medium uppercase tracking-wide">
                    Thread Count
                  </p>
                  <p className="text-[14px] text-charcoal mt-1">
                    {specifications.threadCount}
                  </p>
                </div>
              )}
              {specifications.weaveType && (
                <div>
                  <p className="text-[12px] text-charcoal/60 font-medium uppercase tracking-wide">
                    Weave
                  </p>
                  <p className="text-[14px] text-charcoal mt-1">
                    {specifications.weaveType}
                  </p>
                </div>
              )}
              {specifications.fillPower && (
                <div>
                  <p className="text-[12px] text-charcoal/60 font-medium uppercase tracking-wide">
                    Fill Power
                  </p>
                  <p className="text-[14px] text-charcoal mt-1">
                    {specifications.fillPower}
                  </p>
                </div>
              )}
              {specifications.weight && (
                <div>
                  <p className="text-[12px] text-charcoal/60 font-medium uppercase tracking-wide">
                    Weight
                  </p>
                  <p className="text-[14px] text-charcoal mt-1">
                    {specifications.weight}
                  </p>
                </div>
              )}
            </div>
          )}

          {specifications?.whatsIncluded && (
            <div className="pt-3 border-t border-charcoal/10">
              <p className="text-[12px] text-charcoal/60 font-medium uppercase tracking-wide mb-2">
                What's Included
              </p>
              <ul className="space-y-1">
                {specifications.whatsIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Package className="h-4 w-4 text-sage mt-0.5 flex-shrink-0" />
                    <span className="text-[14px] text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {specifications?.dimensions && (
            <div className="pt-3 border-t border-charcoal/10">
              <p className="text-[12px] text-charcoal/60 font-medium uppercase tracking-wide mb-2">
                Dimensions
              </p>
              <p className="text-[14px] text-charcoal">
                {specifications.dimensions}
              </p>
            </div>
          )}
        </div>
      </Accordion>

      {/* Care Instructions */}
      <Accordion title="Care Instructions">
        <div className="space-y-3">
          {specifications.careInstructions && specifications.careInstructions.length > 0 ? (
            <ul className="space-y-2">
              {specifications.careInstructions.map((instruction: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <Droplet className="h-4 w-4 text-sage mt-1 flex-shrink-0" />
                  <span className="text-[14px] text-charcoal leading-relaxed">
                    {instruction}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[14px] text-charcoal/70">
              Care instructions not available for this product.
            </p>
          )}

          <div className="pt-3 border-t border-charcoal/10">
            <p className="text-[12px] text-charcoal/60 italic">
              Always check the care label on your product for specific
              instructions.
            </p>
          </div>
        </div>
      </Accordion>

      {/* Shipping & Returns */}
      <Accordion title="Shipping & Returns">
        <div className="space-y-4">
          {/* Shipping Information */}
          <div className="flex items-start gap-3">
            <Truck className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[14px] font-semibold text-charcoal mb-1">
                Free Shipping
              </p>
              <p className="text-[14px] text-charcoal/70">
                Free standard shipping on orders over $100. Orders typically
                arrive within 2-3 business days.
              </p>
            </div>
          </div>

          {/* 100-Night Trial */}
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[14px] font-semibold text-charcoal mb-1">
                100-Night Sleep Trial
              </p>
              <p className="text-[14px] text-charcoal/70">
                Try our bedding for 100 nights. If you're not completely
                satisfied, return it for a full refund.
              </p>
            </div>
          </div>

          {/* Easy Returns */}
          <div className="flex items-start gap-3">
            <svg
              className="h-5 w-5 text-sage mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <div>
              <p className="text-[14px] font-semibold text-charcoal mb-1">
                Easy Returns
              </p>
              <p className="text-[14px] text-charcoal/70">
                Free returns within 100 days of purchase. Items must be
                unwashed and in original packaging.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-charcoal/10">
            <p className="text-[12px] text-charcoal/60">
              For more information, visit our{' '}
              <button className="text-terracotta hover:underline">
                Shipping & Returns Policy
              </button>
            </p>
          </div>
        </div>
      </Accordion>
    </div>
  );
}
