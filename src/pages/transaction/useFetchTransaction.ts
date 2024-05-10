import { useToast } from '@/components/ui/use-toast';
import { type Transaction } from '@/pages/transaction/columns';
import GetTransaction from '@/services/transaction/get-transaction';
import { useEffect, useState } from 'react';

type UseFetchTransactionReturnType = {
  data: Transaction[];
  isLoading: boolean;
};

export default function useFetchTransaction(): UseFetchTransactionReturnType {
  const [data, setData] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  useEffect(() => {
    const fetchTransaction = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const result = await GetTransaction();
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
  }, [toast]);

  return { data, isLoading } as const;
}
