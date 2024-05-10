import LoadImage from '@/components/load-image/load-image.tsx';
import Spinner from '@/components/spinner/spinner.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';
import { Button } from '@/components/ui/button.tsx';
import useFetchCoffeePreference from '@/pages/find-your-coffee-result/useFetchCoffeePreference.ts';
import useHandleProduct from '@/pages/shop/useHandleProduct.ts';
import ConvertToRupiah from '@/utils/convert-to-rupiah.ts';
import wrapAsyncFunction from '@/utils/wrap-async-function';
import { useNavigate } from 'react-router-dom';

export default function CoffeeRecommendationList(): JSX.Element {
  const navigate = useNavigate();
  const { isLoading, products } = useFetchCoffeePreference();
  const { quantities, handleQuantityChange, handleAddToCart } =
    useHandleProduct({
      products
    });

  if (isLoading) {
    return <Spinner />;
  }

  if (products?.length === 0) {
    return (
      <Paragraph className='text-center text-2xl'>No product found</Paragraph>
    );
  }

  return (
    <div className='flex flex-row flex-wrap justify-center gap-5'>
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
          <p>Price/gram: {ConvertToRupiah(product.price)}</p>
          <div>
            <label htmlFor={`product-${product.id}`}>Qty (gram): </label>
            <input
              id={`product-${product.id}`}
              type='text'
              // eslint-disable-next-line security/detect-object-injection
              value={quantities[index] ?? ''}
              onChange={(event) => {
                handleQuantityChange(index, event);
              }}
              className='w-14 rounded-full border border-black px-3'
            />
          </div>
          <Button
            className='mt-3 justify-self-center rounded-full bg-primary-color text-center hover:bg-secondary-color'
            onClick={wrapAsyncFunction(async () => {
              await handleAddToCart(index);
            })}
          >
            Add to Cart
          </Button>
        </div>
      ))}
    </div>
  );
}
