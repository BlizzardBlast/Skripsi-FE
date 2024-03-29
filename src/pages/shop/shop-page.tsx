/* eslint-disable security/detect-object-injection */
import LoadImage from '@/components/load-image/load-image';
import MetaTag from '@/components/meta-tag/meta-tag';
import Spinner from '@/components/spinner/spinner.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useToast } from '@/components/ui/use-toast.ts';
import useSelectableTag from '@/pages/shop/useSelectableTag.tsx';
import FilterByBean from '@/services/filter-by-bean/filter-by-bean.ts';
import GetProduct from '@/services/shop/shop.ts';
import { type GetProductResponse } from '@/types/services/shop/shop.ts';
import useCartStore from '@/zustand/useCartStore.ts';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const tags = ['Arabica', 'Robusta', 'Excelsa', 'Liberica'];

export default function Shop(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<GetProductResponse>([
    {
      id: 0,
      name: '',
      type: '',
      price: 0,
      description: '',
      created_at: '',
      updated_at: ''
    }
  ]);
  const [quantities, setQuantities] = useState<string[]>(
    Array(products?.length).fill('')
  );
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);
  const { toast } = useToast();
  const [selectedTag, renderSelectableTag] = useSelectableTag({ tags });

  useEffect(() => {
    if (selectedTag !== '') {
      const filterFunction = async (): Promise<void> => {
        setIsLoading(true);
        try {
          const filteredProducts = await FilterByBean({
            beanType: selectedTag
          });
          setProducts(filteredProducts);
        } catch (error) {
          const err = error as Error;
          toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: 'Product could not be fetched.'
          });
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };

      filterFunction().catch(() => {});
    } else {
      const fetchProduct = async (): Promise<void> => {
        setIsLoading(true);
        try {
          const result = await GetProduct();
          setProducts(result);
        } catch (error) {
          const err = error as Error;
          toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: 'Product could not be fetched.'
          });
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchProduct().catch(() => {});
    }
  }, [selectedTag, toast]);

  const handleQuantityChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    const onlyNumbersQuantity = value.replace(/\D/g, '');
    const newQuantities = [...quantities];
    newQuantities[index] = onlyNumbersQuantity;
    setQuantities(newQuantities);
  };

  const handleAddToCart = (index: number): void => {
    const quantity = parseInt(quantities[index]);
    if (!isNaN(quantity) && quantity > 0) {
      addToCart(products?.[index], quantity);
      const newQuantities = [...quantities];
      newQuantities[index] = '';
      setQuantities(newQuantities);
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Please input a correct number.'
      });
    }
  };

  return (
    <div className='flex min-h-[80vh] items-center justify-center py-5'>
      <MetaTag
        title='Kofebin | Shop'
        description='Purchase your preferred coffee beans now!'
      />
      <div className='min-h-[60vh] w-full px-20'>
        <h1 className='mb-4 scroll-m-20 text-5xl font-bold tracking-tight'>
          Shop
        </h1>
        {renderSelectableTag()}
        {!isLoading ? (
          <div className='flex flex-row flex-wrap gap-5'>
            {products.map((product, index) => (
              <div
                key={product.id}
                className='flex flex-col rounded-2xl bg-white px-3 py-3 font-normal drop-shadow-[3px_3px_3px_#E48F45]'
              >
                <LoadImage
                  classes='w-52 h-52 mb-2 rounded-xl cursor-pointer'
                  source='errorImage'
                  alternative={product.name}
                  onClick={() => {
                    navigate(`/product/${product.id}`, { state: { product } });
                  }}
                />
                <p>{product.name}</p>
                <p>Characteristic: {product.type}</p>
                <p>Price/gram: Rp. {product.price}</p>
                <div>
                  <label htmlFor={`product-${product.id}`}>Qty (gram): </label>
                  <input
                    id={`product-${product.id}`}
                    type='text'
                    value={quantities[index] ?? ''}
                    onChange={(event) => {
                      handleQuantityChange(index, event);
                    }}
                    className='w-14 rounded-full border border-black px-3'
                  />
                </div>
                <Button
                  className='mt-3 justify-self-center rounded-full bg-primary-color text-center hover:bg-secondary-color'
                  onClick={() => {
                    handleAddToCart(index);
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className='h-[24.4rem]'>
            <Spinner className='border-black border-b-transparent' />
          </div>
        )}
      </div>
    </div>
  );
}
