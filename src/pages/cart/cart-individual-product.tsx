import LoadImage from '@/components/load-image/load-image.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';
import CartProductsHandler from '@/pages/cart/cart-products-handler.tsx';
import { useFetchProductImage } from '@/pages/product/useFetchProductImage';
import { type GetAllCartReturn } from '@/types/services/cart/get-all-cart';
import ConvertToRupiah from '@/utils/convert-to-rupiah.ts';

type CartIndividualProductProps = {
  product: GetAllCartReturn;
};

export default function CartIndividualProduct({
  product
}: Readonly<CartIndividualProductProps>): JSX.Element {
  const productImage = useFetchProductImage({
    id: String(product.product.id)
  });
  return (
    <div
      className='mb-5 flex w-full flex-wrap items-center justify-center gap-5 rounded-xl bg-white p-5 drop-shadow-[3px_3px_3px_#E48F45] sm:justify-between'
      key={product.product.id}
    >
      <div className='flex'>
        <LoadImage
          source={productImage}
          alternative='Image'
          lazy
          classes='w-20 h-20 rounded-lg'
          divClasses='max-w-20 max-h-20'
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
  );
}