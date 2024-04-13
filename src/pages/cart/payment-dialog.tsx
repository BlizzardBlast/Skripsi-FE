import LoadImage from '@/components/load-image/load-image.tsx';
import HeadingFour from '@/components/typography/headingFour.tsx';
import { Button } from '@/components/ui/button.tsx';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog.tsx';
import useDialogBody from '@/pages/cart/useDialogBody.tsx';
import ConvertToRupiah from '@/utils/convert-to-rupiah.ts';
import { type CartItem } from '@/zustand/useCartStore.ts';
import Visa from '@/assets/visa.webp';
import Mastercard from '@/assets/mastercard.svg';

type PaymentDialogProps = {
  cart: CartItem[];
};

export default function PaymentDialog({
  cart
}: Readonly<PaymentDialogProps>): JSX.Element {
  const { totalPrice, dialogBody } = useDialogBody({ cart });
  return (
    <div className='text-right'>
      <HeadingFour>Total: {ConvertToRupiah(totalPrice)}</HeadingFour>
      <Dialog>
        <DialogTrigger asChild>
          <Button className='bg-tertiary-color text-primary-text-color hover:bg-secondary-color hover:text-white'>
            Continue
          </Button>
        </DialogTrigger>
        <DialogContent
          className='sm:max-w-[425px]'
          dialogOverlayClassName='bg-black opacity-50'
        >
          <DialogHeader>
            <DialogTitle className='text-2xl'>
              Transaction Confirmation
            </DialogTitle>
          </DialogHeader>
          {dialogBody}
          <DialogFooter>
            <div className='flex w-full flex-col'>
              <div className='grid grid-cols-12'>
                <span className='col-span-5'>Total</span>
                <span className='col-span-7'>
                  {ConvertToRupiah(totalPrice)}
                </span>
              </div>
              <div className='grid grid-cols-12'>
                <span className='col-span-5'>Payment Option</span>
                <div className='col-span-7 flex gap-2'>
                  <LoadImage
                    source={Visa}
                    alternative='Visa'
                    lazy
                    classes='w-[2.5rem] h-[1.396875rem]'
                    divClasses='w-auto'
                  />
                  <LoadImage
                    source={Mastercard}
                    alternative='Mastercard'
                    lazy
                    classes='w-[2.5rem] h-[1.396875rem]'
                    divClasses='w-auto'
                  />
                </div>
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
