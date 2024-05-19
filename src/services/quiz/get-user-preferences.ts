import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import { type GetUserPreferencesResponse } from '@/types/services/quiz/get-user-preferences';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

export const GetRefreshedUserPreferences =
  async (): Promise<GetUserPreferencesResponse> => {
    try {
      const response: AxiosResponse<GetUserPreferencesResponse> =
        await AxiosInstance.get('api/getUserPref/true');
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw new Error(handleApiError(error as AxiosError<ErrorResponses>));
      } else {
        throw new Error('Error tidak terduga terjadi');
      }
    }
  };

export const GetNotRefreshedUserPreferences =
  async (): Promise<GetUserPreferencesResponse> => {
    try {
      const response: AxiosResponse<GetUserPreferencesResponse> =
        await AxiosInstance.get('api/getUserPref/false');
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw new Error(handleApiError(error as AxiosError<ErrorResponses>));
      } else {
        throw new Error('Error tidak terduga terjadi');
      }
    }
  };
