import Mastercard from '@/assets/mastercard.svg';
import Paypal from '@/assets/paypal.webp';
import LoadImage from '@/components/load-image/load-image.tsx';
import Spinner from '@/components/spinner/spinner';
import { useToast } from '@/components/ui/use-toast.ts';
import { useCartContext } from '@/context/cart-context/useCartContext';
import { CompletePayment, CreatePayment } from '@/services/payment/payment.ts';
import CreateTransaction from '@/services/transaction/create-transaction';
import { type GetAllCartReturn } from '@/types/services/cart/get-all-cart';
import ConvertRupiahToGbp from '@/utils/convert-rupiah-to-gbp.ts';
import wrapAsyncFunction from '@/utils/wrap-async-function';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type PaymentOptionsProps = {
  totalPrice: number;
  cart: GetAllCartReturn[];
};

export default function PaymentOptions({
  totalPrice,
  cart
}: Readonly<PaymentOptionsProps>): JSX.Element | null {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { refetchCart } = useCartContext();
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);
  const [paymentOption] = useState<'' | 'paypal' | 'mastercard'>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (paymentSuccess) {
      toast({
        title: 'Payment Success',
        description:
          'Your payment has been successfully processed. Redirecting you to the homepage in three seconds.'
      });
      timeoutId = setTimeout(() => {
        navigate('/');
        refetchCart();
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [paymentSuccess, navigate, toast]);

  async function createOrder(): Promise<string> {
    return await CreatePayment(ConvertRupiahToGbp(totalPrice));
  }
  async function onApprove(): Promise<void> {
    await CompletePayment();
    setPaymentSuccess(true);
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (paymentSuccess) {
    return <span className='text-green-400'>Payment Success</span>;
  }

  if (paymentOption === '') {
    return (
      <div className='grid grid-cols-12'>
        <span className='col-span-5'>Payment Option</span>
        <div className='col-span-7 flex gap-2'>
          <LoadImage
            source={Paypal}
            alternative='Paypal'
            lazy
            classes='w-[5rem] h-[1.396875rem] cursor-pointer'
            divClasses='w-auto'
            onClick={wrapAsyncFunction(async () => {
              setIsLoading(true);
              try {
                // setPaymentOption('paypal');
                await CreateTransaction({ totalPrice, cart });
                setIsLoading(false);
                setPaymentSuccess(true);
              } catch (error) {
                setIsLoading(false);
                console.error(error);
              }
            })}
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
    );
  }

  if (paymentOption === 'paypal') {
    return (
      <div className='mt-3'>
        <script src='https://www.paypal.com/sdk/js?client-id=%VITE_PAYPAL_CLIENT_ID%&currency=GBP&intent=capture'></script>
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onCancel={function () {
            toast({
              variant: 'destructive',
              title: 'Payment cancelled',
              description: 'You have cancelled the payment. Please try again.'
            });
          }}
          onError={function (error) {
            toast({
              variant: 'destructive',
              title: 'Uh oh! Something went wrong.',
              description:
                'Something went wrong with the payment. Please try again.'
            });
            console.error(error);
          }}
        />
      </div>
    );
  }

  return null;
}
