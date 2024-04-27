import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import { type LoginReturnType } from '@/types/services/login/login.ts';
import {
  type SignUpProps,
  type SignUpReturnType
} from '@/types/services/sign-up/sign-up.ts';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

const SignUp = async ({
  values,
  signal
}: {
  values: SignUpProps;
  signal: AbortSignal | null;
}): Promise<LoginReturnType> => {
  try {
    const response: AxiosResponse<SignUpReturnType> =
      await AxiosInstance.postForm(
        'api/sign-up',
        {
          email: values.email,
          username: values.username,
          name: values.name,
          password: values.password
        },
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

export default SignUp;
