import { Router } from 'express';
import { ProductRoutes } from '../modules/productManagement/productManagement.route';
import { FeaturedProductRoutes } from '../modules/featuredProduct/featuredProduct.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/product-management',
    route: ProductRoutes,
  },
  {
    path: '/featured-product',
    route: FeaturedProductRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
