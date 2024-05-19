import { useToast } from '@/components/ui/use-toast.ts';
import { GetRefreshedUserPreferences } from '@/services/quiz/get-user-preferences';
import { type GetUserPreferencesResponse } from '@/types/services/quiz/get-user-preferences.ts';
import { useEffect, useState } from 'react';

type UseFetchCoffeePreferenceReturnType = {
  isLoading: boolean;
  products: GetUserPreferencesResponse;
};

export default function useFetchCoffeePreference(): UseFetchCoffeePreferenceReturnType {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<GetUserPreferencesResponse>([]);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchCoffeePreference(): Promise<void> {
      setIsLoading(true);
      const result = await GetRefreshedUserPreferences();
      if (Object.keys(result).length <= 0) {
        setProducts([]);
      } else setProducts(result);
      setIsLoading(false);
    }

    fetchCoffeePreference().catch((error) => {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.'
      });
      console.error(error);
      setIsLoading(false);
    });
  }, [toast]);

  return { isLoading, products } as const;
}
