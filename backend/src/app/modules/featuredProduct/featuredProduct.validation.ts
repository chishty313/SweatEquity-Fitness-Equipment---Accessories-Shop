import { z } from 'zod';

const createFeaturedProductValidationSchema = z.object({
  body: z.object({
    productId: z.string(),
  }),
});

export const FeaturedProductValidations = {
  createFeaturedProductValidationSchema,
};
