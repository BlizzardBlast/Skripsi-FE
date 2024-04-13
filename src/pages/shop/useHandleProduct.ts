/* eslint-disable security/detect-object-injection */
import { useToast } from '@/components/ui/use-toast.ts';
import { type GetProductResponse } from '@/types/services/shop/shop.ts';
import useCartStore from '@/zustand/useCartStore.ts';
import useSignedIn from '@/zustand/useSignedIn.ts';
import { useState } from 'react';
type UseHandleProductProps = {
  products: GetProductResponse;
};

type UseHandleProductReturnType = {
  quantities: string[];
  handleQuantityChange: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleAddToCart: (index: number) => void;
};

export default function useHandleProduct({
  products
}: Readonly<UseHandleProductProps>): Readonly<UseHandleProductReturnType> {
  const [quantities, setQuantities] = useState<string[]>(
    Array(products?.length).fill('')
  );
  const addToCart = useCartStore((state) => state.addToCart);
  const isSignedIn = useSignedIn((state) => state.isSignedIn);
  const { toast } = useToast();
  const handleQuantityChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    const onlyNumbersQuantity = value.replace(/\D/g, '');
    const newQuantities = [...quantities];
    newQuantities[index] = onlyNumbersQuantity;
    setQuantities(newQuantities);
  };

  const handleAddToCart = (index: number): void => {
    if (!isSignedIn) {
      const newQuantities = [...quantities];
      newQuantities[index] = '';
      setQuantities(newQuantities);
      toast({
        variant: 'destructive',
        title: 'You must be signed in.',
        description: 'Please sign in to add products to cart.'
      });
      return;
    }
    const quantity = parseInt(quantities[index]);
    if (!isNaN(quantity) && quantity > 0) {
      addToCart(products?.[index], quantity);
      const newQuantities = [...quantities];
      newQuantities[index] = '';
      setQuantities(newQuantities);
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

  return { quantities, handleQuantityChange, handleAddToCart } as const;
}
