import GetUserData from '@/services/home/get-user-data.ts';
import { type GetUserDataResponse } from '@/types/services/home/get-user-data.ts';
import useSignedIn from '@/zustand/useSignedIn.ts';
import { useEffect, useState } from 'react';

export default function useUserData(): GetUserDataResponse | undefined {
  const [user, setUser] = useState<GetUserDataResponse>();
  const isSignedIn = useSignedIn((state) => state.isSignedIn);
  const signIn = useSignedIn((state) => state.signIn);
  const signOut = useSignedIn((state) => state.signOut);

  useEffect(() => {
    const fetchUserData = async (): Promise<void> => {
      try {
        const result = await GetUserData();
        if (Object.keys(result).length <= 0) {
          setUser(undefined);
          signOut();
        } else {
          setUser(result);
          signIn();
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData().catch(() => {});
  }, [isSignedIn, signIn, signOut]);

  return user;
}
