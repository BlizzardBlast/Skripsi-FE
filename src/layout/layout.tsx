import Footer from '@/components/footer/footer.tsx';
import Header from '@/components/header/header.tsx';
import { Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
  return (
    <div className='w-full'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
