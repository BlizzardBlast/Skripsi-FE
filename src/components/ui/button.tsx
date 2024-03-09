import Spinner from '@/components/spinner/spinner.tsx';
import { buttonVariants } from '@/components/ui/buttonVariants.ts';
import { cn } from '@/lib/utils.ts';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, isLoading, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={isLoading === true ? true : props.disabled}
      >
        {isLoading === true ? <Spinner className='h-7 w-7' /> : props.children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button };
