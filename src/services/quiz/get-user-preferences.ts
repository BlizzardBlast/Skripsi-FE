import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import { type SetUserPreferencesResponse } from '@/types/services/quiz/set-user-preferences';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

const SetUserPreferences = async (
  answer: string[]
): Promise<SetUserPreferencesResponse> => {
  try {
    const response: AxiosResponse<SetUserPreferencesResponse> =
      await AxiosInstance.postForm('api/setUserPref', {
        type: answer[0],
        acidity: answer[1],
        mouthfeel: answer[2],
        sweetness: answer[3]
      });
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

export default SetUserPreferences;
