import { type Product } from '@/types/services/shop/shop';

export type GetUserPreferencesResponse = Array<
  Product & {
    score: number;
  }
>;
