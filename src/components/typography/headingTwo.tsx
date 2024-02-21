import { type ReactNode } from 'react';

export default function HeadingTwo({
  children
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
      {children}
    </h2>
  );
}
