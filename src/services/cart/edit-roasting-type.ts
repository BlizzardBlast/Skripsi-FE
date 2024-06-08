import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type RoastingType } from '@/types/product';
import { type ErrorResponses } from '@/types/services/error';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

type EditRoastingTypeReturn = {
  message: string;
};

const EditRoastingType = async ({
  productId,
  roastingType
}: {
  productId: number;
  roastingType: RoastingType;
}): Promise<EditRoastingTypeReturn> => {
  try {
    const response: AxiosResponse<EditRoastingTypeReturn> =
      await AxiosInstance.postForm(`api/changeRoastingType`, {
        productId,
        roasting_type: roastingType
      });
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

export default EditRoastingType;
