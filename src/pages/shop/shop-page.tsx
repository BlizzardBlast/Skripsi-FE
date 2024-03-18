/* eslint-disable security/detect-object-injection */
import LoadImage from '@/components/loadImage/loadImage.tsx';
import MetaTag from '@/components/metaTag/metaTag.tsx';
import { Button } from '@/components/ui/button.tsx';
import useCartStore from '@/zustand/useCartStore.ts';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  characteristics: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Robusta',
    characteristics: 'Bitter',
    price: '11000'
  },
  {
    id: 2,
    name: 'Toraja',
    characteristics: 'Bitter',
    price: '11000'
  },
  {
    id: 3,
    name: 'Arabica',
    characteristics: 'Sour',
    price: '10000'
  },
  {
    id: 4,
    name: 'Arabica',
    characteristics: 'Sour',
    price: '10000'
  }
];

export default function Shop(): JSX.Element {
  const [quantities, setQuantities] = useState<string[]>(
    Array(products.length).fill('')
  );
  const cartItems = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleQuantityChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newQuantities = [...quantities];
    newQuantities[index] = event.target.value;
    setQuantities(newQuantities);
  };

  // Event handler for adding item to cart
  const handleAddToCart = (index: number): void => {
    const quantity = parseInt(quantities[index]);
    if (!isNaN(quantity) && quantity > 0) {
      addToCart(products[index], quantity);
      // Optionally, you can reset the quantity input for this product after adding to cart
      const newQuantities = [...quantities];
      newQuantities[index] = '';
      setQuantities(newQuantities);
    }
  };

  return (
    <div className='flex min-h-[80vh] items-center justify-center py-5'>
      <MetaTag
        title='Kofebin | Shop'
        description='Purchase your preferred coffee beans now!'
      />
      <div className='min-h-[60vh] w-full px-20'>
        <h1 className='mb-4 scroll-m-20 text-5xl font-bold tracking-tight'>
          Shop
        </h1>
        <div className='flex flex-row flex-wrap gap-5'>
          {products.map((product, index) => {
            return (
              <div
                key={product.id}
                className='flex flex-col rounded-2xl bg-white px-3 py-3 font-normal drop-shadow-[3px_3px_3px_#E48F45]'
              >
                <LoadImage
                  classes='w-40 h-40 mb-2 rounded-xl'
                  source='errorImage'
                  alternative={product.name}
                />
                <p>{product.name}</p>
                <p>Characteristic: {product.characteristics}</p>
                <p>Price/gram: Rp. {product.price}</p>
                <div>
                  <label htmlFor={`product-${product.id}`}>Qty (gram): </label>
                  <input
                    id={`product-${product.id}`}
                    type='text'
                    value={quantities[index]}
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
            );
          })}
          <div>
            <h2>Cart</h2>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.product.name} - Qty: {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
