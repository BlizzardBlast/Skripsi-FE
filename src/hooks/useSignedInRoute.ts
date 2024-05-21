import useUserContext from '@/context/user-context/useUserContext';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function useSignedInRoute(): boolean {
  const navigate = useNavigate();
  const location = useLocation();
  const { isSignedIn } = useUserContext();
  const [isSignedInRouteValidated, setIsSignedInRouteValidated] =
    useState(false);

  useEffect(() => {
    const privateRoutes = [
      '/profile',
      '/cart',
      '/find-your-coffee',
      '/find-your-coffee/result',
      '/transaction-history',
      '/modify-product',
      '/add-product',
      '/promo',
      '/add-promo'
    ];
    const isPrivateRoute =
      privateRoutes.includes(location.pathname) ||
      location.pathname.startsWith('/transaction/') ||
      location.pathname.startsWith('/edit-product/');
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
