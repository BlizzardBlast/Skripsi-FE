import useSignedIn from '@/zustand/useSignedIn';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function useSignedInRoute(): boolean {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignedIn = useSignedIn((state) => state.isSignedIn);
  const [isSignedInRouteValidated, setIsSignedInRouteValidated] =
    useState(false);

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
    setIsSignedInRouteValidated(true);
  }, [isSignedIn, location.pathname, navigate]);

  return isSignedInRouteValidated;
}
