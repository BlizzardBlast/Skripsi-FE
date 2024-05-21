import useUserContext from '@/context/user-context/useUserContext';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const adminOnlyRoutes = ['/modify-product', '/add-product', '/edit-product'];
const memberOnlyRoutes = [
  '/shop',
  '/product',
  '/cart',
  '/transaction-history',
  '/transaction'
];

export default function useProtectedRoute(): boolean {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isPending, isSignedIn } = useUserContext();
  const [isProtectedRouteValidated, setIsProtectedRouteValidated] =
    useState(false);

  useEffect(() => {
    if (!isPending) {
      const isMemberRoute = memberOnlyRoutes.some((route) =>
        location.pathname.startsWith(route)
      );
      const isAdminRoute = adminOnlyRoutes.some((route) =>
        location.pathname.startsWith(route)
      );

      if (
        (user?.role === 'admin' && isMemberRoute) ||
        (user?.role === 'member' && isAdminRoute)
      ) {
        navigate('/');
      }
      setIsProtectedRouteValidated(true);
    }
  }, [isSignedIn, user?.role, location.pathname, navigate, isPending]);

  return isProtectedRouteValidated;
}
