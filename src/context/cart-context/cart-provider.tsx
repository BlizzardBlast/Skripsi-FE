import { useToast } from '@/components/ui/use-toast';
import GetAllCart from '@/services/cart/get-all-cart';
import { type GetAllCartReturn } from '@/types/services/cart/get-all-cart';
import useSignedIn from '@/zustand/useSignedIn';
import React, {
  createContext,
  useEffect,
  useState,
  type ReactNode
} from 'react';

export type CartContextType = {
  cart: [] | GetAllCartReturn[];
  isLoading: boolean;
  refetchCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState<GetAllCartReturn[] | []>([]);
  const [isRefetching, setIsRefetching] = useState(false);
  const isSignedIn = useSignedIn((state) => state.isSignedIn);
  const { toast } = useToast();

  const refetchCart = (): void => {
    setIsRefetching(true);
  };

  useEffect(() => {
    if (isSignedIn || isRefetching) {
      const fetchProductImage = async (): Promise<void> => {
        setIsLoading(true);
        try {
          const result = await GetAllCart();
          setCart(result);
          setIsLoading(false);
          setIsRefetching(false);
        } catch (error) {
          setIsLoading(false);
          setIsRefetching(false);
          const err = error as Error;
          if (err.name === 'CanceledError') {
            return;
          }
          console.error(err);
          toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with fetching the product image.'
          });
        }
      };

      fetchProductImage().catch(() => {});
    }
  }, [toast, isSignedIn, isRefetching]);

  return (
    <CartContext.Provider value={{ cart, isLoading, refetchCart }}>
      {children}
    </CartContext.Provider>
  );
};
