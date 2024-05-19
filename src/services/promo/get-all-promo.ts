import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import { type Promo } from '@/types/services/promo/promo';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

const GetAllPromo = async ({
  signal
}: {
  signal: AbortSignal | null;
}): Promise<Promo[]> => {
  try {
    const response: AxiosResponse<Promo[]> = await AxiosInstance.get(
      `api/getAllPromo`,
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

export default GetAllPromo;
