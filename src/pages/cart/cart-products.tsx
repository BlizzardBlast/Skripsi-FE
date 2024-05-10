import LoadImage from '@/components/load-image/load-image.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';
import CartProductsHandler from '@/pages/cart/cart-products-handler.tsx';
import { type GetAllCartReturn } from '@/types/services/cart/get-all-cart';
import ConvertToRupiah from '@/utils/convert-to-rupiah.ts';

type CartProductProps = {
  cart: GetAllCartReturn[];
};

export default function CartProducts({
  cart
}: Readonly<CartProductProps>): JSX.Element {
  return (
    <>
      {cart.map((product) => (
        <div
          className='mb-5 flex w-full flex-wrap justify-between rounded-xl bg-white p-5 drop-shadow-[3px_3px_3px_#E48F45]'
          key={product.product.id}
        >
          <div className='flex'>
            <LoadImage
              source={'errorImage'}
              alternative='Image'
              lazy
              classes='w-20 h-20 rounded-lg'
            />
            <div className='ms-3 flex flex-col justify-center'>
              <Paragraph className='font-semibold'>
                {product.product.name}
              </Paragraph>
              <Paragraph className='text-nowrap font-semibold'>
                Price: {ConvertToRupiah(product.product.price)}
              </Paragraph>
            </div>
          </div>
          <CartProductsHandler product={product} />
        </div>
      ))}
    </>
  );
}
