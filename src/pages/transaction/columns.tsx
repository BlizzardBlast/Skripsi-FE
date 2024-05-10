import { Button } from '@/components/ui/button';
import capitalizeFirstLetter from '@/utils/capitalize-first-letter';
import ConvertToRupiah from '@/utils/convert-to-rupiah';
import formatDate from '@/utils/format-date';
import { FaSort } from '@react-icons/all-files/fa/FaSort';
import { type ColumnDef } from '@tanstack/react-table';
import { Link } from 'react-router-dom';

export type Transaction = {
  id: number;
  created_at: string;
  confirmation: 'paid' | 'cancelled' | 'on delivery' | 'arrived';
  total_price: number;
  user_id: number;
  updated_at: string;
};

export const columns: Array<ColumnDef<Transaction>> = [
  {
    accessorKey: 'created_at',
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
    },
    cell: ({ row }) => {
      const date = formatDate(row.getValue('created_at'));

      return date;
    }
  },
  {
    accessorKey: 'confirmation',
    header: 'Status',
    cell: ({ row }) => {
      const status = capitalizeFirstLetter(row.getValue('confirmation'));

      return status;
    }
  },
  {
    accessorKey: 'total_price',
    header: 'Total Price',
    cell: ({ row }) => {
      const totalPrice = ConvertToRupiah(row.getValue('total_price'));

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
          state={{ transaction }}
          className='text-primary-color underline'
        >
          Detail
        </Link>
      );
    }
  }
];
