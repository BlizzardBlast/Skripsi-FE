import { cn } from '@/lib/utils.ts';
import { type ReactNode } from 'react';

export default function HeadingOne({
  children,
  className = ''
}: Readonly<{
  children: ReactNode;
  className?: string;
}>): JSX.Element {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className
      )}
    >
      {children}
    </h1>
  );
}
