import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import { type GetProductResponse } from '@/types/services/shop/shop.ts';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

// Login Service
const GetProduct = async (): Promise<GetProductResponse> => {
  try {
    const response: AxiosResponse<GetProductResponse> =
      await AxiosInstance.get('getProduct');
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(handleApiError(error as AxiosError<ErrorResponses>));
    } else {
      throw new Error('Error tidak terduga terjadi');
    }
  }
};

export default GetProduct;
