import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import { type GetPaymentResponse } from '@/types/services/payment/payment.ts';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

export const CreatePayment = async (
  amount: number
): Promise<GetPaymentResponse> => {
  try {
    const response: AxiosResponse<GetPaymentResponse> = await AxiosInstance.get(
      `api/create/${amount}`
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

export const CompletePayment = async (): Promise<GetPaymentResponse> => {
  try {
    const response: AxiosResponse<GetPaymentResponse> =
      await AxiosInstance.post('api/complete', {});
    console.log(response);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(handleApiError(error as AxiosError<ErrorResponses>));
    } else {
      throw new Error('Error tidak terduga terjadi');
    }
  }
};
