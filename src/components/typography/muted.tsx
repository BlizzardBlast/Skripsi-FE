import { type ReactNode } from 'react';

export default function TypographyMuted({
  children
}: {
  children: ReactNode;
}): JSX.Element {
  return <p className='text-sm text-muted-foreground'>{children}</p>;
}
