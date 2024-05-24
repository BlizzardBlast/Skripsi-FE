/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import useAddPromoForm from '@/pages/admin/promo/add-promo/useAddPromoForm';
import wrapAsyncFunction from '@/utils/wrap-async-function';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { type ReactNode } from 'react';

const FORM_INPUT_CLASSNAME =
  'rounded-3xl border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0';

export default function AddPromoForm(): ReactNode {
  const { isLoading, onSubmit, form } = useAddPromoForm();

  return (
    <Form {...form}>
      <form
        onSubmit={wrapAsyncFunction(form.handleSubmit(onSubmit))}
        className='my-5 w-5/6 space-y-4 rounded-[3rem] bg-white px-10 py-10 drop-shadow-[3px_3px_3px_#E48F45]'
      >
        <FormField
          control={form.control}
          name='promo_code'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Promo Code</FormLabel>
              <FormControl>
                <Input
                  className={FORM_INPUT_CLASSNAME}
                  placeholder='Enter promo code'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='promo_expiry_date'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Promo Expiry Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl className={cn(FORM_INPUT_CLASSNAME)}>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={new Date(field.value)}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date > new Date('3000-01-01')
                    }
                    initialFocus
                    showOutsideDays
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='discount'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Discount</FormLabel>
              <FormControl>
                <Input
                  className={FORM_INPUT_CLASSNAME}
                  placeholder='Enter discount'
                  inputMode='numeric'
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '' || !isNaN(Number(value))) {
                      field.onChange(e);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='minimum'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Minimum bought</FormLabel>
              <FormControl>
                <Input
                  className={FORM_INPUT_CLASSNAME}
                  placeholder='Enter minimum'
                  inputMode='numeric'
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '' || !isNaN(Number(value))) {
                      field.onChange(e);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='maximum'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum discount in Rupiah</FormLabel>
              <FormControl>
                <Input
                  className={FORM_INPUT_CLASSNAME}
                  placeholder='Enter maximum discount'
                  inputMode='numeric'
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '' || !isNaN(Number(value))) {
                      field.onChange(e);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='max_use'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum Usage</FormLabel>
              <FormControl>
                <Input
                  className={FORM_INPUT_CLASSNAME}
                  placeholder='Enter maximum usage for this promo'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='max_use_per_user'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum Usage Per User</FormLabel>
              <FormControl>
                <Input
                  className={FORM_INPUT_CLASSNAME}
                  placeholder='Enter maximum usage of this promo for each user'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex justify-end'>
          <Button
            type='submit'
            className='rounded-full bg-primary-color'
            isLoading={isLoading}
          >
            Add Promo
          </Button>
        </div>
      </form>
    </Form>
  );
}
