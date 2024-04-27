import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import Spinner from './spinner';

test('Spinner renders with correct class', async () => {
  const { container } = render(<Spinner className='test-class' />);

  const spinner = container.firstChild;
  expect(spinner).toHaveClass(
    'h-16 w-16 animate-spin rounded-full border-4 border-solid border-white border-b-transparent test-class'
  );
});
