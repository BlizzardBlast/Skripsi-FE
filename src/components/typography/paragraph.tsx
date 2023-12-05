import { type ReactNode } from 'react';

export default function Paragraph({
  children
}: {
  children: ReactNode;
}): JSX.Element {
  return <p className='leading-7 [&:not(:first-child)]:mt-6'>{children}</p>;
}
