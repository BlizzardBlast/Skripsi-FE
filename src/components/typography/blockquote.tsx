import { type ReactNode } from 'react';

export default function Blockquote({
  children
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <blockquote className='mt-6 border-l-2 pl-6 italic'>{children}</blockquote>
  );
}
