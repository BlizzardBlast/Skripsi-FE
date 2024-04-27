import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import {
  type LoginProps,
  type LoginReturnType
} from '@/types/services/login/login.ts';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

const Login = async ({
  values,
  signIn,
  signal
}: {
  values: LoginProps;
  signIn: () => void;
  signal: AbortSignal | null;
}): Promise<LoginReturnType> => {
  try {
    const response: AxiosResponse<LoginReturnType> =
      await AxiosInstance.postForm(
        'api/sign-in',
        {
          email: values.email,
          password: values.password
        },
        {
          signal: signal as AbortSignal
        }
      );
    signIn();
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

export default Login;
