import TrashIcon from '@/assets/trash_icon.svg';
import LoadImage from '@/components/load-image/load-image.tsx';
import Spinner from '@/components/spinner/spinner';
import { Button } from '@/components/ui/button.tsx';
import { useCartContext } from '@/context/cart-context/useCartContext';
import DecrementQuantity from '@/services/cart/decrement-cart';
import DeleteFromCart from '@/services/cart/delete-from-cart';
import IncrementQuantity from '@/services/cart/increment-cart';
import { type GetAllCartReturn } from '@/types/services/cart/get-all-cart';
import wrapAsyncFunction from '@/utils/wrap-async-function';
import { useState } from 'react';

type CartProductsHandlerProps = {
  product: GetAllCartReturn;
};

export default function CartProductsHandler({
  product
}: Readonly<CartProductsHandlerProps>): JSX.Element {
  const quantities = String(product.quantity);
  const [isLoading, setIsLoading] = useState(false);
  const { refetchCart } = useCartContext();

  const handleIncrementQuantity = async (productId: number): Promise<void> => {
    try {
      setIsLoading(true);
      await IncrementQuantity({ productId, quantity: 1 });
      refetchCart();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDecrementQuantity = async (productId: number): Promise<void> => {
    try {
      setIsLoading(true);
      await DecrementQuantity({ productId, quantity: 1 });
      refetchCart();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className='flex items-center justify-center'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='flex flex-row flex-wrap items-center justify-center gap-5 sm:gap-0'>
      <div className='flex flex-wrap items-center justify-center gap-5 sm:gap-0'>
        <Button
          className='me-0 h-8 w-8 rounded-full p-5 text-2xl sm:me-5'
          onClick={wrapAsyncFunction(async () => {
            await handleDecrementQuantity(product.product.id);
          })}
        >
          -
        </Button>
        <input
          id={`product-${product.product.id}`}
          type='text'
          value={quantities ?? ''}
          className='w-14 rounded-md border border-black px-3 text-black disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none'
          disabled
        />
        <Button
          className='ms-0 h-8 w-8 rounded-full p-5 text-2xl sm:ms-5'
          onClick={wrapAsyncFunction(async () => {
            await handleIncrementQuantity(product.product.id);
          })}
        >
          +
        </Button>
      </div>
      <LoadImage
        source={TrashIcon}
        alternative='Delete Product'
        lazy
        classes='w-10 h-10 rounded-lg cursor-pointer'
        divClasses='max-w-10 max-h-10 ms-0 sm:ms-10'
        onClick={wrapAsyncFunction(async () => {
          setIsLoading(true);
          try {
            await DeleteFromCart({ productId: product.product.id });
            refetchCart();
            setIsLoading(false);
          } catch (error) {
            setIsLoading(false);
            console.error(error);
          }
        })}
      />
    </div>
  );
}
