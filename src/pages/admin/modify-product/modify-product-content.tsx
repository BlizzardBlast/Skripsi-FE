import Spinner from '@/components/spinner/spinner';
import { modifyProductColumns } from '@/pages/admin/modify-product/columns';
import { DataTable } from '@/pages/admin/modify-product/data-table';
import useFetchProduct from '@/pages/shop/useFetchProduct';

export default function ModifyProductContent(): JSX.Element {
  const { isLoading, products } = useFetchProduct({ selectedTag: '' });

  if (isLoading) {
    return (
      <div className='ms-0 mt-3 flex h-[24.4rem] justify-center sm:justify-normal md:ms-8'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='container mx-auto py-5'>
      <DataTable columns={modifyProductColumns} data={products} />
    </div>
  );
}
