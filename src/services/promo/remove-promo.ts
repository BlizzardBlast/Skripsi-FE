import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

type RemovePromoReturnType = {
  message: string;
};

const RemovePromo = async ({
  id
}: {
  id: string;
}): Promise<RemovePromoReturnType> => {
  try {
    const response: AxiosResponse<RemovePromoReturnType> =
      await AxiosInstance.postForm(`api/deletePromo/${id}`, {});
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

export default RemovePromo;
