import { useToast } from '@/components/ui/use-toast';
import SignOut from '@/services/sign-out/sign-out';
import useCartStore from '@/zustand/useCartStore';
import useSignedIn from '@/zustand/useSignedIn';
import { useState } from 'react';

type UseHandleSignOutReturnType = {
  isLoading: boolean;
  handleSignOut: () => Promise<void>;
};

export default function useHandleSignOut(): UseHandleSignOutReturnType {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const signOut = useSignedIn((state) => state.signOut);
  const resetCart = useCartStore((state) => state.resetCart);
  const handleSignOut = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await SignOut({ signOut });
      resetCart();
      toast({
        title: 'You have signed out!',
        description: 'Sign out is successful!'
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      const err = error as Error;
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.'
      });
      console.error(err);
      throw err;
    }
  };

  return { isLoading, handleSignOut } as const;
}
