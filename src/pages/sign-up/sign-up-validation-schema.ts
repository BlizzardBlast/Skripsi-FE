import { z } from 'zod';

const SignUpValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'The e-mail has to be filled.' })
    .email('This is not a valid e-mail.'),
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long.' })
    .max(20, { message: 'Username must be at most 20 characters long.' }),
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long.' })
    .max(20, { message: 'Name must be at most 20 characters long.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long.' })
    .refine((value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value), {
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, and one digit.'
    })
});

export default SignUpValidationSchema;
