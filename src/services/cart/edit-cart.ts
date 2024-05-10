import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type GetAllCartReturn } from '@/types/services/cart/get-all-cart';
import { type ErrorResponses } from '@/types/services/error';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

const EditCart = async ({
  productId,
  quantity
}: {
  productId: number;
  quantity: number;
}): Promise<GetAllCartReturn[]> => {
  try {
    const response: AxiosResponse<GetAllCartReturn[]> =
      await AxiosInstance.postForm(`api/editQty`, {
        productId,
        quantity
      });
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

export default EditCart;
