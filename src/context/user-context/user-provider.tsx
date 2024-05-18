import GetUserData from '@/services/home/get-user-data.ts';
import { type GetUserDataResponse } from '@/types/services/home/get-user-data.ts';
import useSignedIn from '@/zustand/useSignedIn.ts';
import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from 'react';

export type UserContextType = {
  user: GetUserDataResponse | undefined;
  isPending: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
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

  const value = useMemo(() => ({ user, isPending }), [user, isPending]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
