import { type Product } from '@/types/services/shop/shop';

export type GetAllCartReturn = {
  user_id: number;
  product: Product;
  quantity: number;
  roasting_type: 'low' | 'medium' | 'high';
};
