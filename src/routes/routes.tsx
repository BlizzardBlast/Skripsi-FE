import Layout from '@/layout/layout.tsx';
import Home from '@/pages/home/home.tsx';
import SignInPage from '@/pages/sign-in/SignIn.tsx';
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
      }
    ],
    errorElement: <RootErrorElement />
  }
]);

export default function Routes(): JSX.Element {
  return <RouterProvider router={router} />;
}
