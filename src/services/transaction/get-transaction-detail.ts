import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import { type Product } from '@/types/services/shop/shop';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

type GetTransactionDetailProps = {
  id: number;
};

export type GetTransactionDetailResponse = {
  id: number;
  quantity: number;
  product_id: number;
  order_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  product: Product[];
};

const GetTransactionDetail = async ({
  id
}: GetTransactionDetailProps): Promise<GetTransactionDetailResponse> => {
  try {
    const response: AxiosResponse<GetTransactionDetailResponse> =
      await AxiosInstance.get(`api/getOrderSpecific/${id}`);
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

export default GetTransactionDetail;
