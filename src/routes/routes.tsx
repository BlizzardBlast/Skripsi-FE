import Layout from '@/layout/layout.tsx';
import Home from '@/pages/home/home.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]);

export default function Routes(): JSX.Element {
  return <RouterProvider router={router} />;
}
