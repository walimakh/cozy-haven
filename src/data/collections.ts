import type { Collection } from '../types/data';

// Featured Collections for Cozy Haven E-commerce

export const collections: Collection[] = [
  {
    id: 'linen-luxe',
    name: 'Linen Luxe',
    slug: 'linen-luxe',
    description:
      'Experience the timeless elegance of our premium European linen collection. Each piece is stonewashed for exceptional softness from day one, featuring the natural texture and breathability that linen is celebrated for. Perfect for those who appreciate sustainable luxury and effortless style.',
    shortDescription: 'Premium European linen with timeless elegance',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200',
    featuredProductIds: [
      'sheet-002', // Linen Relaxed Sheet Set
      'duvet-002', // Lightweight Linen Duvet Cover
      'pillow-004', // European Square Decorative Pillow
      'blanket-002', // Lightweight Linen Throw
      'curtain-001', // Blackout Linen Curtains
    ],
    backgroundColor: '#A8B5A0', // Sage green
    textColor: '#FFFFFF',
  },
  {
    id: 'cloud-cotton',
    name: 'Cloud Cotton',
    slug: 'cloud-cotton',
    description:
      'Sink into the ultimate comfort of our Cloud Cotton collection, featuring premium Egyptian cotton with exceptional thread counts. Silky sateen finishes and breathable percale weaves offer hotel-quality luxury for your everyday sleep sanctuary. Designed for those who value both quality and comfort.',
    shortDescription: 'Ultra-soft Egyptian cotton for cloud-like comfort',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200',
    featuredProductIds: [
      'sheet-001', // Egyptian Cotton Sateen Sheet Set
      'duvet-001', // All-Season Down Alternative Duvet
      'pillow-001', // Memory Foam Contour Pillow
      'sheet-004', // Percale Crisp Sheet Set
      'sheet-005', // Jersey Knit Sheet Set
    ],
    backgroundColor: '#D4A59A', // Soft terracotta
    textColor: '#FFFFFF',
  },
  {
    id: 'seasonal',
    name: 'Seasonal Favorites',
    slug: 'seasonal-favorites',
    description:
      'Discover our curated selection of seasonal must-haves, featuring cozy textures and warming layers perfect for creating your ideal sleep environment. From chunky knit throws to weighted blankets, this collection brings comfort and style together beautifully.',
    shortDescription: 'Curated seasonal essentials for cozy comfort',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1200',
    featuredProductIds: [
      'blanket-001', // Chunky Knit Throw Blanket
      'blanket-003', // Weighted Blanket
      'blanket-004', // Cotton Cable Knit Blanket
      'duvet-004', // Waffle Weave Duvet Cover
      'pillow-005', // Silk Pillowcase Set
    ],
    backgroundColor: '#4A4543', // Warm charcoal
    textColor: '#FFFFFF',
  },
];

// Helper functions
export const getCollectionById = (id: string): Collection | undefined => {
  return collections.find((collection) => collection.id === id);
};

export const getCollectionBySlug = (slug: string): Collection | undefined => {
  return collections.find((collection) => collection.slug === slug);
};
