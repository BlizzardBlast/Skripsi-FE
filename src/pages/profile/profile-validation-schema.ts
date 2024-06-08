import { z } from 'zod';

const profileValidationSchema = z.object({
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
    .max(20, { message: 'Name must be at most 20 characters long.' })
});

export default profileValidationSchema;
