/* eslint-disable security/detect-object-injection */
import LoadImage from '@/components/load-image/load-image.tsx';
import { Button } from '@/components/ui/button.tsx';
import useHandleProduct from '@/pages/shop/useHandleProduct.ts';
import { type GetProductResponse } from '@/types/services/shop/shop.ts';
import ConvertToRupiah from '@/utils/convert-to-rupiah.ts';
import { useNavigate } from 'react-router-dom';

type ProductListProps = {
  products: GetProductResponse;
};

export default function ProductList({
  products
}: Readonly<ProductListProps>): JSX.Element {
  const navigate = useNavigate();
  const { quantities, handleQuantityChange, handleAddToCart } =
    useHandleProduct({
      products
    });

  if (products.length === 0) {
    return (
      <div className='flex flex-row flex-wrap gap-5'>
        <p>There is no product available.</p>
      </div>
    );
  }

  return (
    <div className='flex flex-row flex-wrap justify-center gap-5 sm:justify-normal'>
      {products.map((product, index) => (
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
                value={quantities[index] ?? ''}
                onChange={(event) => {
                  handleQuantityChange(index, event);
                }}
                className='w-14 rounded-full border border-black px-3'
              />
            </div>
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
  );
}
