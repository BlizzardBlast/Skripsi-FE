import { type ReactNode } from 'react';

export default function InlineCode({
  children
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
      {children}
    </code>
  );
}