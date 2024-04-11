import FilterByBean from '@/services/filter-by-bean/filter-by-bean.ts';
import GetProduct from '@/services/shop/shop.ts';
import { type Product } from '@/types/services/shop/shop.ts';

export default async function FetchProductFunction({
  selectedTag,
  signal
}: {
  selectedTag: string;
  signal: AbortSignal | null;
}): Promise<Product[]> {
  if (selectedTag !== '') {
    return await FilterByBean({
      beanType: selectedTag,
      signal
    });
  } else {
    return await GetProduct({
      signal
    });
  }
}
