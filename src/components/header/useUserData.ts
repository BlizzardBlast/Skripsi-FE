import GetUserData from '@/services/home/get-user-data.ts';
import { type GetUserDataResponse } from '@/types/services/home/get-user-data.ts';
import { useEffect, useState } from 'react';

export default function useUserData(): GetUserDataResponse | undefined {
  const [user, setUser] = useState<GetUserDataResponse>();
  useEffect(() => {
    const fetchUserData = async (): Promise<void> => {
      try {
        const result = await GetUserData();
        setUser(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData().catch(() => {});
  }, []);

  return user;
}
