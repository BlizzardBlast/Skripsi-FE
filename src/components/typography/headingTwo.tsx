import { cn } from '@/lib/utils.ts';
import { type ReactNode } from 'react';

export default function HeadingTwo({
  children,
  className
}: Readonly<{
  children: ReactNode;
  className?: string;
}>): JSX.Element {
  return (
    <h2
      className={cn(
        'scroll-m-20 text-3xl font-semibold tracking-tight',
        className
      )}
    >
      {children}
    </h2>
  );
}
