import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { type Product } from '@/types/services/shop/shop';
import capitalizeFirstLetter from '@/utils/capitalize-first-letter';
import ConvertToRupiah from '@/utils/convert-to-rupiah';
import { FaSort } from '@react-icons/all-files/fa/FaSort';
import { type ColumnDef } from '@tanstack/react-table';
import { Link } from 'react-router-dom';

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

      return (
        <div className='flex gap-3'>
          <Button asChild variant={'secondary'}>
            <Link to={`/edit-product/${product.id}`} state={{ product }}>
              Edit
            </Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={'destructive'}>Remove</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
              <DialogHeader>
                <DialogTitle>Remove product</DialogTitle>
              </DialogHeader>
              <p>
                Are you sure you want to remove <strong>{product.name}</strong>?
              </p>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type='button'>Remove</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button type='button' variant='secondary'>
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      );
    }
  }
];
