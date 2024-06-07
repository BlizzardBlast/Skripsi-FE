import { useToast } from '@/components/ui/use-toast.ts';
import AddProductValidationSchema from '@/pages/admin/add-product/add-product-validation-schema';
import AddProduct from '@/services/add-product/add-product';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { type z } from 'zod';

type UseAddProductFormReturnType = {
  isLoading: boolean;
  onSubmit: (
    values: z.infer<typeof AddProductValidationSchema>
  ) => Promise<void>;
  form: ReturnType<typeof useForm<z.infer<typeof AddProductValidationSchema>>>;
};

export default function useAddProductForm(): UseAddProductFormReturnType {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof AddProductValidationSchema>>({
    resolver: zodResolver(AddProductValidationSchema),
    defaultValues: {
      name: '',
      subname: '',
      origin: '',
      type: '',
      description: '',
      price: '',
      acidity: 'low',
      flavor: 'earthy',
      aftertaste: 'complex',
      sweetness: 'faint',
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
    values: z.infer<typeof AddProductValidationSchema>
  ): Promise<void> {
    setIsLoading(true);
    if (abortControllerRef.current != null) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    try {
      await AddProduct({
        values,
        signal: abortControllerRef.current.signal
      });
      toast({
        title: 'Product added successfully!',
        description: 'The product has been added to the database.'
      });
      navigate('/modify-product');
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
