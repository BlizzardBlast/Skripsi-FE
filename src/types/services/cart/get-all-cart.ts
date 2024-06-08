import { type RoastingType } from '@/types/product';
import { type Product } from '@/types/services/shop/shop';

export type GetAllCartReturn = {
  user_id: number;
  product: Product;
  quantity: number;
  roasting_type: RoastingType;
};
