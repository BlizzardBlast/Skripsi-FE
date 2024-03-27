import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import { type LoginReturnType } from '@/types/services/login/login.ts';
import {
  type UpdateProfileProps,
  type UpdateProfileReturnType
} from '@/types/services/profile/update-profile.ts';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

const UpdateProfile = async ({
  values,
  id
}: {
  values: UpdateProfileProps;
  id: string | number;
}): Promise<LoginReturnType> => {
  try {
    const response: AxiosResponse<UpdateProfileReturnType> =
      await AxiosInstance.postForm(`api/postUpdateUserData/${id}`, {
        new_email: values.new_email,
        new_username: values.new_username,
        new_name: values.new_name
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

export default UpdateProfile;
