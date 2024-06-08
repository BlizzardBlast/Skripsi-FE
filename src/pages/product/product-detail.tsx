import LoadImage from '@/components/load-image/load-image';
import MetaTag from '@/components/meta-tag/meta-tag';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import CharacteristicsTag from '@/pages/product/characteristics-tag.tsx';
import { useFetchProductImage } from '@/pages/product/useFetchProductImage';
import useHandleProduct from '@/pages/shop/useHandleProduct';
import { type Product } from '@/types/services/shop/shop.ts';
import ConvertToRupiah from '@/utils/convert-to-rupiah';
import wrapAsyncFunction from '@/utils/wrap-async-function';
import { useState } from 'react';
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
  const product = location.state?.product ?? {};

  const [isAdding, setIsAdding] = useState(false);

  const { id } = useParams();
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
  const productImage = useFetchProductImage({ id: id ?? '' });

  return (
    <div className='flex min-h-[90vh] items-center justify-center py-5'>
      <MetaTag
        title={`Kofebin | ${product.name}`}
        description='Purchase your preferred coffee beans now!'
      />
      <div
        className='flex min-h-[80vh] w-5/6 flex-col flex-wrap items-center justify-center gap-5 rounded-2xl bg-white px-10 py-10 text-center drop-shadow-[3px_3px_3px_#E48F45] sm:text-left lg:flex-row'
        itemScope
        itemType='https://schema.org/Product'
      >
        <div className='flex min-h-[60vh] w-full flex-[4] grow flex-col justify-between'>
          <LoadImage
            classes='w-60 h-60 rounded-xl'
            source={productImage}
            alternative={product.name}
            divClasses='flex justify-center items-center'
            itemProp='image'
          />
          <br />
          <div className='flex flex-col text-center'>
            <span itemProp='category'>
              <strong>Type</strong>: {product.type}
            </span>
            <span>
              <strong>Taste Characteristic</strong>:
            </span>
            <CharacteristicsTag product={product} />
          </div>
        </div>
        <div className='flex min-h-[60vh] w-full flex-[6] grow flex-col flex-wrap justify-between gap-5'>
          <div className='flex flex-col'>
            <span className='text-2xl font-bold' itemProp='name'>
              {product.name}
            </span>
            <span className='font-bold'>{product.subname}</span>
            <span itemProp='countryOfOrigin'>
              <strong>Origin</strong>: {product.origin}
            </span>
            <span>
              <strong>Price</strong>: {ConvertToRupiah(product.price)}
            </span>
            <span itemProp='description'>{product.description}</span>
          </div>
          <div className='flex w-full flex-col flex-wrap items-center justify-center gap-5 sm:justify-between'>
            <div className='w-full'>
              <label htmlFor={`product-${id}`} className='text-lg'>
                <strong>Quantity</strong> (in grams)
              </label>
              <br />
              <Input
                id={`product-${id}`}
                type='text'
                value={quantity ?? ''}
                onChange={(event) => {
                  handleQuantityChange(event);
                }}
                className='h-10 w-full rounded-3xl border-black'
              />
            </div>
            <div className='w-full'>
              <span className='text-lg'>
                <strong>Roasting Type</strong>
              </span>
              <Select
                value={roastingType}
                onValueChange={handleRoastingTypeChange}
              >
                <SelectTrigger className='mt-1 h-10 w-full rounded-full border border-black px-3 text-black'>
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
            <Button
              className='mt-3 w-full justify-self-center rounded-3xl bg-primary-color text-center text-white hover:bg-secondary-color'
              onClick={wrapAsyncFunction(async () => {
                await handleAddToCart();
              })}
              isLoading={isAdding}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
