import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import { type SignOutReturnType } from '@/types/services/sign-out/sign-out.ts';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

const SignOut = async ({
  signOut
}: {
  signOut: () => void;
}): Promise<SignOutReturnType> => {
  try {
    const response: AxiosResponse<SignOutReturnType> =
      await AxiosInstance.postForm('api/sign-out', {});
    signOut();
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(handleApiError(error as AxiosError<ErrorResponses>));
    } else {
      throw new Error('Error tidak terduga terjadi');
    }
  }
};

export default SignOut;
