import { useToast } from '@/components/ui/use-toast';
import useUserContext from '@/context/user-context/useUserContext';
import SignOut from '@/services/sign-out/sign-out';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type UseHandleSignOutReturnType = {
  isLoading: boolean;
  handleSignOut: () => Promise<void>;
};

export default function useHandleSignOut(): UseHandleSignOutReturnType {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { signOut } = useUserContext();
  const navigate = useNavigate();
  const handleSignOut = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await SignOut({ signOut });
      toast({
        title: 'You have signed out!',
        description: 'Sign out is successful!'
      });
      setIsLoading(false);
      navigate('/');
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
