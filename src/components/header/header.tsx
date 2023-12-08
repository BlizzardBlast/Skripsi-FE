import { cn } from '@/lib/utils.ts';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import SearchHeader from '../search/search-header.tsx';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '../ui/navigation-menu.tsx';
import { navigationMenuTriggerStyle } from '../ui/navigationMenuTriggerStyle.tsx';
import Paragraph from '../typography/paragraph.tsx';

export default function Header(): JSX.Element {
  return (
    <NavigationMenu className='flex justify-center items-center h-[10svh]'>
      <NavigationMenuList className='flex flex-row justify-between w-[98.9svw] gap-4'>
        <div className='flex flex-row items-center'>
          <NavigationMenuItem>
            <Link to='/' className={navigationMenuTriggerStyle()}>
              Beranda
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to='/kontak' className={navigationMenuTriggerStyle()}>
              Hubungi Kami
            </Link>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <Link to='/about-us' className={navigationMenuTriggerStyle()}>
              About Us
            </Link>
          </NavigationMenuItem> */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tentang Kami</NavigationMenuTrigger>
            <NavigationMenuContent className='absolute'>
              <ul className='flex gap-3 p-4 w-[350px] lg:w-[450px] items-center'>
                <div>
                  <li className='row-span-3'>
                    <Paragraph className='flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md'>
                      <span className='mb-2 mt-4 text-lg font-medium'>
                        Tentang Kami
                      </span>
                    </Paragraph>
                  </li>
                </div>
                <div>
                  <ListItem href='/docs' title='Mengenai AsuhHewan'>
                    Kenal kami lebih dalam
                  </ListItem>
                  <ListItem
                    href='/docs/installation'
                    title='Staf & Dewan Direksi'
                  >
                    Struktur Organisasi dari AsuhHewan
                  </ListItem>
                  <ListItem href='/docs/primitives/typography' title='Kontak'>
                    Hubungi Kami
                  </ListItem>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </div>
        <SearchHeader />
        <div className='flex flex-row'>
          <NavigationMenuItem>
            <Link to='/masuk' className={navigationMenuTriggerStyle()}>
              Masuk
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to='/daftar' className={navigationMenuTriggerStyle()}>
              Daftar
            </Link>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
