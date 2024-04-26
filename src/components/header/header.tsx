import DesktopHeader from '@/components/header/desktop-header';
import MobileHeader from '@/components/header/mobile-header';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Header(): JSX.Element {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className='bg-secondary-color'>
      <DesktopHeader setMobileMenuOpen={setMobileMenuOpen} />
      <MobileHeader
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
