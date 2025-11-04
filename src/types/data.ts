// Mock Data TypeScript Interfaces for Cozy Haven E-commerce

// ======================
// Product Types
// ======================

export type BedSize = 'Twin' | 'Twin XL' | 'Full' | 'Queen' | 'King' | 'California King';

export type ProductColor = 'White' | 'Ivory' | 'Sage' | 'Stone Gray' | 'Terracotta' | 'Charcoal' | 'Navy' | 'Blush';

export type ProductCategory = 'Sheets' | 'Duvets' | 'Pillows' | 'Toppers' | 'Blankets' | 'Curtains';

export type MaterialType = 'Egyptian Cotton' | 'Linen' | 'Bamboo' | 'Silk' | 'Microfiber' | 'Cotton Blend';

export interface ProductSpecifications {
  material: MaterialType;
  threadCount?: number;
  weaveType?: string;
  weight?: string;
  fillPower?: number; // For duvets/pillows
  dimensions?: string;
  careInstructions: string[];
  whatsIncluded: string[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number; // For sale items
  images: string[];
  description: string;
  shortDescription: string;
  specifications: ProductSpecifications;
  availableSizes: BedSize[];
  availableColors: ProductColor[];
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestseller?: boolean;
  isSustainable?: boolean;
  relatedProductIds: string[];
  collectionId?: string;
}

// ======================
// Collection Types
// ======================

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  featuredProductIds: string[];
  backgroundColor?: string;
  textColor?: string;
}

// ======================
// Category Types
// ======================

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string; // Icon name from Lucide
  productCount: number;
  image: string;
}

// ======================
// Review Types
// ======================

export interface Review {
  id: string;
  productId: string;
  reviewerName: string;
  rating: number; // 1-5
  title: string;
  comment: string;
  date: string; // ISO date string
  isVerifiedPurchase: boolean;
  helpfulCount: number;
  size?: BedSize;
  color?: ProductColor;
}

// ======================
// Material Education Types
// ======================

export interface MaterialBenefit {
  title: string;
  description: string;
  icon: string; // Icon name from Lucide
}

export interface Material {
  id: string;
  name: MaterialType;
  slug: string;
  description: string;
  benefits: MaterialBenefit[];
  careInstructions: string[];
  sustainability?: string;
  textureImage: string;
  heroImage: string;
}

// ======================
// Cart Types
// ======================

export interface CartItem {
  productId: string;
  size: BedSize;
  color: ProductColor;
  quantity: number;
  addedAt: string; // ISO date string
}

// ======================
// Wishlist Types
// ======================

export interface WishlistItem {
  productId: string;
  addedAt: string; // ISO date string
}

// ======================
// Order Types (for future use)
// ======================

export interface OrderItem {
  productId: string;
  productName: string;
  size: BedSize;
  color: ProductColor;
  quantity: number;
  priceAtPurchase: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  deliveredAt?: string;
}

// ======================
// Helper Types
// ======================

export interface RatingBreakdown {
  5: number;
  4: number;
  3: number;
  2: number;
  1: number;
}

export interface FilterOptions {
  categories: ProductCategory[];
  materials: MaterialType[];
  colors: ProductColor[];
  sizes: BedSize[];
  priceRange: {
    min: number;
    max: number;
  };
}
