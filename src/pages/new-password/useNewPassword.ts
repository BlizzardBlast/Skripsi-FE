import { useToast } from '@/components/ui/use-toast.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const newPasswordValidationSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long.' })
      .refine((value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value), {
        message:
          'Password must contain at least one lowercase letter, one uppercase letter, and one digit.'
      }),
    confirm_password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long.' })
      .refine((value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value), {
        message:
          'Password must contain at least one lowercase letter, one uppercase letter, and one digit.'
      })
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Password and confirm password must match',
    path: ['confirm_password']
  });

type UseNewPasswordReturnType = {
  isLoading: boolean;
  onSubmit: (
    values: z.infer<typeof newPasswordValidationSchema>
  ) => Promise<void>;
  form: ReturnType<typeof useForm<z.infer<typeof newPasswordValidationSchema>>>;
};

export default function useNewPassword(): UseNewPasswordReturnType {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof newPasswordValidationSchema>>({
    resolver: zodResolver(newPasswordValidationSchema),
    defaultValues: {
      password: '',
      confirm_password: ''
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
    values: z.infer<typeof newPasswordValidationSchema>
  ): Promise<void> {
    setIsLoading(true);
    if (abortControllerRef.current != null) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    try {
      const passwordData = {
        password: values.password,
        confirm_password: values.confirm_password
      };
      console.log(passwordData);
      //   await ChangePassword({
      //     values: passwordData,
      //     signal: abortControllerRef.current.signal
      //   });
      toast({
        title: 'Password changed!',
        description: 'You have successfully changed your password.'
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
        description: err.message ?? 'Error occurred while changing password.'
      });
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, onSubmit, form } as const;
}
