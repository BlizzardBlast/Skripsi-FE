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
import { type GetAllCartReturn } from '@/types/services/cart/get-all-cart';
import ConvertToRupiah from '@/utils/convert-to-rupiah.ts';
import { env } from '@/utils/env.ts';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

type PaymentDialogProps = {
  cart: GetAllCartReturn[];
  discount: number;
  promoCode: string;
};

export default function PaymentDialog({
  cart,
  discount,
  promoCode
}: Readonly<PaymentDialogProps>): JSX.Element {
  const { totalPrice, dialogBody } = useDialogBody({ cart });
  const initialPaypalOptions = {
    clientId: env.VITE_PAYPAL_CLIENT_ID,
    currency: 'GBP',
    intent: 'capture'
  };

  return (
    <PayPalScriptProvider options={initialPaypalOptions}>
      <div className='text-right'>
        <HeadingFour>Total Price: {ConvertToRupiah(totalPrice)}</HeadingFour>
        {discount > 0 && (
          <HeadingFour>Discount: {ConvertToRupiah(discount)}</HeadingFour>
        )}
        <HeadingFour>
          <strong>Final Price: {ConvertToRupiah(totalPrice - discount)}</strong>
        </HeadingFour>
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
                  <span className='col-span-6'>Total Price</span>
                  <span className='col-span-6 ms-auto'>
                    {ConvertToRupiah(totalPrice)}
                  </span>
                </div>
                {discount > 0 && (
                  <div className='grid grid-cols-12'>
                    <span className='col-span-6'>Discount</span>
                    <span className='col-span-6 ms-auto'>
                      - {ConvertToRupiah(discount)}
                    </span>
                  </div>
                )}
                <div className='grid grid-cols-12'>
                  <span className='col-span-6'>Final Price</span>
                  <span className='col-span-6 ms-auto'>
                    <strong>{ConvertToRupiah(totalPrice - discount)}</strong>
                  </span>
                </div>
                <PaymentOptions
                  totalPrice={totalPrice - discount}
                  promoCode={promoCode}
                />
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </PayPalScriptProvider>
  );
}
