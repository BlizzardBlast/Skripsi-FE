import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type Transaction } from '@/pages/transaction/columns';
import { type ErrorResponses } from '@/types/services/error';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

const GetTransaction = async (): Promise<Transaction[]> => {
  try {
    const response: AxiosResponse<Transaction[]> =
      await AxiosInstance.get(`api/getOrder`);
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

export default GetTransaction;
