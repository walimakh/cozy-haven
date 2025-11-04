import { createContext, useContext, useState, useEffect, type ReactNode, type FC } from 'react';
import type { Product } from '../types/data';

// Cart item type
export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

// Cart context type
interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addToCart: (product: Product, quantity: number, size: string, color: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart provider props
interface CartProviderProps {
  children: ReactNode;
}

// Local storage key
const CART_STORAGE_KEY = 'cozy-haven-cart';

// Cart provider component
export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setItems(parsedCart);
      } catch (error) {
        console.error('Failed to load cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  // Calculate item count
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Add item to cart
  const addToCart = (product: Product, quantity: number, size: string, color: string) => {
    setItems((currentItems) => {
      // Check if item already exists with same product, size, and color
      const existingItemIndex = currentItems.findIndex(
        (item) =>
          item.product.id === product.id && item.selectedSize === size && item.selectedColor === color
      );

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        };
        return updatedItems;
      } else {
        // Add new item
        return [
          ...currentItems,
          {
            product,
            quantity,
            selectedSize: size,
            selectedColor: color,
          },
        ];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setItems([]);
  };

  const value: CartContextType = {
    items,
    itemCount,
    subtotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
