import { useState, useEffect, useRef } from 'react';
import GetProductImage from '@/services/get-product-image/get-product-image.ts';
import { useToast } from '@/components/ui/use-toast';

type UseFetchProductImageProps = {
  id: string;
};

export const useFetchProductImage = ({
  id
}: UseFetchProductImageProps): string => {
  const [productImage, setProductImage] = useState<string>('errorImage');
  const abortControllerRef = useRef<AbortController | null>(null);

  const { toast } = useToast();

  useEffect(() => {
    const fetchProductImage = async (): Promise<void> => {
      if (abortControllerRef.current != null) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();
      try {
        const result = await GetProductImage({
          id,
          signal: abortControllerRef.current.signal
        });
        setProductImage(result);
      } catch (error) {
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
  }, [id, toast]);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current != null) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return productImage;
};
