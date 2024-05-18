import CartIndividualProduct from '@/pages/cart/cart-individual-product';
import { type GetAllCartReturn } from '@/types/services/cart/get-all-cart';

type CartProductProps = {
  cart: GetAllCartReturn[];
};

export default function CartProducts({
  cart
}: Readonly<CartProductProps>): JSX.Element {
  return (
    <>
      {cart.map((product) => (
        <CartIndividualProduct product={product} key={product.product.id} />
      ))}
    </>
  );
}
