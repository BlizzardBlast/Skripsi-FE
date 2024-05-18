import Logo from '@/assets/kofebin_logo.svg';
import useHandleSignOut from '@/components/header/useHandleSignOut';
import LoadImage from '@/components/load-image/load-image';
import { Button } from '@/components/ui/button.tsx';
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  Dialog as DialogShadcn,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog.tsx';
import wrapAsyncFunction from '@/utils/wrap-async-function';
import useSignedIn from '@/zustand/useSignedIn';
import { Dialog } from '@headlessui/react';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import { Link } from 'react-router-dom';

type MobileHeaderProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileHeader({
  mobileMenuOpen,
  setMobileMenuOpen
}: Readonly<MobileHeaderProps>): JSX.Element {
  const isSignedIn = useSignedIn((state) => state.isSignedIn);
  const isSignInPage = location.pathname === '/sign-in';
  const { isLoading, handleSignOut } = useHandleSignOut();
  return (
    <Dialog
      as='div'
      className='bg-quaternary-color lg:hidden'
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className='fixed inset-0 z-10' />
      <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary-color px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-secondary-color'>
        <div className='flex items-center justify-between'>
          <Link to='/' className='-m-1.5 p-1.5' aria-label='Kofebin'>
            <span className='sr-only'>Kofebin</span>
            <LoadImage
              source={Logo}
              alternative='tailwind-logo'
              classes='w-48 h-14'
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
                to='/brewing'
                className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-tertiary-color'
                aria-label='Brewing'
              >
                Brewing
              </Link>
              {isSignedIn && (
                <Link
                  to='/find-your-coffee'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-tertiary-color'
                  aria-label='Find Your Coffee'
                >
                  Find Your Coffee
                </Link>
              )}
              <Link
                to='/shop'
                className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-tertiary-color'
                aria-label='Shop'
              >
                Shop
              </Link>
              <Link
                to='/modify-product'
                className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-tertiary-color'
                aria-label='Modify Product'
              >
                Modify Product
              </Link>
            </div>
            {!isSignedIn ? (
              <div className='py-6'>
                <Link
                  to={isSignInPage ? '/sign-up' : '/sign-in'}
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-tertiary-color'
                  aria-label={isSignInPage ? 'Sign Up' : 'Sign In'}
                >
                  {isSignInPage ? 'Sign Up' : 'Sign In'}
                </Link>
              </div>
            ) : (
              <div className='space-y-2 py-6'>
                <Link
                  to={'/cart'}
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-tertiary-color'
                  aria-label={'/cart'}
                >
                  Cart
                </Link>
                <Link
                  to={'/profile'}
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-tertiary-color'
                  aria-label={'/profile'}
                >
                  Profile
                </Link>
                <Link
                  to={'/transaction-history'}
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-tertiary-color'
                  aria-label={'/transaction-history'}
                >
                  Transaction History
                </Link>
                <DialogShadcn>
                  <DialogTrigger asChild>
                    <button
                      className='-mx-3 block w-full rounded-lg px-3 py-2 text-left text-base font-semibold leading-7 text-white hover:bg-tertiary-color'
                      aria-label={'Sign Out'}
                      type='button'
                    >
                      Sign Out
                    </button>
                  </DialogTrigger>
                  <DialogContent
                    className='sm:max-w-[425px]'
                    dialogOverlayClassName='bg-black opacity-50'
                  >
                    <DialogHeader>
                      <DialogTitle className='text-2xl'>
                        Sign Out Confirmation
                      </DialogTitle>
                    </DialogHeader>
                    <span className='text-center sm:text-left'>
                      Are you sure you want to sign out?
                    </span>
                    <DialogFooter>
                      <Button
                        onClick={wrapAsyncFunction(handleSignOut)}
                        isLoading={isLoading}
                      >
                        Yes
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </DialogShadcn>
              </div>
            )}
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
