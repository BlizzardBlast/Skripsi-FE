import { useToast } from '@/components/ui/use-toast';
import GetAllCart from '@/services/cart/get-all-cart';
import { type GetAllCartReturn } from '@/types/services/cart/get-all-cart';
import useSignedIn from '@/zustand/useSignedIn';
import { useEffect, useState } from 'react';

export default function useFetchCart(): {
  cart: [] | GetAllCartReturn[];
  isLoading: boolean;
} {
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState<GetAllCartReturn[] | []>([]);
  const isSignedIn = useSignedIn((state) => state.isSignedIn);
  const { toast } = useToast();

  useEffect(() => {
    if (isSignedIn) {
      const fetchProductImage = async (): Promise<void> => {
        setIsLoading(true);
        try {
          const result = await GetAllCart();
          setCart(result);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
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
  }, [toast, isSignedIn]);

  return { cart, isLoading } as const;
}
