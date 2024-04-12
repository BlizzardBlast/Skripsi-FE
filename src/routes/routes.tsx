import Layout from '@/layout/layout.tsx';
import BrewingPage from '@/pages/brewing/brewing.tsx';
import CartPage from '@/pages/cart/cart-page.tsx';
import FindYourCoffeeResultPage from '@/pages/find-your-coffee-result/find-your-coffee-result.tsx';
import FindYourCoffeePage from '@/pages/find-your-coffee/find-your-coffee.tsx';
import Home from '@/pages/home/home.tsx';
import ProductDetail from '@/pages/product/product-detail.tsx';
import ProfilePage from '@/pages/profile/profile.tsx';
import Shop from '@/pages/shop/shop-page.tsx';
import SignInPage from '@/pages/sign-in/sign-in';
import SignUpPage from '@/pages/sign-up/sign-up';
import RootErrorElement from '@/routes/Error Element/root.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sign-in',
        element: <SignInPage />
      },
      {
        path: '/sign-up',
        element: <SignUpPage />
      },
      {
        path: '/profile',
        element: <ProfilePage />
      },
      {
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/brewing',
        element: <BrewingPage />
      },
      {
        path: '/find-your-coffee',
        element: <FindYourCoffeePage />
      },
      {
        path: '/find-your-coffee/result',
        element: <FindYourCoffeeResultPage />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/product',
        children: [
          {
            path: ':id',
            element: <ProductDetail />
          }
        ]
      }
    ],
    errorElement: <RootErrorElement />
  }
]);

export default function Routes(): JSX.Element {
  return <RouterProvider router={router} />;
}
