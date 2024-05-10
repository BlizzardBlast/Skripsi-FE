import IndividualProduct from '@/pages/shop/individual-product';
import { type GetProductResponse } from '@/types/services/shop/shop.ts';

type ProductListProps = {
  products: GetProductResponse;
};

export default function ProductList({
  products
}: Readonly<ProductListProps>): JSX.Element {
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
        <IndividualProduct key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
