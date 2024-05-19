import { Button } from '@/components/ui/button';
import PromoAction from '@/pages/admin/promo/promo-action.component';
import { type Promo } from '@/types/services/promo/promo';
import ConvertToRupiah from '@/utils/convert-to-rupiah';
import formatDate from '@/utils/format-date';
import { FaSort } from '@react-icons/all-files/fa/FaSort';
import { type ColumnDef } from '@tanstack/react-table';

export const promoPageColumns: Array<ColumnDef<Promo>> = [
  {
    accessorKey: 'promo_code',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc');
          }}
          className='p-0 hover:bg-transparent'
        >
          Promo Code
          <FaSort className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      return row.getValue('promo_code');
    }
  },
  {
    accessorKey: 'promo_expiry_date',
    header: 'Expiry Date',
    cell: ({ row }) => {
      return formatDate(row.getValue('promo_expiry_date'));
    }
  },
  {
    accessorKey: 'discount',
    header: 'Discount',
    cell: ({ row }) => {
      return String(row.getValue('discount')) + '%';
    }
  },
  {
    accessorKey: 'minimum',
    header: 'Minimum Bought',
    cell: ({ row }) => {
      return ConvertToRupiah(row.getValue('minimum'));
    }
  },
  {
    accessorKey: 'maximum',
    header: 'Maximum Discount',
    cell: ({ row }) => {
      return ConvertToRupiah(row.getValue('maximum'));
    }
  },
  {
    id: 'action',
    header: 'Action',
    cell: ({ row }) => {
      const promo = row.original;

      return <PromoAction promo={promo} />;
    }
  }
];
