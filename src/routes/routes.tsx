import Layout from '@/layout/layout.tsx';
import BrewingPage from '@/pages/brewing/brewing.tsx';
import ProductDetail from '@/pages/product/product-detail.tsx';
import Shop from '@/pages/shop/shop-page.tsx';
import RootErrorElement from '@/routes/Error Element/root.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        lazy: async () => {
          const { default: Home } = await import('@/pages/home/home.tsx');
          return { Component: Home };
        }
      },
      {
        path: '/sign-in',
        lazy: async () => {
          const { default: SignInPage } = await import(
            '@/pages/sign-in/sign-in.tsx'
          );
          return { Component: SignInPage };
        }
      },
      {
        path: '/sign-up',
        lazy: async () => {
          const { default: SignUpPage } = await import(
            '@/pages/sign-up/sign-up.tsx'
          );
          return { Component: SignUpPage };
        }
      },
      {
        path: '/profile',
        lazy: async () => {
          const { default: ProfilePage } = await import(
            '@/pages/profile/profile.tsx'
          );
          return { Component: ProfilePage };
        }
      },
      {
        path: '/cart',
        lazy: async () => {
          const { default: CartPage } = await import(
            '@/pages/cart/cart-page.tsx'
          );
          return { Component: CartPage };
        }
      },
      {
        path: '/brewing',
        element: <BrewingPage />
      },
      {
        path: '/find-your-coffee',
        lazy: async () => {
          const { default: FindYourCoffeePage } = await import(
            '@/pages/find-your-coffee/find-your-coffee.tsx'
          );
          return { Component: FindYourCoffeePage };
        }
      },
      {
        path: '/find-your-coffee/result',
        lazy: async () => {
          const { default: FindYourCoffeeResultPage } = await import(
            '@/pages/find-your-coffee-result/find-your-coffee-result.tsx'
          );
          return { Component: FindYourCoffeeResultPage };
        }
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
