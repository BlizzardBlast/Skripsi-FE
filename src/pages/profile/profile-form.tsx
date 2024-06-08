import LadyCoffee from '@/assets/lady_coffee.svg';
import LoadImage from '@/components/load-image/load-image';
import Spinner from '@/components/spinner/spinner';
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
import useProfileFormUtils from '@/pages/profile/useProfileFormUtils';
import wrapAsyncFunction from '@/utils/wrap-async-function';
import { FaRegUser } from '@react-icons/all-files/fa/FaRegUser';

const FORM_INPUT_CLASSNAME =
  'rounded-3xl border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0';

export default function ProfileForm(): JSX.Element {
  const { isLoading, onSubmit, form, isPending } = useProfileFormUtils();

  if (isPending) {
    return (
      <div className='flex flex-col items-center justify-center space-y-2'>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className='mx-20 my-10 flex-[0.75]'>
        <h1 className='mb-4 scroll-m-20 text-center text-5xl font-bold tracking-tight md:text-left'>
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
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        className={FORM_INPUT_CLASSNAME}
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
                        className={FORM_INPUT_CLASSNAME}
                        placeholder='What is your name?'
                        {...field}
                        autoComplete='name'
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
    </>
  );
}
