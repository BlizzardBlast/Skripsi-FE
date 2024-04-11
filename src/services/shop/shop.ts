import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import {
  type GetProductProps,
  type GetProductResponse
} from '@/types/services/shop/shop.ts';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

const GetProduct = async ({
  signal
}: GetProductProps): Promise<GetProductResponse> => {
  try {
    const response: AxiosResponse<GetProductResponse> = await AxiosInstance.get(
      'api/getProduct',
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

export default GetProduct;
