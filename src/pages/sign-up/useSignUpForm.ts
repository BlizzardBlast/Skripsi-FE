import { useToast } from '@/components/ui/use-toast.ts';
import SignUpValidationSchema from '@/pages/sign-up/sign-up-validation-schema';
import SignUp from '@/services/sign-up/sign-up.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { type z } from 'zod';

type UseSignUpFormReturnType = {
  isLoading: boolean;
  onSubmit: (values: z.infer<typeof SignUpValidationSchema>) => Promise<void>;
  form: ReturnType<typeof useForm<z.infer<typeof SignUpValidationSchema>>>;
};

export default function useSignUpForm(): UseSignUpFormReturnType {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof SignUpValidationSchema>>({
    resolver: zodResolver(SignUpValidationSchema),
    defaultValues: {
      email: '',
      username: '',
      name: '',
      password: ''
    }
  });

  async function onSubmit(
    values: z.infer<typeof SignUpValidationSchema>
  ): Promise<void> {
    setIsLoading(true);
    if (abortControllerRef.current != null) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    try {
      const signUpData = {
        email: values.email,
        username: values.username,
        name: values.name,
        password: values.password
      };
      await SignUp({
        values: signUpData,
        signal: abortControllerRef.current.signal
      });
      toast({
        title: 'You have signed up!',
        description: 'Sign up is successful! Please sign in.'
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

  useEffect(() => {
    return () => {
      if (abortControllerRef.current != null) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return { isLoading, onSubmit, form } as const;
}
