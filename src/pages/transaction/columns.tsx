import { Button } from '@/components/ui/button';
import capitalizeFirstLetter from '@/utils/capitalize-first-letter';
import ConvertToRupiah from '@/utils/convert-to-rupiah';
import { FaSort } from '@react-icons/all-files/fa/FaSort';
import { type ColumnDef } from '@tanstack/react-table';
import { Link } from 'react-router-dom';

export type Transaction = {
  id: number;
  date: string;
  status: 'paid' | 'cancelled' | 'on delivery' | 'arrived';
  totalPrice: number;
};

export const columns: Array<ColumnDef<Transaction>> = [
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc');
          }}
          className='p-0 hover:bg-transparent'
        >
          Date
          <FaSort className='ml-2 h-4 w-4' />
        </Button>
      );
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = capitalizeFirstLetter(row.getValue('status'));

      return status;
    }
  },
  {
    accessorKey: 'totalPrice',
    header: 'Total Price',
    cell: ({ row }) => {
      const totalPrice = ConvertToRupiah(row.getValue('totalPrice'));

      return totalPrice;
    }
  },
  {
    id: 'action',
    header: 'Action',
    cell: ({ row }) => {
      const transaction = row.original;

      return (
        <Link
          to={`/transaction/${transaction.id}`}
          className='text-primary-color underline'
        >
          Detail
        </Link>
      );
    }
  }
];
