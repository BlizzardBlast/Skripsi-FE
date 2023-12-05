import { type ReactNode } from 'react';

export default function TypographyLarge({
  children
}: {
  children: ReactNode;
}): JSX.Element {
  return <div className='text-lg font-semibold'>{children}</div>;
}
