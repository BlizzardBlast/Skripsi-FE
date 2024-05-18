import GetUserData from '@/services/home/get-user-data.ts';
import { type GetUserDataResponse } from '@/types/services/home/get-user-data.ts';
import useSignedIn from '@/zustand/useSignedIn.ts';
import { useEffect, useState } from 'react';

type UseUserDataReturnType = {
  user: GetUserDataResponse | undefined;
  isPending: boolean;
};

export default function useUserData(): UseUserDataReturnType {
  const [user, setUser] = useState<GetUserDataResponse>();
  const isSignedIn = useSignedIn((state) => state.isSignedIn);
  const signIn = useSignedIn((state) => state.signIn);
  const signOut = useSignedIn((state) => state.signOut);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchUserData = async (): Promise<void> => {
      setIsPending(true);
      try {
        const result = await GetUserData();
        if (Object.keys(result).length <= 0) {
          setUser(undefined);
          signOut();
        } else {
          setUser(result);
          signIn();
        }
        setIsPending(false);
      } catch (error) {
        setIsPending(false);
        console.error(error);
      }
    };

    fetchUserData().catch(() => {});
  }, [isSignedIn, signIn, signOut]);

  return { user, isPending } as const;
}
