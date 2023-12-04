import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
  return (
    <div className='w-full'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
