import { Info } from 'lucide-react';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string | null;
  onSizeChange: (size: string) => void;
  showSizeGuide?: boolean;
}

export default function SizeSelector({
  sizes,
  selectedSize,
  onSizeChange,
  showSizeGuide = true,
}: SizeSelectorProps) {
  return (
    <div className="space-y-3">
      {/* Label and Size Guide */}
      <div className="flex items-center justify-between">
        <label className="text-[16px] font-semibold text-charcoal">
          Select Size {selectedSize && <span className="font-normal text-charcoal/60">- {selectedSize}</span>}
        </label>
        {showSizeGuide && (
          <button
            type="button"
            className="flex items-center gap-1 text-[14px] text-terracotta hover:text-terracotta/80 transition-colors duration-200"
            onClick={() => alert('Size guide would open here')}
          >
            <Info className="h-4 w-4" />
            Size Guide
          </button>
        )}
      </div>

      {/* Size Options */}
      <div className="grid grid-cols-3 gap-3">
        {sizes.map((size) => {
          const isSelected = selectedSize === size;
          return (
            <button
              key={size}
              type="button"
              onClick={() => onSizeChange(size)}
              className={`
                px-4 py-3 rounded-lg text-[14px] font-medium
                border-2 transition-all duration-200
                ${
                  isSelected
                    ? 'border-terracotta bg-terracotta/5 text-terracotta'
                    : 'border-charcoal/20 bg-white text-charcoal hover:border-sage hover:bg-sage/5'
                }
              `}
              aria-pressed={isSelected}
            >
              {size}
            </button>
          );
        })}
      </div>

      {/* Error message placeholder */}
      {!selectedSize && (
        <p className="text-[12px] text-charcoal/50 italic">
          Please select a size
        </p>
      )}
    </div>
  );
}
