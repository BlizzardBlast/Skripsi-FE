import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

type CreateTransactionProps = {
  promoCode: string;
};

type CreateTransactionReturn = {
  message: string;
};

const CreateTransaction = async ({
  promoCode
}: CreateTransactionProps): Promise<CreateTransactionReturn> => {
  try {
    const response: AxiosResponse<CreateTransactionReturn> =
      await AxiosInstance.postForm(`api/postOrder`, {
        promo_code: promoCode
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

export default CreateTransaction;
