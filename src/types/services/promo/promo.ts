export type Promo = {
  id: number;
  promo_code: string;
  promo_expiry_date: string;
  discount: number;
  minimum: number;
  maximum: number;
  created_at: string | null;
  updated_at: string | null;
};
