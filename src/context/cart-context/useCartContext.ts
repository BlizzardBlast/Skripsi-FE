import { useContext } from 'react';
import { CartContext, type CartContextType } from './cart-provider';

export function useCartContext(): CartContextType {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
}
