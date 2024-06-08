import { type Product } from '@/types/services/shop/shop';

export type RoastingType = 'light' | 'medium' | 'dark';

export type GetAllCartReturn = {
  user_id: number;
  product: Product;
  quantity: number;
  roasting_type: RoastingType;
};
