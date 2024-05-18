import { z } from 'zod';

const AddProductValidationSchema = z.object({
  name: z
    .string({ required_error: 'Name is required.' })
    .min(1, { message: 'Name is required.' }),
  subname: z
    .string({ required_error: 'Subname is required.' })
    .min(1, { message: 'Subname is required.' }),
  origin: z
    .string({ required_error: 'Origin is required.' })
    .min(1, { message: 'Origin is required.' }),
  type: z
    .string({ required_error: 'Type is required.' })
    .min(1, { message: 'Type is required.' })
    .refine((value) => ['Robusta', 'Arabica', 'Bourbon'].includes(value), {
      message: 'Type can only be Robusta, Arabica, or Bourbon.'
    }),
  price: z
    .string({ required_error: 'Price is required.' })
    .min(1, { message: 'Price is required.' })
    .regex(/^\d+$/, { message: 'Price must be a number.' }),
  acidity: z
    .string({ required_error: 'Acidity is required.' })
    .min(1, { message: 'Acidity is required.' })
    .refine((value) => ['low', 'medium', 'high'].includes(value), {
      message: 'Acidity can only be Low, Medium, or High.'
    }),
  flavor: z
    .string({ required_error: 'Flavor is required.' })
    .min(1, { message: 'Flavor is required.' })
    .refine(
      (value) => ['earthy', 'chocolate', 'fruit', 'nutty'].includes(value),
      {
        message: 'Acidity can only be Earthy, Chocolate, Fruit, or Nutty.'
      }
    ),
  aftertaste: z
    .string({ required_error: 'Aftertaste is required.' })
    .min(1, { message: 'Aftertaste is required.' })
    .refine((value) => ['complex', 'lingering', 'short'].includes(value), {
      message: 'Acidity can only be Complex, Lingering, or Short.'
    }),
  sweetness: z
    .string({ required_error: 'Sweetness is required.' })
    .min(1, { message: 'Sweetness is required.' })
    .refine((value) => ['faint', 'noticeable', 'rich'].includes(value), {
      message: 'Acidity can only be Faint, Noticeable, or Rich.'
    }),
  image: z
    .string({ required_error: 'Image is required.' })
    .min(1, { message: 'Image is required.' })
});

export default AddProductValidationSchema;
