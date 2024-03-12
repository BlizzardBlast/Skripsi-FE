import { type AxiosError } from 'axios';
import { type ErrorResponses } from '../types/services/error';

// Create a utility function for handling API errors
const handleApiError = (error: AxiosError<ErrorResponses>): string => {
  if (error.response != null) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return error.response.data?.message != null
      ? `${error.response.data?.message}`
      : 'Ada kendala di server';
  }
  if (error.request != null) {
    // The request was made but no response was received
    return 'Ada kendala di server. Silakan coba lagi.';
  }
  // Something happened in setting up the request that triggered an error
  return 'Ada error di server.';
};

export default handleApiError;
