import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import type AddProductValidationSchema from '@/pages/admin/add-product/add-product-validation-schema';
import { type ErrorResponses } from '@/types/services/error';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';
import { type z } from 'zod';

type AddProductReturnType = {
  message: string;
};

const AddProduct = async ({
  values,
  signal
}: {
  values: z.infer<typeof AddProductValidationSchema>;
  signal: AbortSignal | null;
}): Promise<AddProductReturnType> => {
  try {
    const response: AxiosResponse<AddProductReturnType> =
      await AxiosInstance.postForm(
        'api/addProduct',
        {
          name: values.name,
          subname: values.subname,
          origin: values.origin,
          type: values.type,
          description: values.description,
          price: values.price,
          acidity: values.acidity,
          flavor: values.flavor,
          aftertaste: values.aftertaste,
          sweetness: values.sweetness,
          image: values.image
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

export default AddProduct;
