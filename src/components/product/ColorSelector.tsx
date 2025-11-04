import { Check } from 'lucide-react';

interface ColorOption {
  name: string;
  hex: string;
}

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColor: string | null;
  onColorChange: (colorName: string) => void;
}

export default function ColorSelector({
  colors,
  selectedColor,
  onColorChange,
}: ColorSelectorProps) {
  return (
    <div className="space-y-3">
      {/* Label */}
      <label className="text-[16px] font-semibold text-charcoal">
        Select Color {selectedColor && <span className="font-normal text-charcoal/60">- {selectedColor}</span>}
      </label>

      {/* Color Swatches */}
      <div className="flex items-center gap-3 flex-wrap">
        {colors.map((color) => {
          const isSelected = selectedColor === color.name;
          return (
            <button
              key={color.name}
              type="button"
              onClick={() => onColorChange(color.name)}
              className={`
                relative h-12 w-12 rounded-full
                border-2 transition-all duration-200
                ${
                  isSelected
                    ? 'border-terracotta scale-110 shadow-md'
                    : 'border-charcoal/20 hover:border-sage hover:scale-105'
                }
              `}
              style={{ backgroundColor: color.hex }}
              aria-label={`Select ${color.name} color`}
              aria-pressed={isSelected}
              title={color.name}
            >
              {/* Check mark for selected color */}
              {isSelected && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Check
                    className={`h-6 w-6 ${
                      // Use white check for dark colors, charcoal for light colors
                      ['#FFFFFF', '#F5F0E8', '#D4A59A'].includes(color.hex)
                        ? 'text-charcoal'
                        : 'text-white'
                    }`}
                  />
                </div>
              )}

              {/* Ring around selected swatch */}
              {isSelected && (
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: `0 0 0 2px white, 0 0 0 4px #D4A59A`,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Error message placeholder */}
      {!selectedColor && (
        <p className="text-[12px] text-charcoal/50 italic">
          Please select a color
        </p>
      )}
    </div>
  );
}
