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
import PaymentOptions from '@/pages/cart/payment-options.tsx';
import useDialogBody from '@/pages/cart/useDialogBody.tsx';
import ConvertToRupiah from '@/utils/convert-to-rupiah.ts';
import { env } from '@/utils/env.ts';
import { type CartItem } from '@/zustand/useCartStore.ts';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

type PaymentDialogProps = {
  cart: CartItem[];
};

export default function PaymentDialog({
  cart
}: Readonly<PaymentDialogProps>): JSX.Element {
  const { totalPrice, dialogBody } = useDialogBody({ cart });
  const initialPaypalOptions = {
    clientId: env.VITE_PAYPAL_CLIENT_ID,
    currency: 'GBP',
    intent: 'capture'
  };

  return (
    <PayPalScriptProvider options={initialPaypalOptions}>
      <script src='https://www.paypal.com/sdk/js?client-id=%VITE_PAYPAL_CLIENT_ID%&currency=GBP&intent=capture'></script>
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
                <PaymentOptions totalPrice={totalPrice} />
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </PayPalScriptProvider>
  );
}
