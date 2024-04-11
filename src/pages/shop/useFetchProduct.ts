import { useToast } from '@/components/ui/use-toast.ts';
import FetchProductFunction from '@/pages/shop/FetchProductFunction.ts';
import { type GetProductResponse } from '@/types/services/shop/shop.ts';
import { useEffect, useRef, useState } from 'react';

type UseFetchProductReturnType = {
  isLoading: boolean;
  products: GetProductResponse;
};

export default function useFetchProduct({
  selectedTag
}: {
  selectedTag: string;
}): Readonly<UseFetchProductReturnType> {
  const abortControllerRef = useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<GetProductResponse>([
    {
      id: 0,
      name: '',
      type: '',
      price: 0,
      description: '',
      created_at: '',
      updated_at: ''
    }
  ]);
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

    const fetchProduct = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const result = await FetchProductFunction({ selectedTag, signal });
        setProducts(result);
        setIsLoading(false);
      } catch (error) {
        const err = error as Error;
        if (err.name === 'CanceledError') {
          return;
        }
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'Product could not be fetched.'
        });
        setIsLoading(false);
      }
    };

    fetchProduct().catch(() => {});

    return () => {
      // Abort the request when the component is unmounted or before a new request is made
      if (abortControllerRef.current != null) {
        abortControllerRef.current.abort();
      }
    };
  }, [selectedTag, toast]);

  return { isLoading, products } as const;
}
