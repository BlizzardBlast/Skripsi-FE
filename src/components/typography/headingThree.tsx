import { type ReactNode } from 'react';

export default function HeadingThree({
  children
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
      {children}
    </h3>
  );
}
