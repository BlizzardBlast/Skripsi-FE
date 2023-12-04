import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from '@radix-ui/react-navigation-menu';
import { Link } from 'react-router-dom';
import { navigationMenuTriggerStyle } from '../ui/navigationMenuTriggerStyle';
import SearchHeader from '../search/search-header';

export default function Header(): JSX.Element {
  return (
    <NavigationMenu className='flex justify-center items-center h-[10svh]'>
      <NavigationMenuList className='flex flex-row justify-between w-[98.9svw] gap-4'>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>Home</NavigationMenuTrigger>
          <NavigationMenuContent className='absolute'>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <Link to="/hmm">
                <h1>Introduction</h1>
                Re-usable components built using Radix UI and Tailwind CSS.
              </Link>
              <Link to="/hmm">
                <h1>Installation</h1>
                How to install dependencies and structure your app.
              </Link>
              <Link to="/hmm">
                <h1>Typography</h1>
                Styles for headings, paragraphs, lists...etc
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <div className='flex flex-row items-center'>
          <NavigationMenuItem>
            <Link to='/' className={navigationMenuTriggerStyle()}>
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to='/about-us' className={navigationMenuTriggerStyle()}>
              About Us
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to='/contact' className={navigationMenuTriggerStyle()}>
              Contact Us
            </Link>
          </NavigationMenuItem>
        </div>
        <SearchHeader />
        <div className='flex flex-row'>
          <NavigationMenuItem>
            <Link to='/login' className={navigationMenuTriggerStyle()}>
              Login
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to='/register' className={navigationMenuTriggerStyle()}>
              Register
            </Link>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
