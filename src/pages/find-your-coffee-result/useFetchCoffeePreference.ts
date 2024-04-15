import GetUserPreferences from '@/services/quiz/get-user-preferences.ts';
import { type GetUserPreferencesResponse } from '@/types/services/quiz/get-user-preferences.ts';
import { useEffect, useState } from 'react';

type UseFetchCoffeePreferenceReturnType = {
  isLoading: boolean;
  products: GetUserPreferencesResponse;
};

export default function useFetchCoffeePreference(): UseFetchCoffeePreferenceReturnType {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<GetUserPreferencesResponse>([]);

  useEffect(() => {
    async function fetchCoffeePreference(): Promise<void> {
      setIsLoading(true);
      const result = await GetUserPreferences();
      setProducts(result);
      setIsLoading(false);
    }

    fetchCoffeePreference().catch((error) => {
      console.error(error);
    });
  }, []);

  return { isLoading, products } as const;
}
