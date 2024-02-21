import { type ReactNode } from 'react';

export default function Paragraph({
  className,
  children
}: Readonly<{
  className?: string;
  children: ReactNode;
}>): JSX.Element {
  return <p className={`leading-7 ${className}`}>{children}</p>;
}
