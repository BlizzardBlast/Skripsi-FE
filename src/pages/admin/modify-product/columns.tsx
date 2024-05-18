import { Button } from '@/components/ui/button';
import ProductAction from '@/pages/admin/modify-product/product-action.component';
import { type Product } from '@/types/services/shop/shop';
import capitalizeFirstLetter from '@/utils/capitalize-first-letter';
import ConvertToRupiah from '@/utils/convert-to-rupiah';
import { FaSort } from '@react-icons/all-files/fa/FaSort';
import { type ColumnDef } from '@tanstack/react-table';

export const modifyProductColumns: Array<ColumnDef<Product>> = [
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
    },
    cell: ({ row }) => {
      const name = row.getValue('name');

      return name;
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
    id: 'action',
    header: 'Action',
    cell: ({ row }) => {
      const product = row.original;

      return <ProductAction product={product} />;
    }
  }
];
