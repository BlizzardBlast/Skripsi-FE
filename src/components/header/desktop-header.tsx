import Logo from '@/assets/kofebin_logo.svg';
import useUserData from '@/components/header/useUserData.ts';
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
import wrapAsyncFunction from '@/utils/wrap-async-function';
import useSignedIn from '@/zustand/useSignedIn.ts';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';
import { FaRegUser } from '@react-icons/all-files/fa/FaRegUser';
import { FaShoppingCart } from '@react-icons/all-files/fa/FaShoppingCart';
import { FaUserCircle } from '@react-icons/all-files/fa/FaUserCircle';
import { IoLogOutOutline } from '@react-icons/all-files/io5/IoLogOutOutline';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type DesktopHeaderProps = {
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DesktopHeader({
  setMobileMenuOpen
}: Readonly<DesktopHeaderProps>): JSX.Element {
  const navigate = useNavigate();
  const user = useUserData();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const isSignedIn = useSignedIn((state) => state.isSignedIn);
  const isSignInPage = location.pathname === '/sign-in';
  const signOut = useSignedIn((state) => state.signOut);

  const handleSignOut = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await SignOut({ signOut });
      toast({
        title: 'You have signed out!',
        description: 'Sign out is successful!'
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      const err = error as Error;
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.'
      });
      console.error(err);
      throw err;
    }
  };
  return (
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
          to='/brewing'
          className='px-2 text-lg leading-6 text-white hover:text-primary-text-color'
          aria-label='Brewing'
        >
          Brewing
        </Link>
        {isSignedIn && (
          <Link
            to='/find-your-coffee'
            className='px-2 text-lg leading-6 text-white hover:text-primary-text-color'
            aria-label='Find Your Coffee'
          >
            Find Your Coffee
          </Link>
        )}
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
            <Link to={'/cart'} aria-label='Cart'>
              <FaShoppingCart className='cursor-pointer text-2xl text-white' />
            </Link>
            <DialogShadcn>
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
                    <DialogTrigger asChild>
                      <DropdownMenuItem>
                        <IoLogOutOutline className='mr-2 h-4 w-4' />
                        <span>Sign out</span>
                      </DropdownMenuItem>
                    </DialogTrigger>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <DialogContent
                className='sm:max-w-[425px]'
                dialogOverlayClassName='bg-black opacity-50'
              >
                <DialogHeader>
                  <DialogTitle className='text-2xl'>
                    Sign Out Confirmation
                  </DialogTitle>
                </DialogHeader>
                Are you sure you want to sign out?
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
    </nav>
  );
}
