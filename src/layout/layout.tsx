import Footer from '@/components/footer/footer.tsx';
import Header from '@/components/header/header.tsx';
import { Toaster } from '@/components/ui/toaster.tsx';
import useSignedInRoute from '@/hooks/useSignedInRoute';
import { Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
  useSignedInRoute();
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
