import Spinner from '@/components/spinner/spinner';
import Paragraph from '@/components/typography/paragraph';
import { Button } from '@/components/ui/button';
import { modifyProductColumns } from '@/pages/admin/modify-product/columns';
import { DataTable } from '@/pages/admin/modify-product/data-table';
import useFetchProduct from '@/pages/shop/useFetchProduct';
import { Link } from 'react-router-dom';

export default function ModifyProductContent(): JSX.Element {
  const { isLoading, products } = useFetchProduct({ selectedTag: '' });

  if (isLoading) {
    return (
      <div className='ms-0 mt-3 flex h-[24.4rem] justify-center sm:justify-normal md:ms-8'>
        <Spinner />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className='min-h-[80vh] w-full items-center justify-center px-9 py-10'>
        <Paragraph>No products found. Please add a product.</Paragraph>
        <Button asChild>
          <Link to={'/add-product'}>Add Product</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className='container mx-auto py-5'>
      <DataTable columns={modifyProductColumns} data={products} />
    </div>
  );
}
