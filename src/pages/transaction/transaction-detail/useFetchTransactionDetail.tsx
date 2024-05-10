import { useToast } from '@/components/ui/use-toast';
import GetTransactionDetail, {
  type GetTransactionDetailResponse
} from '@/services/transaction/get-transaction-detail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type UseFetchTransactionDetailReturnType = {
  data: GetTransactionDetailResponse | undefined;
  isLoading: boolean;
};

export default function useFetchTransactionDetail(): UseFetchTransactionDetailReturnType {
  const [data, setData] = useState<GetTransactionDetailResponse | undefined>(
    undefined
  );
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

  return { data, isLoading } as const;
}
