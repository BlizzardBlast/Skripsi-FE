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
    <div className='flex items-center justify-center'>
      <Button
        className='me-5 h-8 w-8 rounded-full p-5 text-2xl'
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
        className='ms-5 h-8 w-8 rounded-full p-5 text-2xl'
        onClick={wrapAsyncFunction(async () => {
          await handleIncrementQuantity(product.product.id);
        })}
      >
        +
      </Button>
      <LoadImage
        source={TrashIcon}
        alternative='Delete Product'
        lazy
        classes='w-10 h-10 rounded-lg ms-10 cursor-pointer'
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
