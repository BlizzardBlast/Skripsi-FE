import Layout from '@/layout/layout.tsx';
import Home from '@/pages/home/home.tsx';
import SignInPage from '@/pages/sign-in/SignIn.tsx';
import SignUpPage from '@/pages/sign-up/SignUp.tsx';
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
      }
    ],
    errorElement: <RootErrorElement />
  }
]);

export default function Routes(): JSX.Element {
  return <RouterProvider router={router} />;
}
