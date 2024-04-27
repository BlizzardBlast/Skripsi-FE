import { expect, test } from 'vitest';
import capitalizeFirstLetter from './capitalize-first-letter';

test('capitalizes the first letter of a string', () => {
  const result = capitalizeFirstLetter('hello');
  expect(result).toBe('Hello');
});

test('leaves strings with a capitalized first letter unchanged', () => {
  const result = capitalizeFirstLetter('World');
  expect(result).toBe('World');
});

test('handles empty strings', () => {
  const result = capitalizeFirstLetter('');
  expect(result).toBe('');
});

test('handles strings with only one character', () => {
  const result = capitalizeFirstLetter('a');
  expect(result).toBe('A');
});

test('handles strings with only one capitalized character', () => {
  const result = capitalizeFirstLetter('A');
  expect(result).toBe('A');
});

test('handles strings with special characters', () => {
  const result = capitalizeFirstLetter('@hello');
  expect(result).toBe('@hello');
});

test('handles strings with numbers', () => {
  const result = capitalizeFirstLetter('1hello');
  expect(result).toBe('1hello');
});

test('handles null', () => {
  const result = capitalizeFirstLetter(null as unknown as string);
  expect(result).toBe('');
});

test('handles undefined', () => {
  const result = capitalizeFirstLetter(undefined as unknown as string);
  expect(result).toBe('');
});
