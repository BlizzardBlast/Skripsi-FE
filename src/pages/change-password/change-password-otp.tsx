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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from '@/components/ui/input-otp';
import useChangePasswordOtp from '@/pages/change-password/useChangePasswordOtp';
import wrapAsyncFunction from '@/utils/wrap-async-function';

export default function ChangePasswordOtp(): JSX.Element {
  const { form, onSubmit } = useChangePasswordOtp();
  return (
    <div className='mx-20 my-10 flex-[0.75]'>
      <h1 className='mb-4 scroll-m-20 text-center text-5xl font-bold tracking-tight md:text-left'>
        Change Password
      </h1>
      <Paragraph className='mb-3 text-xl'>
        OTP has been sent to your email. Please check your email and input the
        OTP below.
      </Paragraph>
      <div className='flex flex-col space-y-4 rounded-[3rem] bg-white p-5 drop-shadow-[3px_3px_3px_#E48F45] md:p-10'>
        <Form {...form}>
          <form
            onSubmit={wrapAsyncFunction(form.handleSubmit(onSubmit))}
            className='w-2/3 space-y-6'
          >
            <FormField
              control={form.control}
              name='pin'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OTP</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormDescription>
                    Please enter the OTP sent to your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
