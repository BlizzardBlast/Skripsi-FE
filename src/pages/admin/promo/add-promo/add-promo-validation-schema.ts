import { z } from 'zod';

const AddPromoValidationSchema = z
  .object({
    promo_code: z
      .string({ required_error: 'Promo Code is required.' })
      .min(1, { message: 'Promo Code is required.' }),
    promo_start_date: z.coerce
      .date({
        errorMap: (issue, { defaultError }) => ({
          message:
            issue.code === 'invalid_date'
              ? 'Promo Start Date is required.'
              : defaultError
        })
      })
      .refine(
        (date) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return date >= today;
        },
        {
          message: 'Start Date must be in the future.'
        }
      ),
    promo_expiry_date: z.coerce
      .date({
        errorMap: (issue, { defaultError }) => ({
          message:
            issue.code === 'invalid_date'
              ? 'Promo Expiry Date is required.'
              : defaultError
        })
      })
      .refine(
        (date) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return date >= today;
        },
        {
          message: 'Expiry Date must be in the future.'
        }
      ),
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
      .regex(/^\d+$/, { message: 'Maximum discount must be a number.' }),
    max_use: z
      .string({ required_error: 'Maximum Usage is required.' })
      .min(1, { message: 'Maximum Usage is required.' })
      .regex(/^\d+$/, { message: 'Maximum Usage must be a number.' }),
    max_use_per_user: z
      .string({ required_error: 'Maximum Usage Per User is required.' })
      .min(1, { message: 'Maximum Usage Per User is required.' })
      .regex(/^\d+$/, { message: 'Maximum Usage Per User must be a number.' })
  })
  .refine((data) => data.promo_expiry_date >= data.promo_start_date, {
    message: 'Expiry Date must be after the Start Date.',
    path: ['promo_expiry_date']
  });

export default AddPromoValidationSchema;
