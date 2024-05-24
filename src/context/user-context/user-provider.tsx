import GetUserData from '@/services/home/get-user-data.ts';
import { type GetUserDataResponse } from '@/types/services/home/get-user-data.ts';
import {
  createContext,
  type FC,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

export type UserContextType = {
  user: GetUserDataResponse | undefined;
  isPending: boolean;
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<GetUserDataResponse>();
  const [isPending, setIsPending] = useState(true);

  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  const signIn = useCallback((): void => {
    setIsSignedIn(true);
  }, []);

  const signOut = useCallback((): void => {
    setIsSignedIn(false);
    setUser(undefined);
  }, []);

  useEffect(() => {
    const fetchUserData = async (): Promise<void> => {
      setIsPending(true);
      try {
        const result = await GetUserData();
        if (Object.keys(result).length <= 0) {
          signOut();
        } else {
          setUser(result);
          signIn();
        }
      } catch (error) {
        signOut();
        console.error(error);
      } finally {
        setIsPending(false);
      }
    };

    fetchUserData().catch(() => {});
  }, [isSignedIn, signIn, signOut]);

  const value = useMemo(
    () => ({ user, isPending, isSignedIn, signIn, signOut }),
    [user, isPending, isSignedIn, signIn, signOut]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
