import useSignedIn from '@/zustand/useSignedIn';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function useSignedInRoute(): void {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignedIn = useSignedIn((state) => state.isSignedIn);
  useEffect(() => {
    const privateRoutes = [
      '/profile',
      '/cart',
      '/find-your-coffee',
      '/find-your-coffee/result',
      '/transaction-history'
    ];
    const isPrivateRoute =
      privateRoutes.includes(location.pathname) ||
      location.pathname.startsWith('/transaction/');
    if (!isSignedIn && isPrivateRoute) {
      navigate('/');
    }

    const publicRoutes = ['/sign-in', '/sign-up'];
    if (isSignedIn && publicRoutes.includes(location.pathname)) {
      navigate('/');
    }
  }, [isSignedIn, location.pathname, navigate]);
}
