/* eslint-disable security/detect-object-injection */
import TrashIcon from '@/assets/trash_icon.svg';
import LoadImage from '@/components/load-image/load-image.tsx';
import { Button } from '@/components/ui/button.tsx';
import useCartStore, { type CartItem } from '@/zustand/useCartStore.ts';

type CartProductsHandlerProps = {
  cart: CartItem[];
  product: CartItem;
  index: number;
};

export default function CartProductsHandler({
  cart,
  product,
  index
}: Readonly<CartProductsHandlerProps>): JSX.Element {
  const changeProductQuantity = useCartStore(
    (state) => state.changeProductQuantity
  );
  const removeProduct = useCartStore((state) => state.removeProduct);
  const quantities = cart.map((product) => String(product.quantity));

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
  return (
    <div className='flex items-center justify-center'>
      <Button
        className='me-5 h-8 w-8 rounded-full p-5 text-2xl'
        onClick={() => {
          handleChangeProductQuantity(Number(quantities[index]) - 1, index);
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
          handleChangeProductQuantity(Number(quantities[index]) + 1, index);
        }}
      >
        +
      </Button>
      <LoadImage
        source={TrashIcon}
        alternative='Delete Product'
        lazy
        classes='w-10 h-10 rounded-lg ms-10 cursor-pointer'
        onClick={() => {
          removeProduct(index);
        }}
      />
    </div>
  );
}
