export type Product = {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
  created_at: string;
  updated_at: string;
};

export type GetProductResponse = Product[];
