export type GetUserPreferencesResponse = Array<{
  id: number;
  name: string;
  subname: string;
  origin: string;
  characteristic: string;
  type: string;
  price: number;
  description: string;
  acidity: string;
  mouthfeel: string;
  sweetness: string;
  created_at: string | null;
  updated_at: string | null;
  score: number;
}>;
