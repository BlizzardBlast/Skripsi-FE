import LoadImage from '@/components/load-image/load-image';
import MetaTag from '@/components/meta-tag/meta-tag';
import { Button } from '@/components/ui/button.tsx';
import { useToast } from '@/components/ui/use-toast.ts';
import CharacteristicsTag from '@/pages/product/characteristics-tag.tsx';
import GetProductImage from '@/services/get-product-image/get-product-image.ts';
import { type Product } from '@/types/services/shop/shop.ts';
import useCartStore from '@/zustand/useCartStore.ts';
import useSignedIn from '@/zustand/useSignedIn.ts';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

type LocationState = {
  pathname: string;
  search: string;
  hash: string;
  state: {
    product: Product;
  };
  key: string;
};

export default function ProductDetail(): JSX.Element {
  const location: LocationState = useLocation();
  const product = location.state.product;

  const [quantity, setQuantity] = useState<string>('');
  const [productImage, setProductImage] = useState<string | undefined>('');

  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);
  const isSignedIn = useSignedIn((state) => state.isSignedIn);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProductImage = async (): Promise<void> => {
      try {
        const result = await GetProductImage({ id: id as string });
        setProductImage(result);
      } catch (error) {
        console.error(error);
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with fetching the product image.'
        });
      }
    };

    fetchProductImage().catch(() => {});
  }, [id, toast]);

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    const onlyNumbersQuantity = value.replace(/\D/g, '');
    setQuantity(onlyNumbersQuantity);
  };

  const handleAddToCart = (): void => {
    if (!isSignedIn) {
      setQuantity('');
      toast({
        variant: 'destructive',
        title: 'You must be signed in.',
        description: 'Please sign in to add products to cart.'
      });
      return;
    }
    const qty = parseInt(quantity);
    if (!isNaN(qty) && qty > 0) {
      addToCart(product, qty);
      setQuantity('');
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Please input a correct number.'
      });
      setQuantity('');
    }
  };

  return (
    <div className='flex min-h-[80vh] items-center justify-center py-5'>
      <MetaTag
        title={`Kofebin | ${product.name}`}
        description='Purchase your preferred coffee beans now!'
      />
      <div className='flex h-5/6 w-5/6 flex-col flex-wrap items-center justify-center gap-5 rounded-2xl bg-white px-10 py-10 text-center drop-shadow-[3px_3px_3px_#E48F45] sm:text-left lg:flex-row'>
        <div className='flex flex-[4] flex-col'>
          <LoadImage
            classes='w-96 h-96 mb-2 rounded-xl'
            source={productImage as string}
            alternative={product.name}
            divClasses='flex justify-center items-center'
          />
        </div>
        <div className='flex min-h-96 flex-[6] flex-col flex-wrap justify-between gap-5'>
          <div className='flex flex-col'>
            <span className='text-2xl font-bold'>{product.name}</span>
            <span className='font-bold'>{product.subname}</span>
            <span>Origin: {product.origin}</span>
            <span className='font-bold'>{product.description}</span>
          </div>
          <div className='flex flex-wrap items-center justify-center gap-5 sm:justify-between'>
            <div className='flex min-h-44 min-w-60 flex-col justify-center rounded-2xl bg-tertiary-color p-3'>
              <span className='font-bold'>Characteristic Sheet</span>
              <span>Type: {product.type}</span>
              <br />
              <span>Taste Characteristic:</span>
              <CharacteristicsTag product={product} />
            </div>
            <div className='flex h-44 min-w-60 flex-col justify-between rounded-2xl bg-secondary-color p-3 text-white'>
              <span>Item Control</span>
              <div className='w-full'>
                <div>
                  <label htmlFor={`product-${id}`}>Quantity</label>
                  <br />
                  <input
                    id={`product-${id}`}
                    type='text'
                    value={quantity ?? ''}
                    onChange={(event) => {
                      handleQuantityChange(event);
                    }}
                    className='w-40 rounded-full border border-black px-3 text-black'
                  />
                  <span className='ms-1'>Gram</span>
                </div>
                <Button
                  className='mt-3 w-full justify-self-center rounded-lg bg-quaternary-color text-center text-black hover:bg-tertiary-color'
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
