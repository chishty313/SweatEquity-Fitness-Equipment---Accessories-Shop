import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FeaturedProductValidations } from './featuredProduct.validation';
import { FeaturedProductControllers } from './featuredProduct.controller';

const router = express.Router();

router.post(
  '/create-featured-product',
  validateRequest(
    FeaturedProductValidations.createFeaturedProductValidationSchema,
  ),
  FeaturedProductControllers.createFeaturedProduct,
);

router.get('/', FeaturedProductControllers.getAllFeaturedProducts);

router.delete('/:productId', FeaturedProductControllers.deleteFeaturedProduct);

export const FeaturedProductRoutes = router;
