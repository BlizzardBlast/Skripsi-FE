import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface Product {
  id: number;
  name: string;
  characteristics: string;
  price: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
}

const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        addToCart: (product, quantity) => {
          set((state) => ({ cart: [...state.cart, { product, quantity }] }));
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
