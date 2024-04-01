/* eslint-disable security/detect-object-injection */
import { type Product } from '@/types/services/shop/shop.ts';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  changeProductQuantity: (index: number, quantity: number) => void;
  removeProduct: (index: number) => void;
}

const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        addToCart: (product, quantity) => {
          set((state) => ({ cart: [...state.cart, { product, quantity }] }));
        },
        changeProductQuantity: (index, quantity) => {
          set((state) => {
            const updatedCart = [...state.cart];
            updatedCart[index].quantity = quantity;
            return { cart: updatedCart };
          });
        },
        removeProduct: (index) => {
          set((state) => {
            const updatedCart = [...state.cart];
            updatedCart.splice(index, 1);
            return { cart: updatedCart };
          });
        }
      }),
      {
        name: 'cartStore',
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
);

export default useCartStore;
