import Spinner from '@/components/spinner/spinner.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';
import useFetchCoffeePreference from '@/pages/find-your-coffee-result/useFetchCoffeePreference.ts';
import IndividualProduct from '@/pages/shop/individual-product';

export default function CoffeeRecommendationList(): JSX.Element {
  const { isLoading, products } = useFetchCoffeePreference();

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
      {products.map((product) => (
        <IndividualProduct key={product.id} product={product} />
      ))}
    </div>
  );
}
