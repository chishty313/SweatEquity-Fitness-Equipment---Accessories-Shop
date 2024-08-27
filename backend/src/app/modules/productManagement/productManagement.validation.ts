import { z } from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    category: z.string(),
    price: z.number(),
    stock: z.number(),
  }),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    price: z.number().optional(),
    stock: z.number().optional(),
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
