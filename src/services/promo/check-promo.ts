import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type ErrorResponses } from '@/types/services/error';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

type CheckPromoReturnType = {
  discount: number;
};

const CheckPromo = async ({
  promoCode,
  totalPrice
}: {
  promoCode: string;
  totalPrice: number;
}): Promise<CheckPromoReturnType> => {
  try {
    const response: AxiosResponse<CheckPromoReturnType> =
      await AxiosInstance.postForm('api/checkPromo', {
        promo_code: promoCode,
        total_price: totalPrice
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

export default CheckPromo;
