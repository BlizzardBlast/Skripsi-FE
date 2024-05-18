import {
  UserContext,
  type UserContextType
} from '@/context/user-context/user-provider';
import { useContext } from 'react';

export default function useUserContext(): UserContextType {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
}
