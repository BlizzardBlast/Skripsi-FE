import { z } from 'zod';

const AddPromoValidationSchema = z.object({
  promo_code: z
    .string({ required_error: 'Promo Code is required.' })
    .min(1, { message: 'Promo Code is required.' }),
  promo_expiry_date: z.coerce
    .date({
      errorMap: (issue, { defaultError }) => ({
        message:
          issue.code === 'invalid_date'
            ? 'Promo Expiry Date is required.'
            : defaultError
      })
    })
    .refine((date) => date >= new Date(), {
      message: 'Expiry Date must be in the future.'
    }),
  discount: z
    .string({ required_error: 'Discount is required.' })
    .min(1, { message: 'Discount is required.' })
    .regex(/^\d+$/, { message: 'Discount must be a number.' }),
  minimum: z
    .string({ required_error: 'Minimum bought is required.' })
    .min(1, { message: 'Minimum bought is required.' })
    .regex(/^\d+$/, { message: 'Minimum bought must be a number.' }),
  maximum: z
    .string({ required_error: 'Maximum discount is required.' })
    .min(1, { message: 'Maximum discount is required.' })
    .regex(/^\d+$/, { message: 'Maximum discount must be a number.' })
});

export default AddPromoValidationSchema;
