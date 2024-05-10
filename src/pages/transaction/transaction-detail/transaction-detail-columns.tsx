import { Button } from '@/components/ui/button';
import { type Product } from '@/types/services/shop/shop';
import capitalizeFirstLetter from '@/utils/capitalize-first-letter';
import ConvertToRupiah from '@/utils/convert-to-rupiah';
import { FaSort } from '@react-icons/all-files/fa/FaSort';
import { type ColumnDef } from '@tanstack/react-table';

export const transactionDetailColumns: Array<ColumnDef<Product>> = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc');
          }}
          className='p-0 hover:bg-transparent'
        >
          Name
          <FaSort className='ml-2 h-4 w-4' />
        </Button>
      );
    }
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => {
      const type = capitalizeFirstLetter(row.getValue('type'));

      return type;
    }
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => {
      const price = ConvertToRupiah(row.getValue('price'));

      return price;
    }
  },
  {
    id: 'quantity',
    header: 'Quantity'
  }
];
