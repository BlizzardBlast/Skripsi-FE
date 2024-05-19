import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import type AddPromoValidationSchema from '@/pages/admin/promo/add-promo/add-promo-validation-schema';
import { type ErrorResponses } from '@/types/services/error';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';
import { type z } from 'zod';

type AddPromoReturnType = {
  message: string;
};

const AddPromo = async ({
  values,
  signal
}: {
  values: z.infer<typeof AddPromoValidationSchema>;
  signal: AbortSignal | null;
}): Promise<AddPromoReturnType> => {
  try {
    const response: AxiosResponse<AddPromoReturnType> =
      await AxiosInstance.postForm(
        'api/postPromo',
        {
          promo_code: values.promo_code,
          promo_expiry_date: values.promo_expiry_date,
          discount: values.discount,
          minimum: values.minimum,
          maximum: values.maximum
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

export default AddPromo;
