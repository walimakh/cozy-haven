import type { Category } from '../types/data';

// Product Categories for Cozy Haven E-commerce

export const categories: Category[] = [
  {
    id: 'cat-001',
    name: 'Sheets',
    slug: 'sheets',
    description:
      'Premium sheet sets in luxurious fabrics including Egyptian cotton, linen, bamboo, and more. Available in all sizes with a variety of colors to match your bedroom style.',
    icon: 'Layers', // Lucide icon name
    productCount: 5,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
  },
  {
    id: 'cat-002',
    name: 'Duvets & Comforters',
    slug: 'duvets-comforters',
    description:
      'Stay cozy with our collection of duvets, duvet covers, and comforters. From lightweight linen to luxurious down, find your perfect layering piece for year-round comfort.',
    icon: 'Wind', // Lucide icon name
    productCount: 4,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600',
  },
  {
    id: 'cat-003',
    name: 'Pillows',
    slug: 'pillows',
    description:
      'Find your perfect pillow match from memory foam to down alternative, adjustable to decorative. Designed to support every sleep position and preference.',
    icon: 'Square', // Lucide icon name
    productCount: 5,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600',
  },
  {
    id: 'cat-004',
    name: 'Mattress Toppers',
    slug: 'mattress-toppers',
    description:
      'Transform your mattress with our premium toppers. Add plush comfort, pressure relief, and cooling technology to enhance your sleep experience.',
    icon: 'Box', // Lucide icon name
    productCount: 2,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600',
  },
  {
    id: 'cat-005',
    name: 'Blankets & Throws',
    slug: 'blankets-throws',
    description:
      'Layer on the coziness with our collection of blankets and throws. From chunky knits to weighted blankets, add warmth and texture to any space.',
    icon: 'Activity', // Lucide icon name (representing texture/waves)
    productCount: 4,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600',
  },
  {
    id: 'cat-006',
    name: 'Curtains & Window',
    slug: 'curtains-window',
    description:
      'Complete your bedroom sanctuary with our curtain collection. Choose from blackout linen to sheer voile for the perfect light control and privacy.',
    icon: 'Maximize2', // Lucide icon name (representing window)
    productCount: 2,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600',
  },
];

// Helper functions
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((category) => category.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((category) => category.slug === slug);
};

export const getAllCategories = (): Category[] => {
  return categories;
};
