import zod from 'zod';

const envSchema = zod.object({
  VITE_FETCH_URL: zod.string(),
  VITE_PAYPAL_MODE: zod.string(),
  VITE_PAYPAL_CLIENT_ID: zod.string(),
  VITE_PAYPAL_CLIENT_SECRET: zod.string()
});

export const env = envSchema.parse(import.meta.env);
