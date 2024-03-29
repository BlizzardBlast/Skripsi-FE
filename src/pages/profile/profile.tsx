import LadyCoffee from '@/assets/lady_coffee.svg';
import useUserData from '@/components/header/useUserData.ts';
import LoadImage from '@/components/load-image/load-image';
import MetaTag from '@/components/meta-tag/meta-tag';
import { Button } from '@/components/ui/button.tsx';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input.tsx';
import { useToast } from '@/components/ui/use-toast.ts';
import UpdateProfile from '@/services/profile/update-profile.ts';
import wrapAsyncFunction from '@/utils/wrap-async-function';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaRegUser } from '@react-icons/all-files/fa/FaRegUser';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
  // password: z
  //   .string()
  //   .min(8, { message: 'Password must be at least 8 characters long.' })
  //   .refine((value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value), {
  //     message:
  //       'Password must contain at least one lowercase letter, one uppercase letter, and one digit.'
  //   }),
  preferences: z.string().optional()
});

export default function ProfilePage(): JSX.Element {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const user = useUserData();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      email: user?.email ?? '',
      username: user?.username ?? '',
      name: 'Hmmm',
      // password: '*********',
      preferences: user?.preferences ?? ''
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>): Promise<void> {
    setIsLoading(true);
    try {
      const profileData = {
        new_email: values.email,
        new_username: values.username,
        new_name: values.name
        // password: values.password,
        // preferences: values.preferences
      };
      await UpdateProfile({ values: profileData, id: user?.id as number });
      toast({
        title: 'You updated your profile!',
        description: 'Profile Data has been updated.'
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
    <div className='flex min-h-[80vh] flex-col flex-wrap items-center justify-center py-5 md:flex-row'>
      <MetaTag
        title='Kofebin | Profile'
        description='Look at your profile in Kofebin'
      />
      <div className='mx-20 my-10 flex-[0.75]'>
        <h1 className='mb-4 scroll-m-20 text-5xl font-bold tracking-tight'>
          Profile
        </h1>
        <div className='flex flex-col-reverse items-center space-y-4 rounded-[3rem] bg-white p-5 drop-shadow-[3px_3px_3px_#E48F45] sm:flex-row md:p-10'>
          <Form {...form}>
            <form
              onSubmit={wrapAsyncFunction(form.handleSubmit(onSubmit))}
              className='w-full md:w-1/2'
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
              {/* <FormField
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
              /> */}
              <FormField
                control={form.control}
                name='preferences'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preference</FormLabel>
                    <FormControl>
                      <Input
                        className='rounded-3xl border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0'
                        placeholder='What is your preference?'
                        {...field}
                        autoComplete='preferences'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                className='float-right mt-3 rounded-full bg-primary-color'
                isLoading={isLoading}
              >
                Change Account
              </Button>
            </form>
          </Form>
          <div className='flex w-full items-center justify-center md:w-1/2'>
            <FaRegUser className='h-40 w-40' />
          </div>
        </div>
      </div>
      <LoadImage
        source={LadyCoffee}
        alternative='lady with coffee'
        classes='w-[25vw] h-[21.46824vw]'
        divClasses='flex flex-[0.25] items-center justify-center px-5'
      />
    </div>
  );
}
