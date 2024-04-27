import { z } from 'zod';

const SignInValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'The e-mail has to be filled.' })
    .email('This is not a valid e-mail.'),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long.' })
    .refine((value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value), {
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, and one digit.'
    })
});

export default SignInValidationSchema;
