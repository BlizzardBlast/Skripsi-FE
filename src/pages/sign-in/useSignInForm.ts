import { useToast } from '@/components/ui/use-toast.ts';
import useUserContext from '@/context/user-context/useUserContext';
import SignInValidationSchema from '@/pages/sign-in/sign-in-validation-schema';
import Login from '@/services/login/login-service.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { type z } from 'zod';

type UseSignInFormReturnType = {
  isLoading: boolean;
  onSubmit: (values: z.infer<typeof SignInValidationSchema>) => Promise<void>;
  form: ReturnType<typeof useForm<z.infer<typeof SignInValidationSchema>>>;
};

export default function useSignInForm(): UseSignInFormReturnType {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const { toast } = useToast();
  const { signIn } = useUserContext();
  const form = useForm<z.infer<typeof SignInValidationSchema>>({
    resolver: zodResolver(SignInValidationSchema),
    defaultValues: {
      email: '',
      password: ''
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
    values: z.infer<typeof SignInValidationSchema>
  ): Promise<void> {
    setIsLoading(true);
    if (abortControllerRef.current != null) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    try {
      const loginData = {
        email: values.email,
        password: values.password
      };
      await Login({
        values: loginData,
        signIn,
        signal: abortControllerRef.current.signal
      });
      toast({
        title: 'You have signed in!',
        description: 'Sign in is successful.'
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
        description: err.message ?? 'Error occurred while signing in.'
      });
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, onSubmit, form } as const;
}
