import { expect, test } from 'vitest';
import ConvertToRupiah from './convert-to-rupiah';

test('converts 0 to Rupiah', () => {
  const result = ConvertToRupiah(0);
  expect(result).toBe('Rp0');
});

test('converts 1 to Rupiah', () => {
  const result = ConvertToRupiah(1);
  expect(result).toBe('Rp1');
});

test('converts 1000 to Rupiah', () => {
  const result = ConvertToRupiah(1000);
  expect(result).toBe('Rp1.000');
});

test('converts 1000000 to Rupiah', () => {
  const result = ConvertToRupiah(1000000);
  expect(result).toBe('Rp1.000.000');
});

test('converts negative amount to Rupiah', () => {
  const result = ConvertToRupiah(-1000);
  expect(result).toBe('Rp-1.000');
});
