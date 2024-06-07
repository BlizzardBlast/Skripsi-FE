import { type Product } from '@/types/services/shop/shop.ts';
import capitalizeFirstLetter from '@/utils/capitalize-first-letter.ts';

export default function CharacteristicsTag({
  product
}: Readonly<{ product: Product }>): JSX.Element {
  return (
    <div className='mt-2 flex w-full flex-wrap items-center justify-center gap-5'>
      <div
        key={product.acidity}
        className={'w-auto rounded-full bg-black px-3 py-1 text-white'}
      >
        <span className='text-center'>
          {capitalizeFirstLetter(product.acidity)} acidity
        </span>
      </div>
      <div
        key={product.flavor}
        className={'w-auto rounded-full bg-black px-3 py-1 text-white'}
      >
        <span className='text-center'>
          {capitalizeFirstLetter(product.flavor)} flavor
        </span>
      </div>
      <div
        key={product.aftertaste}
        className={'w-auto rounded-full bg-black px-3 py-1 text-white'}
      >
        <span className='text-center'>
          {capitalizeFirstLetter(product.aftertaste)} aftertaste
        </span>
      </div>
      <div
        key={product.sweetness}
        className={'w-auto rounded-full bg-black px-3 py-1 text-white'}
      >
        <span className='text-center'>
          {capitalizeFirstLetter(product.sweetness)} sweetness
        </span>
      </div>
    </div>
  );
}
