import { columns, type Transaction } from '@/pages/transaction/columns';
import { DataTable } from '@/pages/transaction/data-table';
import { Link } from 'react-router-dom';

const data: Transaction[] = [
  {
    id: 1,
    date: '2021-07-01',
    status: 'paid',
    totalPrice: 1000
  },
  {
    id: 2,
    date: '2021-07-02',
    status: 'paid',
    totalPrice: 2000
  },
  {
    id: 3,
    date: '2021-07-03',
    status: 'paid',
    totalPrice: 3000
  },
  {
    id: 4,
    date: '2021-07-04',
    status: 'paid',
    totalPrice: 4000
  },
  {
    id: 5,
    date: '2021-07-05',
    status: 'paid',
    totalPrice: 5000
  },
  {
    id: 6,
    date: '2021-07-06',
    status: 'paid',
    totalPrice: 6000
  },
  {
    id: 7,
    date: '2021-07-07',
    status: 'paid',
    totalPrice: 7000
  },
  {
    id: 8,
    date: '2021-07-08',
    status: 'paid',
    totalPrice: 8000
  },
  {
    id: 9,
    date: '2021-07-09',
    status: 'paid',
    totalPrice: 9000
  },
  {
    id: 10,
    date: '2021-07-10',
    status: 'paid',
    totalPrice: 10000
  },
  {
    id: 11,
    date: '2021-07-11',
    status: 'paid',
    totalPrice: 11000
  }
] satisfies Transaction[];

export default function TransactionHistoryContent(): JSX.Element {
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
