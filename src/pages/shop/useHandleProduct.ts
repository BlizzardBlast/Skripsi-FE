/* eslint-disable security/detect-object-injection */
import { useToast } from '@/components/ui/use-toast.ts';
import { useCartContext } from '@/context/cart-context/useCartContext';
import useUserContext from '@/context/user-context/useUserContext';
import AddToCart from '@/services/cart/add-to-cart';
import { type Product } from '@/types/services/shop/shop.ts';
import { useState } from 'react';
type UseHandleProductProps = {
  product: Product;
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
};

type UseHandleProductReturnType = {
  quantity: string;
  roastingType: '' | 'low' | 'medium' | 'high';
  handleQuantityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRoastingTypeChange: (newValue: 'low' | 'medium' | 'high') => void;
  handleAddToCart: () => Promise<void>;
};

export default function useHandleProduct({
  product,
  setIsAdding
}: Readonly<UseHandleProductProps>): Readonly<UseHandleProductReturnType> {
  const [quantity, setQuantity] = useState<string>('');
  const [roastingType, setRoastingType] = useState<
    'low' | 'medium' | 'high' | ''
  >('');
  const { isSignedIn } = useUserContext();
  const { refetchCart } = useCartContext();
  const { toast } = useToast();
  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    const onlyNumbersQuantity = value.replace(/\D/g, '');
    setQuantity(onlyNumbersQuantity);
  };

  const handleRoastingTypeChange = (
    newValue: 'low' | 'medium' | 'high'
  ): void => {
    setRoastingType(newValue);
  };

  const showToast = (
    variant: 'destructive' | 'default' | null | undefined,
    title: string,
    description: string
  ): void => {
    toast({
      variant,
      title,
      description
    });
  };

  const validateSignedIn = (): boolean => {
    if (!isSignedIn) {
      showToast(
        'destructive',
        'You must be signed in.',
        'Please sign in to add products to cart.'
      );
      setRoastingType('');
      setQuantity('');
      return false;
    }
    return true;
  };

  const validateQuantity = (): boolean => {
    const qty = parseInt(quantity);
    if (isNaN(qty) || qty <= 0) {
      showToast(
        'destructive',
        'Uh oh! Something went wrong.',
        'Please input a correct number.'
      );
      return false;
    }
    return true;
  };

  const validateRoastingType = (): boolean => {
    if (roastingType === '') {
      showToast(
        'destructive',
        'Please select roasting type.',
        'Please select the roasting type of the product.'
      );
      return false;
    }
    return true;
  };

  const handleAddToCart = async (): Promise<void> => {
    if (!validateSignedIn() || !validateQuantity() || !validateRoastingType()) {
      return;
    }

    setIsAdding(true);
    try {
      await AddToCart({
        productId: product.id,
        quantity: parseInt(quantity),
        roastingType: roastingType as 'low' | 'medium' | 'high'
      });
      refetchCart();
      showToast(
        'default',
        'Product added!',
        'Product has been added to cart successfully.'
      );
    } catch (error) {
      showToast(
        'destructive',
        'Uh oh! Something went wrong.',
        'Failed to add product to cart.'
      );
    } finally {
      setIsAdding(false);
      setRoastingType('');
      setQuantity('');
    }
  };

  return {
    quantity,
    roastingType,
    handleQuantityChange,
    handleRoastingTypeChange,
    handleAddToCart
  } as const;
}
