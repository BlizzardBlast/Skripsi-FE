import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { simulateFetch, simulatedData } from '@/utils/simulate-fetch.tsx';
import wrapAsyncFunction from '@/utils/wrapAsyncFunction.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaEye } from '@react-icons/all-files/fa/FaEye';
import { FaEyeSlash } from '@react-icons/all-files/fa/FaEyeSlash';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'The e-mail has to be filled.' })
    .email('This is not a valid e-mail.'),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long.' })
    .refine((value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value), {
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, and one digit.'
    })
});
export default function SignInForm(): JSX.Element {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const fetchData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await simulateFetch(simulatedData, 1000);
    } catch (error) {
      const err = error as Error;
      throw err;
    } finally {
      setIsLoading(false);
    }
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>): Promise<void> {
    try {
      await fetchData();
      console.log(values);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={wrapAsyncFunction(form.handleSubmit(onSubmit))}
        className='w-5/6 space-y-4 rounded-[3rem] bg-white px-10 py-10 drop-shadow-[3px_3px_3px_#E48F45]'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  className='rounded-3xl border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0'
                  placeholder='Enter your email'
                  {...field}
                  autoComplete='email'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className='rounded-3xl border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0'
                  placeholder='Enter a strong password'
                  type={isPasswordShown ? 'text' : 'password'}
                  {...field}
                  autoComplete='off'
                />
              </FormControl>
              <button
                type='button'
                className='absolute right-14 top-[51%] -translate-y-2/4 cursor-pointer text-primary-text-color hover:text-gray-600'
                onClick={() => {
                  setIsPasswordShown(
                    (prevIsPasswordShown) => !prevIsPasswordShown
                  );
                }}
              >
                {isPasswordShown ? <FaEye /> : <FaEyeSlash />}
              </button>
              <FormMessage />
            </FormItem>
          )}
        />
        <p>
          Don&apos;t have an account?{' '}
          <Link
            to='/sign-up'
            className='text-primary-color underline underline-offset-4'
          >
            Sign Up
          </Link>
        </p>
        <Button
          type='submit'
          className='float-right rounded-full bg-primary-color'
          isLoading={isLoading}
        >
          Sign In
        </Button>
      </form>
    </Form>
  );
}
