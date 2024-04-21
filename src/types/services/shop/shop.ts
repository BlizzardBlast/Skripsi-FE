export type Product = {
  id: number;
  name: string;
  subname: string;
  origin: string;
  type: string;
  price: number;
  description: string;
  acidity: string;
  flavor: string;
  aftertaste: string;
  sweetness: string;
  created_at: string | null;
  updated_at: string | null;
};

export type GetProductProps = {
  signal: AbortSignal | null;
};

export type GetProductResponse = Product[];
