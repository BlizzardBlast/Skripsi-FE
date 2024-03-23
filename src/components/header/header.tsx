import Logo from '@/assets/kofebin_logo.svg';
import useUserData from '@/components/header/useUserData.ts';
import LoadImage from '@/components/loadImage/loadImage.tsx';
import { Button } from '@/components/ui/button.tsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/components/ui/use-toast.ts';
import SignOut from '@/services/sign-out/sign-out.ts';
import wrapAsyncFunction from '@/utils/wrapAsyncFunction.ts';
import useSignedIn from '@/zustand/useSignedIn.ts';
import { Dialog } from '@headlessui/react';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import { FaRegUser } from '@react-icons/all-files/fa/FaRegUser';
import { FaShoppingCart } from '@react-icons/all-files/fa/FaShoppingCart';
import { FaUserCircle } from '@react-icons/all-files/fa/FaUserCircle';
import { IoLogOutOutline } from '@react-icons/all-files/io5/IoLogOutOutline';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useUserData();
  const { toast } = useToast();
  const isSignedIn = useSignedIn((state) => state.isSignedIn);
  const isSignInPage = location.pathname === '/sign-in';
  const signOut = useSignedIn((state) => state.signOut);

  const handleSignOut = async (): Promise<void> => {
    try {
      await SignOut({ signOut });
      toast({
        title: 'You have signed out!',
        description: 'Sign out is successful!'
      });
    } catch (error) {
      const err = error as Error;
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.'
      });
      console.log(err);
      throw err;
    }
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className='bg-secondary-color'>
      <nav
        className='mx-auto flex items-center justify-between p-2 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link to='/' className='-m-1.5 p-1.5' aria-label='Kofebin'>
            <span className='sr-only'>Kofebin</span>
            <LoadImage
              source={Logo}
              alternative='tailwind-logo'
              classes='w-48 h-14'
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
          {!isSignedIn ? (
            <Button
              asChild
              size={'sm'}
              className='my-0 rounded-full bg-white px-5 py-0 text-lg leading-6 text-primary-text-color hover:bg-primary-text-color hover:text-white'
            >
              <Link
                to={isSignInPage ? '/sign-up' : '/sign-in'}
                aria-label={isSignInPage ? 'Sign Up' : 'Sign In'}
              >
                {isSignInPage ? 'Sign Up' : 'Sign In'}
              </Link>
            </Button>
          ) : (
            <div className='mt-1 flex flex-row gap-5'>
              <FaShoppingCart className='cursor-pointer text-2xl text-white' />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Link to={'/profile'} aria-label='Profile'>
                    <FaUserCircle className='cursor-pointer text-2xl text-white' />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='absolute right-0 w-56'>
                  <DropdownMenuLabel>{user?.username}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem
                      onClick={() => {
                        navigate('/profile');
                      }}
                    >
                      <FaRegUser className='mr-2 h-4 w-4' />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={wrapAsyncFunction(handleSignOut)}
                    >
                      <IoLogOutOutline className='mr-2 h-4 w-4' />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
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
                  to='/find-your-coffee'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-tertiary-color'
                  aria-label='Find Your Coffee'
                >
                  Find Your Coffee
                </Link>
                <Link
                  to='/shop'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-tertiary-color'
                  aria-label='Shop'
                >
                  Shop
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
                  <span
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-tertiary-color'
                    aria-label={'Sign Out'}
                    onClick={wrapAsyncFunction(handleSignOut)}
                  >
                    Sign Out
                  </span>
                </div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
