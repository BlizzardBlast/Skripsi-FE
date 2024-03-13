import { LoginInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import {
  type LoginProps,
  type LoginReturnType
} from '@/types/services/login/login.ts';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

// Login Service
const Login = async ({
  values
}: {
  values: LoginProps;
}): Promise<LoginReturnType> => {
  try {
    const response: AxiosResponse<LoginReturnType> =
      await LoginInstance.postForm('sign-in', {
        email: values.email,
        password: values.password
      });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(handleApiError(error as AxiosError<ErrorResponses>));
    } else {
      throw new Error('Error tidak terduga terjadi');
    }
  }
};

export default Login;
