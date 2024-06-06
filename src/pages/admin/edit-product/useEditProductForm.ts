import { useToast } from '@/components/ui/use-toast.ts';
import EditProductValidationSchema from '@/pages/admin/edit-product/edit-product-validation-schema';
import EditProduct from '@/services/edit-product/edit-product';
import { type LocationProps } from '@/types/location';
import { type Product } from '@/types/services/shop/shop';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { type z } from 'zod';

type UseEditProductFormReturnType = {
  isLoading: boolean;
  onSubmit: (
    values: z.infer<typeof EditProductValidationSchema>
  ) => Promise<void>;
  form: ReturnType<typeof useForm<z.infer<typeof EditProductValidationSchema>>>;
};

export default function useEditProductForm(): UseEditProductFormReturnType {
  const navigate = useNavigate();
  const location: LocationProps & {
    state: {
      product: Product;
    };
  } = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const { toast } = useToast();
  const { id } = useParams();

  const form = useForm<z.infer<typeof EditProductValidationSchema>>({
    resolver: zodResolver(EditProductValidationSchema),
    defaultValues: {
      ...(location.state?.product ?? {}),
      price: String(location.state?.product?.price ?? 0),
      image: undefined
    }
  });

  useEffect(() => {
    return () => {
      if (abortControllerRef.current != null) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  async function onSubmit(
    values: z.infer<typeof EditProductValidationSchema>
  ): Promise<void> {
    setIsLoading(true);
    if (abortControllerRef.current != null) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    try {
      await EditProduct({
        values,
        id: id ?? '',
        signal: abortControllerRef.current.signal
      });
      toast({
        title: 'Product updated!',
        description: 'Product has been updated successfully.'
      });
      navigate('/');
    } catch (error) {
      const err = error as Error;
      if (err.name === 'CanceledError') {
        return;
      }
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.'
      });
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, onSubmit, form } as const;
}
