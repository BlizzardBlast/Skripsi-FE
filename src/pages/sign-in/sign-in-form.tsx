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
import { Input } from '@/components/ui/input';
import wrapAsyncFunction from '@/utils/wrapAsyncFunction.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'The e-mail has to be filled.' })
    .email('This is not a valid e-mail.')
});
export default function SignInForm(): JSX.Element {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ''
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>): void {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={wrapAsyncFunction(form.handleSubmit(onSubmit))}
        className='w-5/6 space-y-8 rounded-[3rem] bg-white px-6 py-6 drop-shadow-[3px_3px_3px_#E48F45]'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' {...field} />
              </FormControl>
              <FormDescription>
                Make sure you enter a valid e-mail.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
