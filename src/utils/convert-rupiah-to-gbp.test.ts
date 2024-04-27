import { expect, test } from 'vitest';
import ConvertRupiahToGbp from './convert-rupiah-to-gbp';

test('converts 0 rupiah to GBP', () => {
  const result = ConvertRupiahToGbp(0);
  expect(result).toBe(0);
});

test('converts 1 rupiah to GBP', () => {
  const result = ConvertRupiahToGbp(1);
  expect(result).toBeCloseTo(0.00004984147648);
});

test('converts 1000000 rupiah to GBP', () => {
  const result = ConvertRupiahToGbp(1000000);
  expect(result).toBeCloseTo(49.84147648);
});

test('converts negative rupiah to GBP', () => {
  const result = ConvertRupiahToGbp(-1000000);
  expect(result).toBeCloseTo(-49.84147648);
});
