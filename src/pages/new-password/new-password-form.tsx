import Paragraph from '@/components/typography/paragraph';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { PasswordInput } from '@/components/ui/password-input';
import useNewPassword from '@/pages/new-password/useNewPassword';
import wrapAsyncFunction from '@/utils/wrap-async-function';

export default function NewPasswordForm(): JSX.Element {
  const { isLoading, onSubmit, form } = useNewPassword();
  return (
    <div className='mx-20 my-10 flex-[0.75]'>
      <h1 className='mb-4 scroll-m-20 text-center text-5xl font-bold tracking-tight md:text-left'>
        Change Password
      </h1>
      <Paragraph className='mb-3 text-xl'>Please enter new password</Paragraph>
      <div className='flex flex-col space-y-4 rounded-[3rem] bg-white p-5 drop-shadow-[3px_3px_3px_#E48F45] md:p-10'>
        <Form {...form}>
          <form
            onSubmit={wrapAsyncFunction(form.handleSubmit(onSubmit))}
            className='w-2/3 space-y-6'
          >
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder='Enter a strong password'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Enter a new password</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='confirm_password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm New Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder='Enter a strong password'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Must be the same as New Password field
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' isLoading={isLoading}>
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
