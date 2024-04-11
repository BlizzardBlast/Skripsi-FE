import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import { type Product } from '@/types/services/shop/shop.ts';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

const FilterByBean = async ({
  beanType,
  signal
}: {
  beanType: string;
  signal: AbortSignal | null;
}): Promise<Product[]> => {
  try {
    const response: AxiosResponse<Product[]> = await AxiosInstance.get(
      `api/filterByBean/${beanType}`,
      {
        signal: signal as AbortSignal
      }
    );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.name === 'CanceledError') throw error;
      throw new Error(handleApiError(error as AxiosError<ErrorResponses>));
    } else {
      throw new Error('Error tidak terduga terjadi');
    }
  }
};

export default FilterByBean;
