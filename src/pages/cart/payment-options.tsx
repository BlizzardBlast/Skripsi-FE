import Mastercard from '@/assets/mastercard.svg';
import Paypal from '@/assets/paypal.webp';
import LoadImage from '@/components/load-image/load-image.tsx';
import { CompletePayment, CreatePayment } from '@/services/payment/payment.ts';
import ConvertRupiahToGbp from '@/utils/convert-rupiah-to-gbp.ts';
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

  async function createOrder(): Promise<string> {
    return await CreatePayment(ConvertRupiahToGbp(totalPrice));
  }
  async function onApprove(): Promise<void> {
    await CompletePayment();
  }

  const handlePaypalPayment = async (): Promise<void> => {
    try {
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
            source={Paypal}
            alternative='Paypal'
            lazy
            classes='w-[5rem] h-[1.396875rem] cursor-pointer'
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
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onCancel={function (data) {
            console.log(data);
          }}
          onError={function (error) {
            console.error(error);
          }}
        />
      </div>
    );
  }

  return null;
}
