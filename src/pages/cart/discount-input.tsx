import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import CheckPromo from '@/services/promo/check-promo';
import { type GetAllCartReturn } from '@/types/services/cart/get-all-cart';
import wrapAsyncFunction from '@/utils/wrap-async-function';
import { useEffect, useState, type ReactNode } from 'react';

type DiscountInputProps = {
  cart: GetAllCartReturn[];
  cartLoading: boolean;
  setDiscount: React.Dispatch<React.SetStateAction<number>>;
  promoCode: string;
  kodePromo: string;
  setPromoCode: React.Dispatch<React.SetStateAction<string>>;
  setKodePromo: React.Dispatch<React.SetStateAction<string>>;
};

export default function DiscountInput({
  cart,
  cartLoading,
  setDiscount,
  promoCode,
  kodePromo,
  setPromoCode,
  setKodePromo
}: Readonly<DiscountInputProps>): ReactNode {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleCheckPromo = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const totalPrice = cart
        .map((product) => product.product.price * product.quantity)
        .reduce((acc, curr) => acc + curr, 0);
      const result = await CheckPromo({ promoCode, totalPrice });
      setDiscount(result.discount);
      setKodePromo(promoCode);
      setPromoCode('');
      setIsLoading(false);
      toast({
        title: 'Promo applied!',
        description: 'Promo code has been applied to your cart.'
      });
    } catch (error) {
      const err = error as Error;
      setDiscount(0);
      console.error(err);
      setIsLoading(false);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: err.message
      });
    }
  };

  useEffect(() => {
    if (kodePromo !== '' && !cartLoading) {
      const checkAppliedPromoCode = async (): Promise<void> => {
        setIsLoading(true);
        try {
          const totalPrice = cart
            .map((product) => product.product.price * product.quantity)
            .reduce((acc, curr) => acc + curr, 0);
          const result = await CheckPromo({ promoCode: kodePromo, totalPrice });
          setDiscount(result.discount);
          setIsLoading(false);
          toast({
            title: 'Promo applied!',
            description: 'Promo code has been applied to your cart.'
          });
        } catch (error) {
          const err = error as Error;
          setDiscount(0);
          console.error(err);
          setIsLoading(false);
          toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: err.message
          });
        }
      };

      void checkAppliedPromoCode();
    }
  }, []);

  return (
    <div className='mb-2 flex w-full flex-wrap items-center justify-center gap-2 sm:flex-nowrap sm:justify-end'>
      <label htmlFor='discount' className='text-lg'>
        Promo Code
      </label>
      <Input
        id='discount'
        name='discount'
        placeholder='Enter your promo code here'
        className='rounded-md border border-gray-300 p-2'
        onChange={(e) => {
          setPromoCode(e.target.value);
        }}
        value={promoCode}
        size={50}
        disabled={isLoading}
      />
      <Button
        className='h-auto text-wrap sm:h-max'
        onClick={wrapAsyncFunction(handleCheckPromo)}
        isLoading={isLoading}
        disabled={promoCode === ''}
      >
        Check Promo Code
      </Button>
    </div>
  );
}
