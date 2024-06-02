import { useToast } from '@/components/ui/use-toast';
import useUserContext from '@/context/user-context/useUserContext';
import GetAllCart from '@/services/cart/get-all-cart';
import { type GetAllCartReturn } from '@/types/services/cart/get-all-cart';
import { useEffect, useState } from 'react';

export default function useFetchCart(): {
  cart: [] | GetAllCartReturn[];
  isLoading: boolean;
} {
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState<GetAllCartReturn[] | []>([]);
  const { isSignedIn } = useUserContext();
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
            description: 'There was a problem with fetching cart.'
          });
        }
      };

      fetchProductImage().catch(() => {});
    }
  }, [toast, isSignedIn]);

  return { cart, isLoading } as const;
}
