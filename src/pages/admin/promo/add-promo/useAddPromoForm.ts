import { useToast } from '@/components/ui/use-toast.ts';
import AddPromoValidationSchema from '@/pages/admin/promo/add-promo/add-promo-validation-schema';
import AddPromo from '@/services/promo/add-promo';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { type z } from 'zod';

type UseAddPromoFormReturnType = {
  isLoading: boolean;
  onSubmit: (values: z.infer<typeof AddPromoValidationSchema>) => Promise<void>;
  form: ReturnType<typeof useForm<z.infer<typeof AddPromoValidationSchema>>>;
};

export default function useAddPromoForm(): UseAddPromoFormReturnType {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof AddPromoValidationSchema>>({
    resolver: zodResolver(AddPromoValidationSchema),
    defaultValues: {
      promo_code: '',
      promo_expiry_date: '' as unknown as Date,
      discount: '',
      minimum: '',
      maximum: ''
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
    values: z.infer<typeof AddPromoValidationSchema>
  ): Promise<void> {
    setIsLoading(true);
    if (abortControllerRef.current != null) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    try {
      await AddPromo({
        values,
        signal: abortControllerRef.current.signal
      });
      toast({
        title: 'Promo added successfully!',
        description: 'The promo has been added to the database.'
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
