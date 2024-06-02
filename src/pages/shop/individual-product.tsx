import LoadImage from '@/components/load-image/load-image.tsx';
import { Button } from '@/components/ui/button.tsx';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import useUserContext from '@/context/user-context/useUserContext';
import { cn } from '@/lib/utils';
import { useFetchProductImage } from '@/pages/product/useFetchProductImage';
import useHandleProduct from '@/pages/shop/useHandleProduct.ts';
import { type Product } from '@/types/services/shop/shop';
import ConvertToRupiah from '@/utils/convert-to-rupiah.ts';
import wrapAsyncFunction from '@/utils/wrap-async-function';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type IndividualProductProps = {
  product: Product;
};

export default function IndividualProduct({
  product
}: Readonly<IndividualProductProps>): JSX.Element {
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);
  const {
    quantity,
    roastingType,
    handleQuantityChange,
    handleRoastingTypeChange,
    handleAddToCart
  } = useHandleProduct({
    product,
    setIsAdding
  });
  const { user } = useUserContext();
  const productImage = useFetchProductImage({ id: String(product.id) });
  return (
    <div
      key={product.id}
      className={cn(
        'flex min-h-[26rem] w-[14rem] flex-col justify-between rounded-2xl bg-white px-3 py-3 font-normal drop-shadow-[3px_3px_3px_#E48F45]',
        {
          'min-h-[22rem]': user?.role === 'admin'
        }
      )}
    >
      <LoadImage
        classes='w-52 h-52 mb-2 rounded-xl'
        source={productImage}
        alternative={product.name}
      />
      <p>{product.name}</p>
      <p>Characteristic: {product.type}</p>
      <p>Price/gram: {ConvertToRupiah(product.price)}</p>
      {user?.role !== 'admin' && (
        <>
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
            <Select
              value={roastingType}
              onValueChange={handleRoastingTypeChange}
            >
              <SelectTrigger className='mt-2 w-full rounded-full border border-black px-3'>
                <SelectValue placeholder='Select roasting type' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Roasting Type</SelectLabel>
                  <SelectItem value='low'>Low</SelectItem>
                  <SelectItem value='medium'>Medium</SelectItem>
                  <SelectItem value='high'>High</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='mt-3 flex w-full flex-col items-center justify-center gap-3'>
            <Button
              className='w-full rounded-full bg-primary-color text-center hover:bg-secondary-color'
              onClick={wrapAsyncFunction(async () => {
                await handleAddToCart();
              })}
              isLoading={isAdding}
            >
              Add to Cart
            </Button>
            <Button
              className='w-full rounded-full border border-primary-color bg-white text-center text-primary-color hover:bg-secondary-color hover:text-white'
              onClick={() => {
                navigate(`/product/${product.id}`, { state: { product } });
              }}
            >
              Detail
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
