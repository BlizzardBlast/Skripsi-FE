import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import Spinner from './spinner';

test('Spinner renders with correct class', async () => {
  const { container } = render(<Spinner />);

  const spinner = container.firstChild?.firstChild as HTMLElement;
  expect(spinner).toHaveClass(
    'm-auto h-8 w-8 animate-spin fill-black text-gray-200 dark:text-gray-600'
  );
});
