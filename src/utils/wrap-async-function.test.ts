import { expect, test } from 'vitest';
import wrapAsyncFunction from './wrap-async-function';

test('wrapAsyncFunction executes async function without returning a promise', async () => {
  let num = 2;
  const asyncFn = async (): Promise<number> => (num = num * 2);
  const wrappedFn = wrapAsyncFunction(asyncFn);

  wrappedFn();

  // Wait for the wrapped function to complete
  await new Promise((resolve) => setTimeout(resolve, 0));

  expect(num).toBe(4);
});
