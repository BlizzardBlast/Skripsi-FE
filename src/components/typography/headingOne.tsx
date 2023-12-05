import { type ReactNode } from 'react';

export default function HeadingOne({
  children
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
      {children}
    </h1>
  );
}
