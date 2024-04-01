/* eslint-disable security/detect-object-injection */
import TrashIcon from '@/assets/trash_icon.svg';
import LoadImage from '@/components/load-image/load-image.tsx';
import MetaTag from '@/components/meta-tag/meta-tag';
import HeadingFour from '@/components/typography/headingFour.tsx';
import HeadingOne from '@/components/typography/headingOne.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';
import { Button } from '@/components/ui/button.tsx';
import useCartStore from '@/zustand/useCartStore.ts';

export default function CartPage(): JSX.Element {
  const cart = useCartStore((state) => state.cart);
  const changeProductQuantity = useCartStore(
    (state) => state.changeProductQuantity
  );
  const removeProduct = useCartStore((state) => state.removeProduct);
  const quantities = cart.map((product) => String(product.quantity));
  const totalPrice = (): number => {
    let sum = 0;
    cart.forEach((product) => {
      sum = sum + product.product.price * product.quantity;
    });
    return sum;
  };

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { value } = event.target;
    const onlyNumbersQuantity = value.replace(/\D/g, '');
    const newQuantities = [...quantities];
    newQuantities[index] = onlyNumbersQuantity;
    changeProductQuantity(index, Number(newQuantities[index] ?? 0));
  };

  const handleChangeProductQuantity = (
    quantity: number,
    index: number
  ): void => {
    if (!isNaN(quantity) && quantity > 0) {
      changeProductQuantity(index, quantity);
    }
  };

  if (cart.length === 0) {
    return (
      <div className='flex min-h-[80vh] items-center justify-center'>
        <MetaTag
          title='Kofebin | Cart'
          description='Check what you have ordered here in your cart!'
        />
        <div className='min-h-[80vh] w-full items-center justify-center px-20 py-10'>
          <HeadingOne>There is no product in cart yet.</HeadingOne>
          <Paragraph>Please buy a product first.</Paragraph>
        </div>
      </div>
    );
  }

  return (
    <div className='flex min-h-[80vh] items-center justify-center'>
      <MetaTag
        title='Kofebin | Cart'
        description='Check what you have ordered here in your cart!'
      />
      <div className='min-h-[80vh] w-full px-20 py-10'>
        <h1 className='mb-4 scroll-m-20 text-5xl font-bold tracking-tight'>
          Cart
        </h1>
        {cart.map((product, index) => (
          <div
            className='mb-5 flex w-full flex-wrap justify-between rounded-xl bg-white p-5 drop-shadow-[3px_3px_3px_#E48F45]'
            key={product.product.id}
          >
            <div className='flex'>
              <LoadImage
                source={'errorImage'}
                alternative='Image'
                lazy
                classes='w-20 h-20 rounded-lg'
              />
              <div className='ms-3 flex flex-col justify-center'>
                <Paragraph className='font-semibold'>
                  {product.product.name}
                </Paragraph>
                <Paragraph className='text-nowrap font-semibold'>
                  Price: {product.product.price}
                </Paragraph>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <Button
                className='me-5 h-8 w-8 rounded-full p-5 text-2xl'
                onClick={() => {
                  handleChangeProductQuantity(
                    Number(quantities[index]) - 1,
                    index
                  );
                }}
              >
                -
              </Button>
              <input
                id={`product-${product.product.id}`}
                type='text'
                value={quantities[index] ?? ''}
                onChange={(event) => {
                  handleQuantityChange(event, index);
                }}
                className='w-14 rounded-md border border-black px-3 text-black'
              />
              <Button
                className='ms-5 h-8 w-8 rounded-full p-5 text-2xl'
                onClick={() => {
                  handleChangeProductQuantity(
                    Number(quantities[index]) + 1,
                    index
                  );
                }}
              >
                +
              </Button>
              <LoadImage
                source={TrashIcon}
                alternative='Delete Product'
                lazy
                classes='w-10 h-10 rounded-lg ms-10'
                onClick={() => {
                  removeProduct(index);
                }}
              />
            </div>
          </div>
        ))}
        <div className='text-right'>
          <HeadingFour>Total: {totalPrice()}</HeadingFour>
          <Button className='bg-tertiary-color text-primary-text-color hover:bg-secondary-color hover:text-white'>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
