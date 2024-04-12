import { Separator } from '@/components/ui/separator.tsx';
import ConvertToRupiah from '@/utils/convert-to-rupiah.ts';
import { type CartItem } from '@/zustand/useCartStore.ts';
import { Fragment } from 'react';

type UseDialogBodyProps = {
  cart: CartItem[];
};

type UseDialogBodyReturnType = {
  totalPrice: number;
  dialogBody: JSX.Element;
};

export default function useDialogBody({
  cart
}: UseDialogBodyProps): Readonly<UseDialogBodyReturnType> {
  const totalPrice = cart
    .map((product) => product.product.price * product.quantity)
    .reduce((acc, curr) => acc + curr, 0);
  const dialogBody = (
    <div>
      <Separator className='bg-black' />
      {cart.map((product) => (
        <Fragment key={product.product.id}>
          <div className='my-3 grid grid-cols-12'>
            <span className='col-span-5'>{product.product.name}</span>
            <span className='col-span-2 text-center'>{product.quantity}x</span>
            <span className='col-span-5 text-right'>
              {ConvertToRupiah(product.product.price)}
            </span>
          </div>
          <Separator className='h-[3px] bg-[#FFD703]' />
        </Fragment>
      ))}
    </div>
  );

  return { totalPrice, dialogBody } as const;
}
