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
import useSignInForm from '@/pages/sign-in/useSignInForm';
import wrapAsyncFunction from '@/utils/wrap-async-function';
import { Link } from 'react-router-dom';

const FORM_INPUT_CLASSNAME =
  'rounded-3xl border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0';

export default function SignInForm(): JSX.Element {
  const { isLoading, onSubmit, form } = useSignInForm();

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
                  className={FORM_INPUT_CLASSNAME}
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
                <PasswordInput
                  className={FORM_INPUT_CLASSNAME}
                  placeholder='Enter a strong password'
                  {...field}
                />
              </FormControl>
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
