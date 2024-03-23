import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import { type Product } from '@/types/services/shop/shop.ts';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

const FilterByBean = async ({
  beanType
}: {
  beanType: string;
}): Promise<Product[]> => {
  try {
    const response: AxiosResponse<Product[]> = await AxiosInstance.get(
      `api/filterByBean/${beanType}`
    );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(handleApiError(error as AxiosError<ErrorResponses>));
    } else {
      throw new Error('Error tidak terduga terjadi');
    }
  }
};

export default FilterByBean;
