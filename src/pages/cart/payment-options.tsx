import Mastercard from '@/assets/mastercard.svg';
import Visa from '@/assets/visa.webp';
import LoadImage from '@/components/load-image/load-image.tsx';
import { CreatePayment } from '@/services/payment/payment.ts';
import wrapAsyncFunction from '@/utils/wrap-async-function.ts';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useState } from 'react';

type PaymentOptionsProps = {
  totalPrice: number;
};

export default function PaymentOptions({
  totalPrice
}: Readonly<PaymentOptionsProps>): JSX.Element | null {
  const [paymentOption, setPaymentOption] = useState<
    '' | 'paypal' | 'mastercard'
  >('');

  const handlePaypalPayment = async (): Promise<void> => {
    try {
      await CreatePayment(totalPrice);
      setPaymentOption('paypal');
    } catch (error) {
      console.error(error);
    }
  };
  if (paymentOption === '') {
    return (
      <div className='grid grid-cols-12'>
        <span className='col-span-5'>Payment Option</span>
        <div className='col-span-7 flex gap-2'>
          <LoadImage
            source={Visa}
            alternative='Visa'
            lazy
            classes='w-[2.5rem] h-[1.396875rem] cursor-pointer'
            divClasses='w-auto'
            onClick={wrapAsyncFunction(handlePaypalPayment)}
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
        <PayPalButtons />
      </div>
    );
  }

  return null;
}
