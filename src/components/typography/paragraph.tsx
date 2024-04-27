import { cn } from '@/lib/utils.ts';
import { type ReactNode } from 'react';

export default function Paragraph({
  className,
  testId,
  children
}: Readonly<{
  className?: string;
  testId?: string;
  children: ReactNode;
}>): JSX.Element {
  return (
    <p className={cn('leading-7', className)} data-testid={testId}>
      {children}
    </p>
  );
}
