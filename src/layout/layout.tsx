import Footer from '@/components/footer/footer.tsx';
import Header from '@/components/header/header.tsx';
import Spinner from '@/components/spinner/spinner';
import { Toaster } from '@/components/ui/toaster.tsx';
import useUserContext from '@/context/user-context/useUserContext';
import useProtectedRoute from '@/hooks/useProtectedRoute';
import useSignedInRoute from '@/hooks/useSignedInRoute';
import { Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
  const { isSignedIn } = useUserContext();
  const isSignedInRouteValidated = useSignedInRoute({ isSignedIn });
  const isProtectedRouteValidated = useProtectedRoute({ isSignedIn });

  if (!isSignedInRouteValidated || !isProtectedRouteValidated) {
    return (
      <div className='flex h-[100svh] w-full items-center justify-center'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='w-full'>
      <Header />
      <Toaster />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
