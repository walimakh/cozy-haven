import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({
  title,
  children,
  defaultOpen = false,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-charcoal/10">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left hover:bg-cream/30 transition-colors duration-200 px-2 -mx-2 rounded-lg"
        aria-expanded={isOpen}
      >
        <h3 className="text-[18px] font-semibold text-charcoal">{title}</h3>
        <ChevronDown
          className={`h-5 w-5 text-charcoal/60 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[1000px] opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-[14px] text-charcoal/80 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
