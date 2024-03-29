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
import { PasswordInput } from '@/components/ui/password-input.tsx';
import { useToast } from '@/components/ui/use-toast.ts';
import SignUp from '@/services/sign-up/sign-up.ts';
import wrapAsyncFunction from '@/utils/wrap-async-function';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'The e-mail has to be filled.' })
    .email('This is not a valid e-mail.'),
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long.' })
    .max(20, { message: 'Username must be at most 20 characters long.' }),
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long.' })
    .max(20, { message: 'Name must be at most 20 characters long.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long.' })
    .refine((value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value), {
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, and one digit.'
    })
});

export default function SignUpForm(): JSX.Element {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      username: '',
      name: '',
      password: ''
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>): Promise<void> {
    setIsLoading(true);
    try {
      const signUpData = {
        email: values.email,
        username: values.username,
        name: values.name,
        password: values.password
      };
      await SignUp({ values: signUpData });
      toast({
        title: 'You have signed up!',
        description: 'Sign up is successful! Please sign in.'
      });
      navigate('/');
    } catch (error) {
      const err = error as Error;
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.'
      });
      console.log(err);
      throw err;
    } finally {
      setIsLoading(false);
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
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  className='rounded-3xl border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0'
                  placeholder='Enter your preferred username'
                  {...field}
                  autoComplete='username'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className='rounded-3xl border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0'
                  placeholder='What is your name?'
                  {...field}
                  autoComplete='name'
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
                <PasswordInput
                  className='rounded-3xl border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0'
                  placeholder='Enter a strong password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p>
          Already have an account?{' '}
          <Link
            to='/sign-in'
            className='text-primary-color underline underline-offset-4'
          >
            Sign In
          </Link>
        </p>
        <Button
          type='submit'
          className='float-right rounded-full bg-primary-color'
          isLoading={isLoading}
        >
          Create Account
        </Button>
      </form>
    </Form>
  );
}
