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
import useUserContext from '@/context/user-context/useUserContext';
import { cn } from '@/lib/utils';
import wrapAsyncFunction from '@/utils/wrap-async-function';
import { Dialog } from '@headlessui/react';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import { Link } from 'react-router-dom';

type MobileHeaderProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const individualMenuClassname =
  '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-tertiary-color';

export default function MobileHeader({
  mobileMenuOpen,
  setMobileMenuOpen
}: Readonly<MobileHeaderProps>): JSX.Element {
  const { isSignedIn } = useUserContext();
  const { user } = useUserContext();
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
                className={individualMenuClassname}
                aria-label='Brewing'
              >
                Brewing
              </Link>
              {isSignedIn && (
                <Link
                  to='/find-your-coffee'
                  className={individualMenuClassname}
                  aria-label='Find Your Coffee'
                >
                  Find Your Coffee
                </Link>
              )}
              {(!isSignedIn || user?.role === 'member') && (
                <Link
                  to='/shop'
                  className={individualMenuClassname}
                  aria-label='Shop'
                >
                  Shop
                </Link>
              )}
              {user?.role === 'admin' && (
                <Link
                  to='/modify-product'
                  className={individualMenuClassname}
                  aria-label='Modify Product'
                >
                  Modify Product
                </Link>
              )}
              {user?.role === 'admin' && (
                <Link
                  to='/promo'
                  className={individualMenuClassname}
                  aria-label='Promo'
                >
                  Promo
                </Link>
              )}
            </div>
            {!isSignedIn ? (
              <div className='py-6'>
                <div>
                  <Link
                    to={'/sign-in'}
                    className={individualMenuClassname}
                    aria-label='Sign In'
                  >
                    Sign In
                  </Link>
                </div>
                <div>
                  <Link
                    to={'/sign-up'}
                    className={individualMenuClassname}
                    aria-label='Sign Up'
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            ) : (
              <div className='space-y-2 py-6'>
                {user?.role === 'member' && (
                  <Link
                    to={'/cart'}
                    className={individualMenuClassname}
                    aria-label={'/cart'}
                  >
                    Cart
                  </Link>
                )}
                <Link
                  to={'/profile'}
                  className={individualMenuClassname}
                  aria-label={'/profile'}
                >
                  Profile
                </Link>
                {user?.role === 'member' && (
                  <Link
                    to={'/transaction-history'}
                    className={individualMenuClassname}
                    aria-label={'/transaction-history'}
                  >
                    Transaction History
                  </Link>
                )}
                <DialogShadcn>
                  <DialogTrigger asChild>
                    <button
                      className={cn(
                        individualMenuClassname,
                        'w-full text-left'
                      )}
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
