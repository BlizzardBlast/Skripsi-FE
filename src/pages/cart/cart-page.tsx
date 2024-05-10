import MetaTag from '@/components/meta-tag/meta-tag';
import Spinner from '@/components/spinner/spinner';
import HeadingOne from '@/components/typography/headingOne.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';
import { useCartContext } from '@/context/cart-context/useCartContext';
import CartProducts from '@/pages/cart/cart-products.tsx';
import PaymentDialog from '@/pages/cart/payment-dialog.tsx';

export default function CartPage(): JSX.Element {
  const { cart, isLoading } = useCartContext();

  return (
    <div className='flex min-h-[80vh] items-center justify-center'>
      <MetaTag
        title='Kofebin | Cart'
        description='Check what you have ordered here in your cart!'
      />
      {isLoading ? (
        <div className='min-h-[80vh] w-full items-center justify-center px-20 py-10'>
          <Spinner />
        </div>
      ) : cart.length === 0 ? (
        <div className='min-h-[80vh] w-full items-center justify-center px-20 py-10'>
          <HeadingOne>There is no product in cart yet.</HeadingOne>
          <Paragraph>Please buy a product first.</Paragraph>
        </div>
      ) : (
        <div className='min-h-[80vh] w-full px-20 py-10'>
          <h1 className='mb-4 scroll-m-20 text-5xl font-bold tracking-tight'>
            Cart
          </h1>
          <CartProducts cart={cart} />
          <PaymentDialog cart={cart} />
        </div>
      )}
    </div>
  );
}
