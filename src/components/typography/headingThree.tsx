import { cn } from '@/lib/utils.ts';
import { type ReactNode } from 'react';

export default function HeadingThree({
  children,
  className
}: Readonly<{
  children: ReactNode;
  className?: string;
}>): JSX.Element {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
    >
      {children}
    </h3>
  );
}
