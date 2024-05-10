/* eslint-disable security/detect-object-injection */
import { useToast } from '@/components/ui/use-toast.ts';
import { useCartContext } from '@/context/cart-context/useCartContext';
import AddToCart from '@/services/cart/add-to-cart';
import { type Product } from '@/types/services/shop/shop.ts';
import useSignedIn from '@/zustand/useSignedIn.ts';
import { useState } from 'react';
type UseHandleProductProps = {
  product: Product;
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
};

type UseHandleProductReturnType = {
  quantity: string;
  handleQuantityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddToCart: (index: number) => Promise<void>;
};

export default function useHandleProduct({
  product,
  setIsAdding
}: Readonly<UseHandleProductProps>): Readonly<UseHandleProductReturnType> {
  const [quantity, setQuantity] = useState<string>('');
  const isSignedIn = useSignedIn((state) => state.isSignedIn);
  const { refetchCart } = useCartContext();
  const { toast } = useToast();
  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    const onlyNumbersQuantity = value.replace(/\D/g, '');
    setQuantity(onlyNumbersQuantity);
  };

  const handleAddToCart = async (index: number): Promise<void> => {
    if (!isSignedIn) {
      setQuantity('');
      toast({
        variant: 'destructive',
        title: 'You must be signed in.',
        description: 'Please sign in to add products to cart.'
      });
      return;
    }
    const qty = parseInt(quantity);
    if (!isNaN(qty) && qty > 0) {
      setIsAdding(true);
      try {
        await AddToCart({ productId: product.id, quantity: qty });
        refetchCart();
        setIsAdding(false);
      } catch (error) {
        setIsAdding(false);
        console.error(error);
      }
      setQuantity('');
      toast({
        title: 'Product added!',
        description: 'Product has been added to cart successfully.'
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Please input a correct number.'
      });
    }
  };

  return { quantity, handleQuantityChange, handleAddToCart } as const;
}
