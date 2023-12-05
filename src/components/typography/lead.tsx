import { type ReactNode } from 'react';

export default function Lead({
  children
}: {
  children: ReactNode;
}): JSX.Element {
  return <p className='text-xl text-muted-foreground'>{children}</p>;
}
