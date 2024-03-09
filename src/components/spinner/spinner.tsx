import { cn } from '@/lib/utils.ts';

export default function Spinner({
  className
}: Readonly<{
  className?: string;
}>): JSX.Element {
  return (
    <div
      className={cn(
        'h-16 w-16 animate-spin rounded-full border-4 border-solid border-white border-b-transparent',
        className
      )}
    ></div>
  );
}
