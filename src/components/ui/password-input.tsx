import { Input } from '@/components/ui/input.tsx';
import { FaEye } from '@react-icons/all-files/fa/FaEye';
import { FaEyeSlash } from '@react-icons/all-files/fa/FaEyeSlash';
import * as React from 'react';

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [isPasswordShown, setIsPasswordShown] = React.useState(false);

    return (
      <Input
        suffix={
          <button
            type='button'
            className='text-primary-text-color hover:text-gray-600'
            onClick={() => {
              setIsPasswordShown((prevIsPasswordShown) => !prevIsPasswordShown);
            }}
          >
            {isPasswordShown ? <FaEye /> : <FaEyeSlash />}
          </button>
        }
        className={className}
        {...props}
        ref={ref}
        type={isPasswordShown ? 'text' : 'password'}
        autoComplete='off'
      />
    );
  }
);
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
