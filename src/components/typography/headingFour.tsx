import { type ReactNode } from 'react';

export default function HeadingFour({
  children
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>
      {children}
    </h4>
  );
}
