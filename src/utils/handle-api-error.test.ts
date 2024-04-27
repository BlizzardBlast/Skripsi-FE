import { type ErrorResponses } from '@/types/services/error';
import { type AxiosError } from 'axios';
import { expect, test } from 'vitest';
import handleApiError from './handle-api-error';

test('handleApiError - response with message', () => {
  const error: AxiosError<ErrorResponses> = {
    response: {
      data: {
        message: 'Test error message'
      }
    }
  } as unknown as AxiosError<ErrorResponses>;

  const result = handleApiError(error);
  expect(result).toBe('Test error message');
});

test('handleApiError - response without message', () => {
  const error: AxiosError<ErrorResponses> = {
    response: {
      data: {}
    }
  } as unknown as AxiosError<ErrorResponses>;

  const result = handleApiError(error);
  expect(result).toBe('Ada kendala di server');
});

test('handleApiError - no response', () => {
  const error: AxiosError<ErrorResponses> = {
    request: {}
  } as unknown as AxiosError<ErrorResponses>;

  const result = handleApiError(error);
  expect(result).toBe('Ada kendala di server. Silakan coba lagi.');
});

test('handleApiError - request setup error', () => {
  const error: AxiosError<ErrorResponses> =
    {} as unknown as AxiosError<ErrorResponses>;

  const result = handleApiError(error);
  expect(result).toBe('Ada error di server.');
});
