import { type ReactNode } from 'react';

export default function TypographyMuted({
  children
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return <p className='text-sm text-muted-foreground'>{children}</p>;
}
