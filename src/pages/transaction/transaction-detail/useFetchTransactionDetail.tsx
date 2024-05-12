import { useToast } from '@/components/ui/use-toast';
import GetTransactionDetail, {
  type GetTransactionDetailSingleResponse,
  type GetTransactionDetailResponse
} from '@/services/transaction/get-transaction-detail';
import { type Product } from '@/types/services/shop/shop';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type UseFetchTransactionDetailReturnType = {
  data: GetTransactionDetailResponse;
  isLoading: boolean;
  newData: Array<Omit<GetTransactionDetailSingleResponse, 'product'> & Product>;
};

export default function useFetchTransactionDetail(): UseFetchTransactionDetailReturnType {
  const [data, setData] = useState<GetTransactionDetailResponse>([
    {
      id: 0,
      quantity: 0,
      product_id: 0,
      order_id: 0,
      user_id: 0,
      created_at: '',
      updated_at: '',
      product: {
        id: 0,
        name: '',
        type: '',
        price: 0,
        subname: '',
        origin: '',
        description: '',
        acidity: '',
        flavor: '',
        aftertaste: '',
        sweetness: '',
        created_at: null,
        updated_at: null
      }
    }
  ]);
  const newData = data.map(({ product, ...rest }) => {
    const { id, ...productRest } = product;
    return { ...rest, ...productRest };
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  useEffect(() => {
    const fetchTransaction = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const result = await GetTransactionDetail({ id });
        setData(result);
        setIsLoading(false);
      } catch (error) {
        const err = error as Error;
        if (err.name === 'CanceledError') {
          return;
        }
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'Transaction History could not be fetched.'
        });
        setIsLoading(false);
      }
    };

    fetchTransaction().catch(() => {});
  }, [toast, id]);

  return { data, isLoading, newData } as const;
}
