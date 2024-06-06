import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import type AddProductValidationSchema from '@/pages/admin/add-product/add-product-validation-schema';
import { type ErrorResponses } from '@/types/services/error';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';
import { type z } from 'zod';

type EditProductReturnType = {
  message: string;
};

const EditProduct = async ({
  values,
  id,
  signal
}: {
  values: z.infer<typeof AddProductValidationSchema>;
  id: string;
  signal: AbortSignal | null;
}): Promise<EditProductReturnType> => {
  try {
    const response: AxiosResponse<EditProductReturnType> =
      await AxiosInstance.postForm(
        `api/editProduct/${id}`,
        {
          new_name: values.name,
          new_subname: values.subname,
          new_origin: values.origin,
          new_type: values.type,
          new_description: values.description,
          new_price: values.price,
          new_acidity: values.acidity,
          new_flavor: values.flavor,
          new_aftertaste: values.aftertaste,
          new_sweetness: values.sweetness,
          new_image:
            values.image.name === 'placeholder.png' ? undefined : values.image
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

export default EditProduct;
