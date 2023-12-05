import { type ReactNode } from 'react';

export default function TypographySmall({
  children
}: {
  children: ReactNode;
}): JSX.Element {
  return <small className='text-sm font-medium leading-none'>{children}</small>;
}
