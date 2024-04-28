/* eslint-disable security/detect-object-injection */
import MetaTag from '@/components/meta-tag/meta-tag';
import Spinner from '@/components/spinner/spinner.tsx';
import ProductList from '@/pages/shop/product-list.tsx';
import useFetchProduct from '@/pages/shop/useFetchProduct.ts';
import useSelectableTag from '@/pages/shop/useSelectableTag.tsx';

const tags = ['Arabica', 'Robusta', 'Bourbon'];

export default function Shop(): JSX.Element {
  const [selectedTag, renderSelectableTag] = useSelectableTag({ tags });
  const { isLoading, products } = useFetchProduct({ selectedTag });

  return (
    <div className='flex min-h-[80vh] items-center justify-center py-5'>
      <MetaTag
        title='Kofebin | Shop'
        description='Purchase your preferred coffee beans now!'
      />
      <div className='min-h-[80vh] w-full px-20'>
        <h1 className='mb-4 scroll-m-20 text-center text-5xl font-bold tracking-tight sm:text-left'>
          Shop
        </h1>
        {renderSelectableTag()}
        {!isLoading ? (
          <ProductList products={products} />
        ) : (
          <div className='flex h-[24.4rem] justify-center sm:justify-normal'>
            <Spinner className='border-black border-b-transparent' />
          </div>
        )}
      </div>
    </div>
  );
}
