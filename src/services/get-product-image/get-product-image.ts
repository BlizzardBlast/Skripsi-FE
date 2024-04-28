import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import { type GetProductImageResponse } from '@/types/services/get-product-image/get-product-image.ts';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

const GetProductImage = async ({
  id,
  signal
}: {
  id: string | number;
  signal: AbortSignal | null;
}): Promise<string> => {
  try {
    const response: AxiosResponse<GetProductImageResponse> =
      await AxiosInstance.get(`api/getProductImage/${id}`, {
        signal: signal as AbortSignal
      });
    return response.data.image_base64;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(handleApiError(error as AxiosError<ErrorResponses>));
    } else {
      throw new Error('Error tidak terduga terjadi');
    }
  }
};

export default GetProductImage;
