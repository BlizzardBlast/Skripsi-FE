import { AxiosInstance } from '@/helper/instance/axios-instance.ts';
import { type GetAllCartReturn } from '@/types/services/cart/get-all-cart';
import { type ErrorResponses } from '@/types/services/error';
import handleApiError from '@/utils/handle-api-error.ts';
import { AxiosError, type AxiosResponse } from 'axios';

type CreateTransactionProps = {
  totalPrice: number;
  cart: GetAllCartReturn[];
};

type CreateTransactionReturn = {
  message: string;
};

const CreateTransaction = async ({
  totalPrice,
  cart
}: CreateTransactionProps): Promise<CreateTransactionReturn> => {
  try {
    const orderDetails = cart.map((item) => ({
      product_id: item.product.id,
      quantity: item.quantity
    }));
    const response: AxiosResponse<CreateTransactionReturn> =
      await AxiosInstance.postForm(`api/postOrder`, {
        confirmation: 'paid',
        total_price: totalPrice,
        details: orderDetails
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

export default CreateTransaction;
