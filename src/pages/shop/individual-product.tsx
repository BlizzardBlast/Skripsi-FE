import LoadImage from '@/components/load-image/load-image.tsx';
import { Button } from '@/components/ui/button.tsx';
import useHandleProduct from '@/pages/shop/useHandleProduct.ts';
import { type Product } from '@/types/services/shop/shop';
import ConvertToRupiah from '@/utils/convert-to-rupiah.ts';
import wrapAsyncFunction from '@/utils/wrap-async-function';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type IndividualProductProps = {
  product: Product;
  index: number;
};

export default function IndividualProduct({
  product,
  index
}: IndividualProductProps): JSX.Element {
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);
  const { quantity, handleQuantityChange, handleAddToCart } = useHandleProduct({
    product,
    setIsAdding
  });
  return (
    <div
      key={product.id}
      className='flex h-[26rem] w-[14rem] flex-col justify-between rounded-2xl bg-white px-3 py-3 font-normal drop-shadow-[3px_3px_3px_#E48F45]'
    >
      <div>
        <LoadImage
          classes='w-52 h-52 mb-2 rounded-xl cursor-pointer'
          source='errorImage'
          alternative={product.name}
          onClick={() => {
            navigate(`/product/${product.id}`, { state: { product } });
          }}
        />
        <p className='text-lg'>{product.name}</p>
        <p>Characteristic: {product.type}</p>
        <p>Price/gram: {ConvertToRupiah(product.price)}</p>
        <div>
          <label htmlFor={`product-${product.id}`}>Qty (gram): </label>
          <input
            id={`product-${product.id}`}
            type='text'
            value={quantity ?? ''}
            onChange={(event) => {
              handleQuantityChange(event);
            }}
            className='w-14 rounded-full border border-black px-3'
          />
        </div>
      </div>
      <Button
        className='mt-3 justify-self-center rounded-full bg-primary-color text-center hover:bg-secondary-color'
        onClick={wrapAsyncFunction(async () => {
          await handleAddToCart(index);
        })}
        isLoading={isAdding}
      >
        Add to Cart
      </Button>
    </div>
  );
}
