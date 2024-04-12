import { env } from '@/utils/env';
import axios, {
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios';
import Cookies from 'js-cookie';

export const AxiosInstance = axios.create({
  baseURL: env.VITE_FETCH_URL,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  }
});

// Request interceptor. Runs before your request reaches the server
const onRequest = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig<unknown>> => {
  // If http method is `post | put | delete` and XSRF-TOKEN cookie is
  // not present, call '/sanctum/csrf-cookie' to set CSRF token, then
  // proceed with the initial response
  if (
    (config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'delete') &&
    (Cookies.get('XSRF-TOKEN') ?? '') === ''
  ) {
    return await setCSRFToken().then(() => config);
  }
  return config;
};

// A function that calls '/api/csrf-cookie' to set the CSRF cookies. The
// default is 'sanctum/csrf-cookie' but you can configure it to be anything.
const setCSRFToken = async (): Promise<AxiosResponse<unknown, unknown>> => {
  return await AxiosInstance.get('sanctum/csrf-cookie'); // resolves to '/api/csrf-cookie'.
};

// attach your interceptor
AxiosInstance.interceptors.request.use(onRequest, null);

export default AxiosInstance;
