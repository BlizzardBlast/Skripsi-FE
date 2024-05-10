import Spinner from '@/components/spinner/spinner';
import { columns } from '@/pages/transaction/columns';
import { DataTable } from '@/pages/transaction/data-table';
import useFetchTransaction from '@/pages/transaction/useFetchTransaction';
import { Link } from 'react-router-dom';

export default function TransactionHistoryContent(): JSX.Element {
  const { data, isLoading } = useFetchTransaction();

  if (isLoading) {
    return <Spinner />;
  }

  if (data.length === 0) {
    return (
      <div>
        You have not bought any product yet. Click{' '}
        <Link to={'/shop'} className='text-primary-color underline'>
          here
        </Link>{' '}
        to Shop.
      </div>
    );
  }

  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
