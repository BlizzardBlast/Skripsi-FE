import LoadImage from '@/components/load-image/load-image';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import useFileHandler from '@/pages/admin/add-product/useFileHandler';
import useEditProductForm from '@/pages/admin/edit-product/useEditProductForm';
import { useFetchProductImage } from '@/pages/product/useFetchProductImage';
import wrapAsyncFunction from '@/utils/wrap-async-function';
import { useEffect, type ReactNode } from 'react';
import { useParams } from 'react-router-dom';

const FORM_INPUT_CLASSNAME =
  'rounded-3xl border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0';

export default function EditProductForm(): ReactNode {
  const { isLoading, onSubmit, form } = useEditProductForm();
  const { id } = useParams();
  const productImage = useFetchProductImage({ id: id ?? '' });
  const { handleChange, loading, image } = useFileHandler();
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const finalImage = image || productImage;

  useEffect(() => {
    if (finalImage === '' || finalImage === 'errorImage') {
      const placeholderFile = new File(['content'], 'placeholder.png', {
        type: 'image/png'
      });
      form.setValue('image', placeholderFile, {
        shouldValidate: true
      });
    }
  }, [finalImage, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={wrapAsyncFunction(form.handleSubmit(onSubmit))}
        className='my-5 w-5/6 rounded-[3rem] bg-white px-10 py-10 drop-shadow-[3px_3px_3px_#E48F45]'
      >
        <div className='flex justify-center gap-5'>
          <div className='w-full space-y-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className={FORM_INPUT_CLASSNAME}
                      placeholder='Enter product name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='subname'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subname</FormLabel>
                  <FormControl>
                    <Input
                      className={FORM_INPUT_CLASSNAME}
                      placeholder='Enter product subname'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='price'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      className={FORM_INPUT_CLASSNAME}
                      placeholder='Enter product price'
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
              name='origin'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Origin</FormLabel>
                  <FormControl>
                    <Input
                      className={FORM_INPUT_CLASSNAME}
                      placeholder='Enter product origin'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='type'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className={FORM_INPUT_CLASSNAME}>
                        <SelectValue placeholder='Select a coffee bean type' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='Robusta'>Robusta</SelectItem>
                      <SelectItem value='Arabica'>Arabica</SelectItem>
                      <SelectItem value='Bourbon'>Bourbon</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Enter product description'
                      className={cn(FORM_INPUT_CLASSNAME, 'resize-none')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='image'
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input
                      {...fieldProps}
                      className={cn(FORM_INPUT_CLASSNAME, 'cursor-pointer')}
                      placeholder='Enter product subname'
                      type='file'
                      accept='image/*'
                      multiple={false}
                      onChange={wrapAsyncFunction(async (event) => {
                        onChange(event?.target?.files?.[0]);
                        await handleChange(event);
                      })}
                      capture={undefined}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <LoadImage
              classes='w-52 h-52 mb-2 rounded-xl'
              source={finalImage}
              isLoading={loading}
              alternative={'Image'}
            />
          </div>
          <div className='w-full space-y-4'>
            <FormField
              control={form.control}
              name='acidity'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Acidity</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-row space-x-5'
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='low' />
                        </FormControl>
                        <FormLabel className='font-normal'>Low</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='medium' />
                        </FormControl>
                        <FormLabel className='font-normal'>Medium</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='high' />
                        </FormControl>
                        <FormLabel className='font-normal'>High</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='flavor'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Flavor</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-row space-x-5'
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='earthy' />
                        </FormControl>
                        <FormLabel className='font-normal'>Earthy</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='chocolate' />
                        </FormControl>
                        <FormLabel className='font-normal'>Chocolate</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='fruit' />
                        </FormControl>
                        <FormLabel className='font-normal'>Fruit</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='nutty' />
                        </FormControl>
                        <FormLabel className='font-normal'>Nutty</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='aftertaste'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Aftertaste</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-row space-x-5'
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='complex' />
                        </FormControl>
                        <FormLabel className='font-normal'>Complex</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='lingering' />
                        </FormControl>
                        <FormLabel className='font-normal'>Lingering</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='short' />
                        </FormControl>
                        <FormLabel className='font-normal'>Short</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='sweetness'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sweetness</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-row space-x-5'
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='faint' />
                        </FormControl>
                        <FormLabel className='font-normal'>Faint</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='noticeable' />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          Noticeable
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='rich' />
                        </FormControl>
                        <FormLabel className='font-normal'>Rich</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className='mt-2 flex w-full justify-end'>
          <Button
            type='submit'
            className='rounded-full bg-primary-color'
            isLoading={isLoading}
          >
            Update Product
          </Button>
        </div>
      </form>
    </Form>
  );
}
