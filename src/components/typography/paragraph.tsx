import { cn } from '@/lib/utils.ts';
import { type ReactNode } from 'react';

export default function Paragraph({
  className,
  children
}: Readonly<{
  className?: string;
  children: ReactNode;
}>): JSX.Element {
  return <p className={cn('leading-7', className)}>{children}</p>;
}
