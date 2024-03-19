import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface SignedInState {
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
}

const useSignedIn = create<SignedInState>()(
  devtools(
    persist(
      (set) => ({
        isSignedIn: false,
        signIn: () => {
          set(() => ({ isSignedIn: true }));
        },
        signOut: () => {
          set(() => ({ isSignedIn: false }));
        }
      }),
      {
        name: 'signedIn',
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
);

export default useSignedIn;
