import { useToast } from '@/components/ui/use-toast.ts';
import GetAllPromo from '@/services/promo/get-all-promo';
import { type Promo } from '@/types/services/promo/promo';
import { useEffect, useRef, useState } from 'react';

type UseFetchPromoReturnType = {
  isLoading: boolean;
  promo: Promo[];
};

export default function useFetchPromo(): Readonly<UseFetchPromoReturnType> {
  const abortControllerRef = useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [promo, setPromo] = useState<Promo[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Abort the previous request if there is one
    if (abortControllerRef.current != null) {
      abortControllerRef.current.abort();
    }

    // Create a new AbortController for the new request
    abortControllerRef.current = new AbortController();
    const signal =
      abortControllerRef.current !== null
        ? abortControllerRef.current.signal
        : null;

    const fetchPromo = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const result = await GetAllPromo({ signal });
        setPromo(result);
        setIsLoading(false);
      } catch (error) {
        const err = error as Error;
        if (err.name === 'CanceledError') {
          return;
        }
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'Promo could not be fetched.'
        });
        setIsLoading(false);
      }
    };

    fetchPromo().catch(() => {});

    return () => {
      // Abort the request when the component is unmounted or before a new request is made
      if (abortControllerRef.current != null) {
        abortControllerRef.current.abort();
      }
    };
  }, [toast]);

  return { isLoading, promo } as const;
}
