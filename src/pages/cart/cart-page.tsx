import MetaTag from '@/components/meta-tag/meta-tag';
import CartContainer from '@/pages/cart/cart-container';

export default function CartPage(): JSX.Element {
  return (
    <div className='flex min-h-[80vh] items-center justify-center'>
      <MetaTag
        title='Kofebin | Cart'
        description='Check what you have ordered here in your cart!'
      />
      <CartContainer />
    </div>
  );
}
