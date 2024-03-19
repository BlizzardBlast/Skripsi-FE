import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import { type GetUserDataResponse } from '@/types/services/home/get-user-data.ts';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

const GetUserData = async (): Promise<GetUserDataResponse> => {
  try {
    const response: AxiosResponse<GetUserDataResponse> =
      await AxiosInstance.get('api/getUserData');
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(handleApiError(error as AxiosError<ErrorResponses>));
    } else {
      throw new Error('Error tidak terduga terjadi');
    }
  }
};

export default GetUserData;
