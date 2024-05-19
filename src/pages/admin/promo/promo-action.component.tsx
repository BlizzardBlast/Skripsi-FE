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
import RemovePromo from '@/services/promo/remove-promo';
import { type Promo } from '@/types/services/promo/promo';
import wrapAsyncFunction from '@/utils/wrap-async-function';
import { useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PromoAction({
  promo
}: Readonly<{ promo: Promo }>): ReactNode {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  return (
    <div className='flex gap-3'>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={'destructive'}>Remove</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Remove promo</DialogTitle>
          </DialogHeader>
          <p>
            Are you sure you want to remove <strong>{promo.promo_code}</strong>{' '}
            promo code?
          </p>
          <DialogFooter>
            <Button
              type='button'
              onClick={wrapAsyncFunction(async () => {
                setIsLoading(true);
                try {
                  await RemovePromo({
                    id: String(promo.id)
                  });
                  setIsLoading(false);
                  toast({
                    title: 'Promo removed',
                    description: 'The promo has been successfully removed.'
                  });
                  navigate('/');
                } catch (error) {
                  setIsLoading(false);
                  toast({
                    variant: 'destructive',
                    title: 'Uh oh! Something went wrong.',
                    description: 'There was a problem with removing the promo.'
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
