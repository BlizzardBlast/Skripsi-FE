/* eslint-disable security/detect-object-injection */
import LoadImage from '@/components/load-image/load-image.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useToast } from '@/components/ui/use-toast.ts';
import { type GetProductResponse } from '@/types/services/shop/shop.ts';
import useCartStore from '@/zustand/useCartStore.ts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type ProductListProps = {
  products: GetProductResponse;
};

export default function ProductList({
  products
}: Readonly<ProductListProps>): JSX.Element {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quantities, setQuantities] = useState<string[]>(
    Array(products?.length).fill('')
  );
  const addToCart = useCartStore((state) => state.addToCart);

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

  if (products.length === 0) {
    return (
      <div className='flex flex-row flex-wrap gap-5'>
        <p>There is no product available.</p>
      </div>
    );
  }

  return (
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
  );
}
