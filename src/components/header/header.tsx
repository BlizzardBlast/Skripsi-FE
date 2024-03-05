import { Button } from '@/components/ui/button.tsx';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import LoadImage from '../loadImage/loadImage.tsx';

export default function Header(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-secondary-color'>
      <nav
        className='mx-auto flex items-center justify-between p-2 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link to='#!' className='-m-1.5 p-1.5' aria-label='Kofebin'>
            <span className='sr-only'>Kofebin</span>
            <LoadImage
              source={Logo}
              alternative='tailwind-logo'
              classes='w-48'
            />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
            onClick={() => {
              setMobileMenuOpen(true);
            }}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          <Link
            to='/coffee-beans-list'
            className='px-2 text-lg leading-6 text-white hover:text-primary-text-color'
            aria-label='Coffee Beans List'
          >
            Coffee Beans List
          </Link>
          <Link
            to='/find-your-coffee'
            className='px-2 text-lg leading-6 text-white hover:text-primary-text-color'
            aria-label='Find Your Coffee'
          >
            Find Your Coffee
          </Link>
          <Link
            to='/shop'
            className='px-2 text-lg leading-6 text-white hover:text-primary-text-color'
            aria-label='Shop'
          >
            Shop
          </Link>
        </div>
        <div className='hidden gap-10 lg:flex lg:flex-1 lg:justify-end'>
          <Button
            asChild
            size={'sm'}
            className='my-0 rounded-full bg-white px-5 py-0 text-lg leading-6 text-primary-text-color hover:bg-primary-text-color hover:text-white'
          >
            <Link to='/sign-in' aria-label='Sign In'>
              Sign In
            </Link>
          </Button>
        </div>
      </nav>
      <Dialog
        as='div'
        className='bg-quaternary-color lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary-color px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-secondary-color'>
          <div className='flex items-center justify-between'>
            <Link to='#!' className='-m-1.5 p-1.5' aria-label='Kofebin'>
              <span className='sr-only'>Kofebin</span>
              <LoadImage
                source={Logo}
                alternative='tailwind-logo'
                classes='w-48'
              />
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-white'
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-quaternary-color'>
              <div className='space-y-2 py-6'>
                <Link
                  to='/adopsi'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-tertiary-color'
                  aria-label='Adopsi'
                >
                  Adopsi
                </Link>
                <Link
                  to='/kontak'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-tertiary-color'
                  aria-label='Hubungi Kami'
                >
                  Hubungi Kami
                </Link>
              </div>
              <div className='py-6'>
                <Link
                  to='/sign-in'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-tertiary-color'
                  aria-label='Sign In'
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
