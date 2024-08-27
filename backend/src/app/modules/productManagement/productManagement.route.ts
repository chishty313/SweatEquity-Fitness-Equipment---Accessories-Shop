import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductValidations } from './productManagement.validation';
import { ProductControllers } from './productManagement.controller';

const router = express.Router();

router.post(
  '/create-product',
  validateRequest(ProductValidations.createProductValidationSchema),
  ProductControllers.createProduct,
);

router.get('/:productId', ProductControllers.getSingleProduct);

router.get('/', ProductControllers.getAllProducts);

router.put(
  '/:productId',
  validateRequest(ProductValidations.updateProductValidationSchema),
  ProductControllers.updateProduct,
);

router.delete('/:productId', ProductControllers.deleteProduct);

export const ProductRoutes = router;
