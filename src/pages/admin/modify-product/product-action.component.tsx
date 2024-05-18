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
import { useToast } from '@/components/ui/use-toast';
import RemoveProduct from '@/services/remove-product/remove-product';
import { type Product } from '@/types/services/shop/shop';
import wrapAsyncFunction from '@/utils/wrap-async-function';
import { useState, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ProductAction({
  product
}: Readonly<{ product: Product }>): ReactNode {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
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
            <Button
              type='button'
              onClick={wrapAsyncFunction(async () => {
                setIsLoading(true);
                try {
                  await RemoveProduct({
                    id: String(product.id)
                  });
                  setIsLoading(false);
                  toast({
                    title: 'Product removed',
                    description: 'The product has been successfully removed.'
                  });
                  navigate('/');
                } catch (error) {
                  setIsLoading(false);
                  toast({
                    variant: 'destructive',
                    title: 'Uh oh! Something went wrong.',
                    description:
                      'There was a problem with removing the product.'
                  });
                  console.error(error);
                }
              })}
              isLoading={isLoading}
            >
              Remove
            </Button>
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
